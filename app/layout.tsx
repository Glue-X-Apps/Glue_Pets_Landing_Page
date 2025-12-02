import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

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
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
