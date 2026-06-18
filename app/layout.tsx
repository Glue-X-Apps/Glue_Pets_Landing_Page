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
  metadataBase: new URL('https://gluepets.click'),
  title: {
    default: "GluePets — Cuidado integral y nutrición para tu mascota",
    template: "%s | GluePets"
  },
  description:
    "La App para el cuidado integral de tu mascota. Registra comidas, vacunas, eventos veterinarios y conéctate en tiempo real con tu clínica.",
  generator: "Next.js",
  alternates: {
    canonical: 'https://gluepets.click',
  },
  openGraph: {
    title: "GluePets — Cuidado integral y nutrición para tu mascota",
    description:
      "Lleva el control de alimentación, peso, diario médico y conéctate con tu clínica veterinaria en tiempo real.",
    url: 'https://gluepets.click',
    siteName: 'GluePets',
    locale: 'es_ES',
    type: 'website',
    images: [
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
    title: "GluePets — Cuidado integral y nutrición para tu mascota",
    description: "Lleva el control de alimentación, peso, diario médico y conéctate con tu clínica veterinaria en tiempo real.",
    images: ['/img/GluePetsLogo.png'],
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
