import type { Metadata } from "next"
import { Inter } from "next/font/google"

import { Navbar } from "@/components/home/navbar"
import { Footer } from "@/components/home/footer"

import "@/styles/globals.scss"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Castynet Studios - Empowering Software",
  description:
    "we are a software studio. Focused on creating elegant, modern & functional apps.",
  openGraph: {
    type: "website",
    url: "https://castynet.africa/",
    title: "Castynet Studios - Empowering Software",
    description:
      "we are a software studio. Focused on creating elegant, modern & functional apps.",
    images: [
      {
        url: "https://i.pinimg.com/280x280_RS/39/37/b9/3937b9b02327ce8d34137ad232640a39.jpg",
        width: 1200,
        height: 630,
        alt: "Castynet Studios - Empowering Software",
      },
    ],
  },
  twitter: {
    cardType: "summary_large_image",
    site: "@castynetstudios",
    handle: "@castynetstudios",
  } as {
    cardType: string
    site: string
    handle: string
  },
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
