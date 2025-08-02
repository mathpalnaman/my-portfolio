"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun, Menu, X, Github, Linkedin, Mail, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [mounted, setMounted] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <header className="sticky top-0 z-50 w-full glass-header">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-primary via-primary-400 to-accent rounded-2xl flex items-center justify-center shadow-lg floating">
                  <span className="text-white font-bold text-lg">NM</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-coral to-coral-400 rounded-full flex items-center justify-center">
                  <Sparkles className="w-2.5 h-2.5 text-white" />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold gradient-text">Naman Mathpal</h1>
                <p className="text-sm text-muted-foreground">Full-Stack Developer</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {["About", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary transition-all duration-300 hover:scale-110 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-3">
            {/* Social Links */}
            <div className="hidden sm:flex items-center space-x-2">
              {[
                { icon: Github, href: "https://github.com", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/naman-mathpal-483297241/", label: "LinkedIn" },
                { icon: Mail, href: "mailto:naman.mathpal@example.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <Button
                  key={label}
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 rounded-xl hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110"
                  asChild
                >
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    <Icon className="h-4 w-4" />
                    <span className="sr-only">{label}</span>
                  </a>
                </Button>
              ))}
            </div>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="h-10 w-10 rounded-xl hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110"
              onClick={toggleTheme}
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              <span className="sr-only">Toggle theme</span>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden h-10 w-10 rounded-xl hover:bg-primary/10 hover:text-primary transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-white/20 dark:border-slate-700/20 py-6 modern-card mt-4">
            <nav className="flex flex-col space-y-4">
              {["About", "Projects", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary transition-colors px-4 py-2 rounded-xl hover:bg-primary/5"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
