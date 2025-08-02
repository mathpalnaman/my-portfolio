import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Naman Mathpal - Computer Science Student & Developer",
  description:
    "Computer Science student and passionate developer specializing in web development, competitive programming, and innovative solutions.",
  keywords: [
    "developer",
    "portfolio",
    "computer science",
    "student",
    "react",
    "next.js",
    "typescript",
    "competitive programming",
  ],
  authors: [{ name: "Naman Mathpal" }],
  openGraph: {
    title: "Naman Mathpal - Computer Science Student & Developer",
    description:
      "Computer Science student and passionate developer specializing in web development, competitive programming, and innovative solutions.",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
