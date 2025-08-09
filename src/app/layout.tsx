import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Programa FRET GPS - Lautaro Scaglione | Desarrolla tu Voz en la Improvisación",
  description: "¿Ya tocas escalas pero siempre suenas igual? Programa FRET GPS para guitarristas intermedios que quieren desarrollar su propia voz en la improvisación. Formación EMPA. Evaluación gratuita.",
  keywords: "improvisación guitarra, guitarristas intermedios, clases jazz online, FRET GPS, Lautaro Scaglione, EMPA, desarrollar voz musical, escalas pentatónicas, arpegios jazz",
  authors: [{ name: "Lautaro Scaglione" }],
  openGraph: {
    title: "Programa FRET GPS - Desarrolla tu Voz en la Improvisación",
    description: "Para guitarristas intermedios que ya tocan escalas básicas pero quieren dejar de sonar repetitivos y crear su identidad musical única.",
    type: "website",
    locale: "es_ES",
    siteName: "Lautaro Scaglione - Programa FRET GPS",
  },
  twitter: {
    card: "summary_large_image",
    title: "Programa FRET GPS - Desarrolla tu Voz en la Improvisación",
    description: "Para guitarristas intermedios que ya tocan escalas básicas pero quieren dejar de sonar repetitivos.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  other: {
    "application-name": "Programa FRET GPS",
    "apple-mobile-web-app-title": "FRET GPS - Lautaro Scaglione",
    "format-detection": "telephone=no",
  },
  alternates: {
    canonical: "https://lautaroscaglione.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#d4af37" />
        
        {/* Structured Data - JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Lautaro José Scaglione",
              "jobTitle": "Profesor de Guitarra Jazz e Improvisación",
              "description": "Graduado de EMPA, especializado en improvisación y desarrollo de identidad musical. Creador del método FRET GPS.",
              "url": "https://lautaroscaglione.com",
              "sameAs": [
                "https://instagram.com/lautaroguitarra",
                "https://youtube.com/@lautaroscaglione"
              ],
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "EMPA - Escuela de Música Popular de Avellaneda"
              },
              "teaches": {
                "@type": "Course",
                "name": "Programa FRET GPS",
                "description": "Programa para guitarristas intermedios que quieren desarrollar su voz única en la improvisación",
                "provider": {
                  "@type": "Person",
                  "name": "Lautaro Scaglione"
                }
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}