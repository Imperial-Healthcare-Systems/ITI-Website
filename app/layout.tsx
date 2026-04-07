import type React from "react"
import type { Metadata } from "next"
import { Cormorant_Garamond, DM_Mono, Geist, Geist_Mono, Outfit } from "next/font/google"
import AuthSessionProvider from "@/components/session-provider"
import "./globals.css"

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

const itiSans = Outfit({
  subsets: ["latin"],
  variable: "--font-iti-sans",
})

const itiDisplay = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-iti-display",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
})

const itiMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-iti-mono",
  weight: ["300", "400", "500"],
})

export const metadata: Metadata = {
  title: "Imperial Tech Innovations | AI Healthcare Revenue Cycle Management Platform",
  description:
    "Imperia.ai by Imperial Healthcare Systems is an AI-powered healthcare revenue cycle management platform offering medical billing automation, denial management, predictive analytics, and revenue optimization.",

  keywords: [
    "Imperia.ai platform",
    "Imperia AI healthcare",
    "Imperial Healthcare Systems",
    "RCM IRRF revenue framework",
    "Imperial AI billing platform",
    "Imperial Healthcare systems pvt. ltd.",
    "Imperial Healthcare systems LLC",
    "imperialhealthsystems.cloud",
    "AI healthcare revenue cycle management",
    "healthcare RCM automation platform",
    "AI medical billing software",
    "revenue cycle management services USA",
    "AI-powered medical billing and coding",
    "healthcare revenue optimization platform",
    "denial management AI healthcare",
    "predictive analytics healthcare RCM",
    "healthcare financial performance optimization",
    "AI claims processing healthcare"
  ],

  icons: {
    icon: { url: "/imperial logo icon only.jpg", type: "image/jpeg" },
    apple: "/imperial logo icon only.jpg",
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${itiSans.variable} ${itiDisplay.variable} ${itiMono.variable} font-sans antialiased`}
      >
        <AuthSessionProvider>{children}</AuthSessionProvider>
      </body>
    </html>
  )
}
