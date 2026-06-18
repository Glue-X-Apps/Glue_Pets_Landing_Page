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
  title: "GluePets — Seguimiento nutricional para mascotas",
  description:
    "GluePets te ayuda a controlar la alimentación de tus mascotas, registrar comidas y establecer metas nutricionales personalizadas.",
  generator: "v0.app",
  openGraph: {
    title: "GluePets — Seguimiento nutricional para mascotas",
    description:
      "GluePets te ayuda a controlar la alimentación de tus mascotas, registrar comidas y establecer metas nutricionales personalizadas.",
    images: ["/img/GluePetsLogo.png"],
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
