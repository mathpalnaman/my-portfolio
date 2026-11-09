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
  twitter: { card: "summary_large_image" },
}

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE.name,
  jobTitle: SITE.role,
  url: SITE.url,
  email: `mailto:${SITE.email}`,
  address: { "@type": "PostalAddress", addressRegion: "Delhi NCR", addressCountry: "IN" },
  worksFor: { "@type": "Organization", name: "Synonyms Online Pvt. Ltd." },
  alumniOf: "KCC Institute of Technology and Management",
  sameAs: [SITE.github, SITE.linkedin],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={roboto.variable}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\u003c") }}
        />
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