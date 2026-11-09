import { Code2, Layers, Database, Cloud, type LucideIcon } from "lucide-react"

export interface SkillGroup {
  title: string
  icon: LucideIcon
  items: string[]
}

// Source: naman_resume1.pdf
export const skills: SkillGroup[] = [
  {
    title: "Languages",
    icon: Code2,
    items: ["TypeScript", "JavaScript", "PHP", "Java", "Python", "SQL", "HTML/CSS"],
  },
  {
    title: "Frameworks",
    icon: Layers,
    items: ["React", "Next.js", "Node.js", "Laravel", "Spring Boot", "Moodle", "FastAPI", "Tailwind CSS", "RTK Query", "Zustand"],
  },
  {
    title: "Data & Integrations",
    icon: Database,
    items: ["PostgreSQL", "MongoDB", "Firebase", "Razorpay", "Agora", "CometChat", "Zoom API", "OpenAI API"],
  },
  {
    title: "Cloud & Tooling",
    icon: Cloud,
    items: ["AWS (S3, EC2)", "Docker", "GitHub Actions", "GitLab", "Gradle", "Vercel", "Vitest", "Playwright", "Claude Code", "Cursor"],
  },
]
