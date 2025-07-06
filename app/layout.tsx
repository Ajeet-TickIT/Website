import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "J Kumar Build Tech - Expert Waterproofing & Structural Repair Services in Noida",
  description:
    "Leading waterproofing specialists in Noida with 15+ years experience. Expert terrace waterproofing, basement waterproofing, structural repair & anti-carbonation coating services.",
  keywords:
    "waterproofing Noida, terrace waterproofing, basement waterproofing, structural repair, anti-carbonation coating, building restoration, injection grouting",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} pt-20 lg:pt-16`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
