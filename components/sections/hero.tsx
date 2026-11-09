"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Download, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SITE } from "@/lib/site"

const screenshots = [
  { src: "/screenshots/data-alchemist.png", alt: "Data Alchemist: upload and validate spreadsheets" },
  { src: "/screenshots/vichar.png", alt: "Vichaar: AI idea validation report" },
  { src: "/screenshots/cricfolio.png", alt: "CricFolio: cricket tournament website" },
]

// Every value here comes from the resume or the public npm/Maven listings.
const stats = [
  { value: "1 yr", label: "Experience" },
  { value: "360", label: "Library tests" },
  { value: "27 KB", label: "Zero-dep package" },
  { value: "B.Tech", label: "CSE, 2025" },
]

const updates = [
  "Published hinglish-profanity v0.2.1 to npm and Maven Central.",
  "Building Gurukul, a Moodle 5.3 LMS, as a sole developer at Synonyms Online.",
  "Portfolio rebuilt with my current work and experience.",
]

export function Hero() {
  const [selected, setSelected] = useState<{ src: string; alt: string } | null>(null)

  useEffect(() => {
    if (!selected) return
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSelected(null)
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [selected])

  return (
    <section className="relative pt-32 pb-12 overflow-hidden bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 mb-8">
          <div className="flex-shrink-0 mx-auto sm:mx-0">
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-[22px] bg-gradient-to-br from-primary to-accent shadow-xl flex items-center justify-center text-white font-bold text-4xl relative overflow-hidden">
              <span className="z-10">NM</span>
              <div className="absolute top-0 left-0 w-full h-1/2 bg-white/10" />
            </div>
          </div>

          <div className="flex flex-col justify-center text-center sm:text-left flex-grow">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-1 tracking-tight">{SITE.name}</h1>
            <p className="text-primary font-medium text-lg mb-2">{SITE.role}</p>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Synonyms Online · Delhi NCR · Open to roles and freelance
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between sm:justify-start sm:gap-4 border-b border-border pb-6 mb-6 overflow-x-auto no-scrollbar">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center px-4 min-w-[88px] border-r border-border/50 last:border-0">
              <div className="font-bold text-foreground">{stat.value}</div>
              <div className="text-xs text-muted-foreground whitespace-nowrap">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="w-full sm:max-w-md mb-8">
          <Button className="w-full h-12 text-lg rounded-full mb-3 shadow-lg" asChild>
            <a href="#contact">Hire me</a>
          </Button>
          <Button variant="outline" className="w-full rounded-full text-primary border-primary/30 hover:bg-primary/5" asChild>
            <a href={SITE.resume} target="_blank" rel="noopener noreferrer">
              <Download className="w-4 h-4 mr-2" aria-hidden />
              Resume
            </a>
          </Button>
        </div>

        <div className="mb-10">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold">What&apos;s new</h2>
            <span className="text-xs text-muted-foreground">Updated {SITE.lastUpdated}</span>
          </div>
          <ul className="bg-secondary/30 p-4 rounded-xl text-sm leading-relaxed text-muted-foreground list-disc pl-8 space-y-1">
            {updates.map((u) => (
              <li key={u}>{u}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-4">App previews</h2>
          <div className="flex gap-4 overflow-x-auto pb-6 no-scrollbar snap-x">
            {screenshots.map((shot) => (
              <button
                key={shot.src}
                type="button"
                onClick={() => setSelected(shot)}
                aria-label={`View ${shot.alt}`}
                className="min-w-[280px] sm:min-w-[320px] aspect-video bg-secondary rounded-2xl relative overflow-hidden snap-center border border-border group hover:ring-2 hover:ring-primary/50 focus-visible:ring-2 focus-visible:ring-primary transition-all"
              >
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  sizes="(min-width: 640px) 320px, 280px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </button>
            ))}
          </div>
        </div>

        {selected && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label={selected.alt}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={() => setSelected(null)}
          >
            <button
              type="button"
              aria-label="Close preview"
              autoFocus
              className="absolute top-6 right-6 text-white/70 hover:text-white p-2"
              onClick={() => setSelected(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <div
              className="relative w-[95vw] md:w-[70vw] aspect-video rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={selected.src} alt={selected.alt} fill sizes="95vw" className="object-contain" />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
