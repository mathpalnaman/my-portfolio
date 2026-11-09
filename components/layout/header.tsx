"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import Link from "next/link"
import { Search, Bell, Menu, X, Mic, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

interface HeaderProps {
  onSearch: (query: string) => void
}

export function Header({ onSearch }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const { toast } = useToast()
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleBellClick = () => {
    toast({
      title: "No new notifications",
      description: "You are all caught up! Check back later for updates.",
    })
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-background/50 backdrop-blur-sm"}`}>
      <div className="container mx-auto px-4 h-16 flex items-center gap-4">
        
        {/* Mobile Menu Trigger */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 -ml-2 hover:bg-secondary rounded-full"
        >
          {isMenuOpen ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
        </button>

        {/* Logo / Brand */}
        <Link href="/" className="hidden md:flex items-center gap-2 font-semibold text-lg tracking-tight">
          <span className="text-primary text-xl">Naman</span>
          <span className="text-muted-foreground">Portfolio</span>
        </Link>

        {/* Search Bar (Functional) */}
        <div className="flex-1 max-w-2xl mx-auto">
          <div className="relative group">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-muted-foreground" />
            </div>
            <input 
              type="text" 
              placeholder="Search projects (e.g., 'React', 'AI', 'Game')..." 
              className="w-full h-10 pl-10 pr-10 rounded-full bg-secondary/50 border border-transparent focus:bg-background focus:border-primary/20 focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
              onChange={(e) => {
                onSearch(e.target.value)
                // Optional: Scroll to projects if user types
                if(e.target.value.length > 0) {
                   document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                }
              }}
            />
            <div className="absolute inset-y-0 right-3 flex items-center cursor-pointer hover:text-primary">
              <Mic className="h-4 w-4 text-muted-foreground" />
            </div>
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-1 sm:gap-2">
          
          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full hover:bg-secondary"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          {/* Notifications */}
          <Button 
             variant="ghost" 
             size="icon" 
             className="rounded-full hidden sm:flex"
             onClick={handleBellClick}
          >
            <Bell className="w-5 h-5 text-muted-foreground" />
          </Button>
          
          {/* Profile Icon */}
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-white text-xs font-bold ring-2 ring-background cursor-pointer hover:scale-105 transition-transform">
            N
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-background border-b border-border p-4 shadow-xl md:hidden animate-in slide-in-from-top-2">
           <nav className="flex flex-col gap-2">
             {['About', 'Projects', 'Contact'].map(item => (
               <Link 
                 key={item} 
                 href={`#${item.toLowerCase()}`}
                 onClick={() => setIsMenuOpen(false)}
                 className="p-3 hover:bg-secondary rounded-lg font-medium text-sm flex items-center justify-between"
               >
                 {item}
               </Link>
             ))}
           </nav>
        </div>
      )}
    </header>
  )
}