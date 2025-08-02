import Image from "next/image"
import { Star, Download, ExternalLink, Github } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  rating?: number
  downloads?: string
  demoUrl?: string
  githubUrl?: string
  featured?: boolean
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
  featured = false,
}: ProjectCardProps) {
  return (
    <div className="modern-card p-6 group cursor-pointer">
      <div className="flex gap-6">
        {/* App Icon */}
        <div className="flex-shrink-0">
          <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-lg group-hover:scale-110 transition-transform duration-300">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              width={80}
              height={80}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white line-clamp-1 group-hover:text-primary transition-colors">
              {title}
            </h3>
            {featured && (
              <span className="bg-gradient-to-r from-coral to-coral-400 text-white px-3 py-1 rounded-full text-xs font-bold ml-3 flex-shrink-0 shadow-lg">
                Featured
              </span>
            )}
          </div>

          <p className="text-slate-600 dark:text-slate-400 line-clamp-2 mb-4 leading-relaxed">{description}</p>

          {/* Rating and downloads */}
          <div className="flex items-center gap-4 mb-4">
            <div className="rating-modern flex items-center gap-2">
              <Star className="w-4 h-4 rating-star" />
              <span className="font-bold">{rating}</span>
            </div>
            <div className="modern-chip flex items-center gap-2">
              <Download className="w-4 h-4 text-primary" />
              <span className="font-semibold">{downloads}</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.slice(0, 4).map((tag) => (
              <span key={tag} className="modern-chip text-xs">
                {tag}
              </span>
            ))}
            {tags.length > 4 && (
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">+{tags.length - 4} more</span>
            )}
          </div>

          {/* Action buttons */}
          <div className="flex gap-3">
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-primary to-primary-400 text-white px-6 py-2.5 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                Demo
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 px-6 py-2.5 rounded-xl font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
