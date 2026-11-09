import { ProjectCard } from "@/components/project-card"
import { projects } from "@/lib/data/projects"

interface ProjectsProps {
  searchQuery: string
}

export function Projects({ searchQuery }: ProjectsProps) {
  const query = searchQuery.trim().toLowerCase()
  const filtered = projects.filter(
    (p) =>
      p.title.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query) ||
      p.tags.some((tag) => tag.toLowerCase().includes(query)),
  )

  return (
    <section id="projects" className="py-12 border-b border-border/50 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl font-bold mb-8">{query ? `Search results for "${searchQuery}"` : "Projects"}</h2>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            {filtered.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        ) : (
          <p className="text-center py-12 text-muted-foreground">
            No projects match &quot;{searchQuery}&quot;. Try &quot;React&quot; or &quot;TypeScript&quot;.
          </p>
        )}
      </div>
    </section>
  )
}
