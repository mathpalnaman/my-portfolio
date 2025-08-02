import { ProjectCard } from "./project-card"
import { Sparkles } from "lucide-react"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Vichar - Chain Your Thoughts",
    description:
      "A full-stack AI-powered idea validation tool enabling structured assessment of feasibility, market fit, and risks. Built with PostgreSQL-backed API to process user input, abstract core insights, and generate detailed analysis reports for entrepreneurs and product teams. Integrated Truffle and Ganache to simulate a blockchain network for timestamping validated ideas, ensuring proof of originality and ownership.",
    image: "/vichar-icon.png",
    tags: ["React", "Tailwind", "PostgreSQL", "FastAPI", "Truffle", "Ganache"],
    rating: 4.9,
    downloads: "500+",
    demoUrl: "https://vichaar-rho.vercel.app/",
    githubUrl: "https://github.com/mathpalnaman/Vichaar",
    featured: true,
  },
  {
    title: "Hackle - Wordle for Developers",
    description:
      "An interactive daily puzzle game inspired by Wordle, targeting programming enthusiasts. Integrated a technical word bank and FastAPI for real-time backend word validation. Designed a dynamic on-screen keyboard that tracks used letters without revealing hints. Emphasized minimalist UI/UX for distraction-free gameplay and learning.",
    image: "/hackle-icon.png",
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "FastAPI"],
    rating: 4.7,
    downloads: "800+",
    demoUrl: "https://hackle.vercel.app/",
    githubUrl: "https://github.com/mathpalnaman/Hackle",
    featured: true,
  },
  {
    title: "Cricfolio Website",
    description:
      "A cricket-themed web platform for fans, players, and organizers. Built with React.js, Tailwind CSS, and Framer Motion for a dynamic user experience. Features tournament and player registration, trending matches, leader-board and responsive design for ease of use. Enhanced user engagement by 40% and reduced bounce rates by 25%.",
    image: "/cricfolio-icon.png",
    tags: ["React", "Tailwind CSS", "FastAPI", "PostgreSQL"],
    rating: 4.6,
    downloads: "1.2K+",
    demoUrl: "https://cricket-gules.vercel.app/",
    githubUrl: "https://github.com/mathpalnaman/-cricket",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 section-bg relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" />
            Featured Work
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-6">My Projects</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            A collection of applications and tools built to address real-world challenges, showcase modern development practices, and demonstrate technical expertise.
          </p>
        </div>

        <div className="space-y-8 mb-16">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <div className="text-center">
          <button className="modern-button group">
            <span>Explore All Projects</span>
            <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  )
}
