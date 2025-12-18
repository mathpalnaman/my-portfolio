import Image from "next/image"
import { Star, Download, MoreVertical, CheckCircle2, Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  rating?: number
  downloads?: string
  demoUrl?: string
  githubUrl?: string
  category?: string
  size?: string
}

export function ProjectCard({
  title,
  description,
  image,
  tags,
  rating = 4.5,
  downloads = "1K+",
  demoUrl,
  githubUrl,
  category = "Productivity",
  size = "15 MB"
}: ProjectCardProps) {
  return (
    <div className="flex flex-col gap-4 p-4 rounded-xl hover:bg-secondary/30 transition-colors border border-transparent hover:border-border/50 group">
      
      {/* App Header Row */}
      <div className="flex items-start gap-4">
        {/* App Icon */}
        <div className="relative flex-shrink-0">
          <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-sm border border-border/50 bg-white dark:bg-slate-900">
             {/* Using a placeholder if image fails, but try to use your actual icons */}
            <Image
              src={image}
              alt={title}
              width={64}
              height={64}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* App Info */}
        <div className="flex-1 min-w-0 pt-1">
          <h3 className="text-base font-medium leading-tight text-foreground truncate pr-2">
            {title}
          </h3>
          <div className="text-xs text-muted-foreground mt-1 mb-1">
            Naman Mathpal • {category}
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
             <span className="flex items-center gap-0.5 text-foreground font-medium">
               {rating} <Star className="w-2.5 h-2.5 fill-foreground text-foreground"/>
             </span>
             <span>•</span>
             <span>{size}</span>
             <span>•</span>
             <span className="bg-secondary px-1.5 rounded text-[10px]">Open Source</span>
          </div>
        </div>
      </div>

      {/* Description & Screenshots Area */}
      <div className="pl-[80px]">
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4 leading-relaxed">
          {description}
        </p>

        {/* Action Buttons (Install/Uninstall) */}
        <div className="flex items-center gap-3">
          {demoUrl && (
            <Button className="h-9 px-6 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-sm shadow-sm transition-all active:scale-95 flex-1 sm:flex-none" asChild>
              <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                Install
              </a>
            </Button>
          )}
          
          {githubUrl && (
            <Button variant="outline" className="h-9 px-6 rounded-full border-border text-foreground hover:bg-secondary font-medium text-sm flex-1 sm:flex-none" asChild>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                Code
              </a>
            </Button>
          )}
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2 mt-4 opacity-60 hover:opacity-100 transition-opacity">
           {tags.slice(0, 3).map(tag => (
             <span key={tag} className="text-[10px] px-2 py-1 bg-secondary rounded-md text-muted-foreground">
               {tag}
             </span>
           ))}
        </div>
      </div>
    </div>
  )
}