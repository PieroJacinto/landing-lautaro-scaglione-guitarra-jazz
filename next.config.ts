import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimización de imágenes
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: [
      'lautaroscaglione.com',
      'www.lautaroscaglione.com',
      'i.ytimg.com', // Para thumbnails de YouTube
      'img.youtube.com', // Para imágenes de YouTube
    ],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 días
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Compresión y optimización
  compress: true,
  
  // PWA y caching
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react'],
  },

  // Headers de seguridad y SEO
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Security headers
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          },
          // Cache headers para assets estáticos
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ],
      },
      {
        source: '/favicon.ico',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ],
      }
    ];
  },

  // Redirects para SEO
  async redirects() {
    return [
      // Redirect www to non-www (o viceversa según prefieras)
      {
        source: '/(.*)',
        has: [
          {
            type: 'host',
            value: 'www.lautaroscaglione.com',
          },
        ],
        destination: 'https://lautaroscaglione.com/:path*',
        permanent: true,
      },
      // Redirects de URLs antiguas si las hubiera
      {
        source: '/clases',
        destination: '/#method',
        permanent: true,
      },
      {
        source: '/contacto',
        destination: '/#contact',
        permanent: true,
      },
    ];
  },

  // Rewrites para URLs limpias
  async rewrites() {
    return [
      // Mantener URLs limpias y SEO-friendly
      {
        source: '/programa-fret-gps',
        destination: '/#method',
      },
      {
        source: '/testimonios',
        destination: '/#testimonials',
      },
      {
        source: '/sobre-lautaro',
        destination: '/#about',
      },
    ];
  },

  // Webpack optimizations
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Optimización para producción
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          default: false,
          vendors: false,
          vendor: {
            name: 'vendor',
            chunks: 'all',
            test: /node_modules/,
            priority: 20
          },
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'all',
            priority: 10,
            reuseExistingChunk: true,
            enforce: true
          }
        }
      };
    }

    // Alias para importaciones más limpias
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': require('path').resolve(__dirname, 'src'),
      '@/components': require('path').resolve(__dirname, 'src/components'),
      '@/lib': require('path').resolve(__dirname, 'src/lib'),
      '@/app': require('path').resolve(__dirname, 'src/app'),
    };

    return config;
  },

  // Configuración de compilación
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error']
    } : false,
  },

  // Output optimizado
  output: 'standalone',
  
  // Configuración de TypeScript
  typescript: {
    ignoreBuildErrors: false,
  },

  // ESLint
  eslint: {
    ignoreDuringBuilds: false,
  },

  // Variables de entorno públicas para el cliente
  env: {
    CALENDLY_URL: 'https://calendly.com/lautaroguitarra/sesion-de-claridad',
    WHATSAPP_NUMBER: '+541134060511',
    SITE_URL: process.env.NODE_ENV === 'production' 
      ? 'https://lautaroscaglione.com' 
      : 'http://localhost:3000',
  },

  // Configuración para análisis de bundle
  ...(process.env.ANALYZE === 'true' && {
    experimental: {
      bundlePagesRouterDependencies: true,
    }
  }),
};

export default nextConfig;