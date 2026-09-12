import type React from "react"
import type { Metadata } from "next"
import { Outfit, Instrument_Serif } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
})

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
})

export const metadata: Metadata = {
  metadataBase: new URL('https://gluepets.cl'),
  title: {
    default: "GluePets — Cuidado integral y nutrición científica para tu mascota",
    template: "%s | GluePets"
  },
  description:
    "La plataforma y App para el cuidado integral de tu mascota. Monitoreo de nutrición científica (WSAVA), cálculo BMR/RER, vacunas, diario médico y conexión en tiempo real con tu clínica veterinaria.",
  keywords: [
    "GluePets",
    "app mascotas",
    "cuidado de mascotas",
    "nutrición mascotas",
    "salud animal",
    "veterinaria",
    "historia clínica digital",
    "diario médico veterinario",
    "WSAVA",
    "vacunas perro gato",
    "Chile"
  ],
  authors: [{ name: "GluePets Inc.", url: "https://gluepets.cl" }],
  creator: "GluePets Inc.",
  publisher: "GluePets Inc.",
  category: "Health & Fitness",
  generator: "Next.js",
  alternates: {
    canonical: 'https://gluepets.cl',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "GluePets — Cuidado integral y nutrición científica para tu mascota",
    description:
      "Lleva el control de alimentación, peso, diario médico y conéctate con tu clínica veterinaria en tiempo real.",
    url: 'https://gluepets.cl',
    siteName: 'GluePets',
    locale: 'es_CL',
    type: 'website',
    images: [
      {
        url: '/img/hero-gluepets-optimized.png',
        width: 1200,
        height: 630,
        alt: 'GluePets - Cuidado Integral y Nutrición de Mascotas',
      },
      {
        url: '/img/GluePetsLogo.png',
        width: 512,
        height: 512,
        alt: 'GluePets Logo',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "GluePets — Cuidado integral y nutrición científica para tu mascota",
    description: "Lleva el control de alimentación, peso, diario médico y conéctate con tu clínica veterinaria en tiempo real.",
    images: ['/img/hero-gluepets-optimized.png'],
  },
  icons: {
    icon: "/img/GluePetsLogo.png",
    shortcut: "/img/GluePetsLogo.png",
    apple: "/img/GluePetsLogo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${outfit.variable} ${instrumentSerif.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
