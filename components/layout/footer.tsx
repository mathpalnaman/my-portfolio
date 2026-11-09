import { Github, Linkedin, Mail } from "lucide-react"
import { SITE } from "@/lib/site"

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Links - Mix of Aesthetic and Functional */}
        <div className="flex flex-wrap gap-x-6 gap-y-2 mb-8 text-xs text-muted-foreground font-medium">
          {/* Functional Links disguised as Store Links */}
          <a href="#projects" className="hover:text-foreground transition-colors">All Apps</a>
          <a href="#about" className="hover:text-foreground transition-colors">About Developer</a>
          
          {/* The Resume Link You Needed */}
          <a 
            href={SITE.resume} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors text-primary font-bold"
          >
            Resume (PDF)
          </a>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Logo / Copyright */}
          <div className="flex items-center gap-4">
             <div className="text-xs text-muted-foreground">
               © {new Date().getFullYear()} Naman Mathpal
             </div>
          </div>

          {/* Social Icons (Minimal) */}
          <div className="flex gap-4">
             <a href={SITE.github} aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
               <Github className="w-5 h-5" />
             </a>
             <a href={SITE.linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
               <Linkedin className="w-5 h-5" />
             </a>
             <a href={`mailto:${SITE.email}`} aria-label="Email" className="text-muted-foreground hover:text-foreground transition-colors">
               <Mail className="w-5 h-5" />
             </a>
          </div>
        </div>

        {/* Bottom Disclaimer */}
        <div className="mt-8 pt-8 border-t border-border text-[10px] text-muted-foreground leading-relaxed">
          <p>
            Styled after the Google Play Store as a tribute to Material Design. Not affiliated with or endorsed by Google.
          </p>
        </div>

      </div>
    </footer>
  )
}