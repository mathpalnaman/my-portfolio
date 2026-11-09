import { Github, Linkedin, Mail } from "lucide-react"

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
            href="/naman_resume3.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors text-primary font-bold"
          >
            Resume (PDF)
          </a>

          {/* Aesthetic/Flavor Links */}
          <span className="opacity-50 cursor-not-allowed">Play Pass</span>
          <span className="opacity-50 cursor-not-allowed">Play Points</span>
          <span className="opacity-50 cursor-not-allowed">Gift cards</span>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Logo / Copyright */}
          <div className="flex items-center gap-4">
             <div className="text-xl font-semibold tracking-tighter text-muted-foreground">
               Google <span className="text-foreground">Play</span>
             </div>
             <div className="text-xs text-muted-foreground">
               © {new Date().getFullYear()} Naman Mathpal
             </div>
          </div>

          {/* Social Icons (Minimal) */}
          <div className="flex gap-4">
             <a href="https://github.com/mathpalnaman" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
               <Github className="w-5 h-5" />
             </a>
             <a href="https://www.linkedin.com/in/naman-mathpal-483297241/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
               <Linkedin className="w-5 h-5" />
             </a>
             <a href="mailto:naman.work.mathpal@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
               <Mail className="w-5 h-5" />
             </a>
          </div>
        </div>

        {/* Bottom Disclaimer */}
        <div className="mt-8 pt-8 border-t border-border text-[10px] text-muted-foreground leading-relaxed">
          <p>
            * "Google Play" and the Google Play logo are trademarks of Google LLC. This is a personal portfolio website designed to pay homage to the Material Design aesthetic.
          </p>
          <div className="flex gap-4 mt-2">
             <a href="#" className="hover:underline">Terms of Service</a>
             <a href="#" className="hover:underline">Privacy</a>
             <a href="#" className="hover:underline">About Google</a>
             <a href="#" className="hover:underline">Developers</a>
          </div>
        </div>

      </div>
    </footer>
  )
}