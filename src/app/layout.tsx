import type { Metadata } from "next"
import { Inter } from "next/font/google"

import { Navbar } from "@/components/home/navbar"
import { Footer } from "@/components/home/footer"

import "./globals.scss"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Castynet Studios - Empowering Software",
  description:
    "we are a software studio. Focused on creating elegant, modern & functional apps.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
