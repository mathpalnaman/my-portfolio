import type React from "react"
import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { SITE } from "@/lib/site"

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: "Naman Mathpal | Full-Stack Developer",
  description:
    "Full-stack developer in Delhi NCR building React, Next.js, Laravel and Node.js platforms. Author of hinglish-profanity on npm and Maven Central.",
  alternates: { canonical: "/" },
  authors: [{ name: "Naman Mathpal" }],
  openGraph: {
    title: "Naman Mathpal | Full-Stack Developer",
    description:
      "Full-stack developer in Delhi NCR. Author of hinglish-profanity on npm and Maven Central.",
    type: "website",
    url: "/",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={roboto.variable}>
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