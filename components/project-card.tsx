import Image from "next/image"
import { Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Project } from "@/lib/data/projects"

export function ProjectCard({ title, description, image, tags, links, category, featured }: Project) {
  return (
    <article className="flex flex-col gap-4 p-4 rounded-xl hover:bg-secondary/30 transition-colors border border-transparent hover:border-border/50">
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 flex-shrink-0 rounded-2xl overflow-hidden shadow-sm border border-border/50 bg-secondary flex items-center justify-center">
          {image ? (
            <Image src={image} alt="" width={64} height={64} className="w-full h-full object-cover" />
          ) : (
            <span aria-hidden className="text-xl font-bold text-primary">
              {title.slice(0, 2).toLowerCase()}
            </span>
          )}
        </div>

        <div className="flex-1 min-w-0 pt-1">
          <h3 className="text-base font-medium leading-tight text-foreground truncate">{title}</h3>
          <div className="text-xs text-muted-foreground mt-1">Naman Mathpal • {category}</div>
          {featured && (
            <span className="inline-block mt-1 bg-primary/10 text-primary px-1.5 rounded text-[10px] font-medium">
              Featured
            </span>
          )}
        </div>
      </div>

      <div className="sm:pl-20">
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{description}</p>

        <div className="flex items-center gap-3">
          {links.map((link) =>
            link.kind === "primary" ? (
              <Button key={link.label} className="h-9 px-6 rounded-full font-medium text-sm flex-1 sm:flex-none" asChild>
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              </Button>
            ) : (
              <Button key={link.label} variant="outline" className="h-9 px-6 rounded-full font-medium text-sm flex-1 sm:flex-none" asChild>
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" aria-hidden />
                  {link.label}
                </a>
              </Button>
            ),
          )}
        </div>

        <ul className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag) => (
            <li key={tag} className="text-[11px] px-2 py-1 bg-secondary rounded-md text-muted-foreground">
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
