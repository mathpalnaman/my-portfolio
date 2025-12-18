import { ProjectCard } from "./project-card"
import { ArrowRight } from "lucide-react"

// Updated data based on your resume
const projects = [
  {
    title: "Data Alchemist",
    category: "Productivity",
    description: "AI-Powered data configuration tool. Validate and parse CSV/XLSX files with Natural Language Processing using Gemini API.",
    image: "/data-alchemist-icon.png", 
    tags: ["Next.js 15", "Gemini AI", "TypeScript", "Zustand"],
    rating: 4.8,
    size: "45 MB",
    demoUrl: "https://data-alchemist-woad-five.vercel.app/",
    githubUrl: "https://github.com/mathpalnaman/data-alchemist",
  },
  {
    title: "Vichar - Idea Validator",
    category: "Business",
    description: "Blockchain-backed idea validation platform. Secure your intellectual property with Truffle/Ganache and get AI feasibility reports.",
    image: "/vichar-icon.png",
    tags: ["React", "PostgreSQL", "Blockchain", "FastAPI"],
    rating: 4.9,
    size: "62 MB",
    demoUrl: "https://vichaar-rho.vercel.app/",
    githubUrl: "https://github.com/mathpalnaman/Vichaar",
  },
  {
    title: "Cricfolio",
    category: "Sports",
    description: "The ultimate cricket tournament manager. Register players, track live scores, and view leaderboards with real-time updates.",
    image: "/cricfolio-icon.png",
    tags: ["React", "Framer Motion", "Tailwind", "PostgreSQL"],
    rating: 4.6,
    size: "34 MB",
    demoUrl: "https://cricket-gules.vercel.app/",
    githubUrl: "https://github.com/mathpalnaman/-cricket",
  },
  {
    title: "Hackle",
    category: "Puzzle",
    description: "A daily coding wordle game. Challenge your programming vocabulary with a new term every day.",
    image: "/hackle-icon.png",
    tags: ["Next.js", "Game Logic", "TypeScript"],
    rating: 4.7,
    size: "12 MB",
    demoUrl: "https://hackle.vercel.app/",
    githubUrl: "https://github.com/mathpalnaman/Hackle",
  },
]

interface ProjectsProps {
  searchQuery: string
}

export function Projects({ searchQuery }: ProjectsProps) {
  // Filter logic
  const filteredProjects = projects.filter((project) => {
    const query = searchQuery.toLowerCase()
    return (
      project.title.toLowerCase().includes(query) ||
      project.category.toLowerCase().includes(query) ||
      project.tags.some(tag => tag.toLowerCase().includes(query))
    )
  })

  return (
    <section id="projects" className="py-12 border-b border-border/50 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-bold flex items-center gap-2">
            {searchQuery ? `Search results for "${searchQuery}"` : "More by Naman Mathpal"}
            {!searchQuery && <ArrowRight className="w-5 h-5 text-muted-foreground" />}
          </h2>
          {!searchQuery && (
            <span className="text-sm text-primary font-medium cursor-pointer hover:underline">
              See all
            </span>
          )}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-muted-foreground">
            No apps found matching "{searchQuery}". Try searching for "React" or "Game".
          </div>
        )}

        {/* Banner only shows if not searching */}
        {!searchQuery && (
          <div className="mt-12 p-6 rounded-xl bg-gradient-to-r from-secondary to-background border border-border flex items-center justify-between">
             <div>
                <div className="font-bold text-foreground mb-1">Join the beta program</div>
                <div className="text-sm text-muted-foreground">Try new features before they are officially released.</div>
             </div>
             <button className="text-primary text-sm font-bold hover:bg-primary/10 px-4 py-2 rounded-lg transition-colors">
                Join
             </button>
          </div>
        )}

      </div>
    </section>
  )
}