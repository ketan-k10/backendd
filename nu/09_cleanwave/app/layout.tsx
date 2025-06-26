import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CleanWave - Smart Beach Cleanup Platform",
  description:
    "Join the movement to clean Mumbai's beaches. Track your impact, connect with volunteers, and make a difference.",
  keywords: "beach cleanup, environmental conservation, Mumbai beaches, volunteer management, waste tracking",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
