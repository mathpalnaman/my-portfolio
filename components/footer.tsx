import { Github, Linkedin, Mail, Heart, Code } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 dark:from-gray-900 dark:via-blue-900 dark:to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Brand Section */}
            <div className="md:col-span-1">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-sm">NM</span>
                </div>
                <h3 className="text-xl font-semibold text-white">Naman Mathpal</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Full-Stack Developer passionate about creating innovative web solutions and solving complex problems through code.
              </p>
              <div className="flex items-center text-sm text-gray-400">
                <Code className="w-4 h-4 mr-2" />
                <span>Building the future, one line at a time</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-1">
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#about" className="text-gray-300 hover:text-primary transition-colors text-sm">
                    About Me
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-gray-300 hover:text-primary transition-colors text-sm">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-300 hover:text-primary transition-colors text-sm">
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="/NAMAN_MATHPAL_RESUME%208.pdf"
                    className="text-gray-300 hover:text-primary transition-colors text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </div>

            {/* Connect Section */}
            <div className="md:col-span-1">
              <h4 className="text-white font-semibold mb-4">Let's Connect</h4>
              <p className="text-gray-300 text-sm mb-4">
                Always open to discussing new opportunities and exciting projects.
              </p>
              <div className="flex items-center space-x-3">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 bg-white/10 hover:bg-white/20 text-white hover:text-white border-0"
                  asChild
                >
                  <a href="https://github.com/mathpalnaman" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 bg-white/10 hover:bg-white/20 text-white hover:text-white border-0"
                  asChild
                >
                  <a href="https://www.linkedin.com/in/naman-mathpal-483297241/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 bg-white/10 hover:bg-white/20 text-white hover:text-white border-0"
                  asChild
                >
                  <a href="mailto:naman.mathpal@example.com">
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center text-sm text-gray-400">
                <span>Made with</span>
                <Heart className="h-4 w-4 mx-2 text-red-400 fill-current" />
                <span>and lots of</span>
                <Code className="h-4 w-4 mx-2 text-primary" />
                <span>by Naman Mathpal</span>
              </div>

              <div className="flex items-center gap-6 text-sm text-gray-400">
                <span>© {new Date().getFullYear()} All rights reserved</span>
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  <span>Available for work</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
