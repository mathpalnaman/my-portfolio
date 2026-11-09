export interface ProjectLink {
  label: string
  href: string
  kind: "primary" | "secondary"
}

export interface Project {
  title: string
  category: string
  description: string
  image?: string
  tags: string[]
  links: ProjectLink[]
  featured?: boolean
}

// Only verified facts (see CLAUDE.md). No ratings, sizes or download counts.
export const projects: Project[] = [
  {
    title: "hinglish-profanity",
    category: "Library",
    description:
      "Profanity detection for English, Hindi (Devanagari) and romanized Hinglish. Returns evidence (matches, severity, confidence), not a boolean. Zero runtime dependencies, with matching TypeScript and Java implementations.",
    tags: ["TypeScript", "Java 17", "npm", "Maven Central"],
    featured: true,
    links: [
      { label: "npm", href: "https://www.npmjs.com/package/hinglish-profanity", kind: "primary" },
      { label: "Code", href: "https://github.com/mathpalnaman/hinglish-profanity", kind: "secondary" },
    ],
  },
  {
    title: "Data Alchemist",
    category: "Productivity",
    description:
      "Upload CSV or XLSX files, validate them against rules, and describe new rules in plain English. Gemini turns natural language into validation rules.",
    image: "/data-alchemist-icon.png",
    tags: ["Next.js", "TypeScript", "Zustand", "TanStack Table", "Gemini"],
    links: [
      { label: "Live demo", href: "https://data-alchemist-woad-five.vercel.app/", kind: "primary" },
      { label: "Code", href: "https://github.com/mathpalnaman/data-alchemist", kind: "secondary" },
    ],
  },
  {
    title: "Vichaar",
    category: "Business",
    description:
      "AI-assisted idea validation: checks an idea against existing patents and startups and returns market insights and suggestions.",
    image: "/vichaar-icon.png",
    tags: ["React", "FastAPI", "Clerk", "Tailwind"],
    links: [
      { label: "Live demo", href: "https://vichaar-rho.vercel.app/", kind: "primary" },
      { label: "Code", href: "https://github.com/mathpalnaman/Vichaar", kind: "secondary" },
    ],
  },
  {
    title: "CricFolio",
    category: "Sports",
    description:
      "Cricket tournament website with player registration, trending matches, leaderboards and a FastAPI backend.",
    image: "/cricfolio-icon.png",
    tags: ["React", "Vite", "Tailwind", "Framer Motion", "FastAPI"],
    links: [
      { label: "Live demo", href: "https://cricket-gules.vercel.app/", kind: "primary" },
      { label: "Code", href: "https://github.com/mathpalnaman/cricfolio", kind: "secondary" },
    ],
  },
]
