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
  title: "FRET GPS - Lautaro Scaglione | Visualiza el Mástil e Improvisa con Fluidez",
  description: "Programa FRET GPS: Sistema completo de 3 módulos para dominar la improvisación en jazz. Plan personalizado, videos customizados y soporte 24/7 con Lautaro Scaglione, formación EMPA.",
  keywords: "guitarra jazz, improvisación, FRET GPS, Lautaro Scaglione, clases guitarra online, EMPA, jazz guitar, América Latina",
  authors: [{ name: "Lautaro Scaglione" }],
  creator: "Lautaro Scaglione",
  publisher: "FRET GPS",
  robots: "index, follow",
  openGraph: {
    title: "FRET GPS - Programa de Guitarra Jazz con Lautaro Scaglione",
    description: "Transforma tu improvisación con el sistema FRET GPS. 3 módulos progresivos para desarrollar tu voz única en el jazz.",
    url: "https://fretgps.com",
    siteName: "FRET GPS",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FRET GPS - Programa de Guitarra Jazz",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FRET GPS - Visualiza el Mástil e Improvisa con Fluidez",
    description: "Programa completo de 3 módulos para dominar la improvisación en jazz con Lautaro Scaglione.",
    images: ["/og-image.jpg"],
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#d4af37",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}