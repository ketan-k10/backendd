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
<div className="relative h-96">
                    {/* <Image
                      src="/placeholder.svg?height=400&width=600&text=Mumbai+Coastline+Map"
                      alt="Mumbai coastline interactive map"
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                    /> */}
                    {/* Interactive hotspots */}
                    <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-lg animate-pulse cursor-pointer"></div>
                    <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-lg cursor-pointer"></div>
                    <div className="absolute top-3/4 right-1/3 w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-lg cursor-pointer"></div>

                    {/* Overlay info */}
                    <div className="absolute bottom-4 left-4 right-4 bg-white/90 dark:bg-[#1E1E1E]/90 backdrop-blur-sm rounded-lg p-4">
                      <h3 className="font-semibold text-gray-900 dark:text-[#C9D1D9] mb-2">Mumbai's Cleanup Zones</h3>
                      <div className="grid grid-cols-3 gap-2 text-xs">
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <span className="text-gray-700 dark:text-gray-300">High Priority</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-gray-700 dark:text-gray-300">Active Cleanup</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-gray-700 dark:text-gray-300">Restored</span>
                        </div>
                      </div>
                    </div>
                  </div>