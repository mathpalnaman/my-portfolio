import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Naman Mathpal | Full-Stack Developer",
  description:
    "Full-Stack Developer specializing in React, Node.js, and Cloud Native solutions. 2025 Computer Science Graduate focused on scalable web applications.",
  keywords: [
    "Full-Stack Developer",
    "Software Engineer",
    "React Developer",
    "Next.js",
    "Node.js",
    "AWS",
    "Docker",
    "Portfolio",
  ],
  authors: [{ name: "Naman Mathpal" }],
  openGraph: {
    title: "Naman Mathpal | Full-Stack Developer",
    description:
      "Full-Stack Developer specializing in React, Node.js, and Cloud Native solutions. 2025 Computer Science Graduate.",
    type: "website",
    // Add these if you have a deployed URL and a preview image later
    // url: 'https://naman-mathpal.vercel.app/',
    // images: ['/opengraph-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}