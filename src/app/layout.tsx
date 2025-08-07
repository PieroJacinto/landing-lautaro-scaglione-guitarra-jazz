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
  title: "Lautaro Scaglione - Clases de Guitarra Jazz Online | Profesor EMPA",
  description: "Clases de guitarra jazz online con profesor graduado de EMPA. Más de 50 estudiantes en 8 países. Clase de prueba GRATIS. Horarios flexibles para toda América Latina.",
  keywords: "clases guitarra jazz, profesor jazz online, EMPA, guitarra jazz Argentina, clases online América Latina",
  authors: [{ name: "Lautaro Scaglione" }],
  openGraph: {
    title: "Lautaro Scaglione - Clases de Guitarra Jazz Online",
    description: "Aprende guitarra jazz con un profesor graduado de EMPA. Clase de prueba GRATIS.",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lautaro Scaglione - Clases de Guitarra Jazz Online",
    description: "Aprende guitarra jazz con un profesor graduado de EMPA. Clase de prueba GRATIS.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
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
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}