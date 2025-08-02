'use client'

import { Button } from "@/components/ui/button"
import { ArrowDown, Download, Star, Sparkles, Code, Trophy } from "lucide-react"

export function Hero() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-5xl mx-auto">
          {/* Main Hero Content */}
          <div className="text-center mb-16">
            <div className="relative inline-block mb-8">
              <div className="w-32 h-32 bg-gradient-to-br from-primary via-primary-400 to-accent rounded-3xl flex items-center justify-center shadow-2xl floating mx-auto">
                <span className="text-white font-bold text-4xl">NM</span>
              </div>
              <div className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-r from-coral to-coral-400 rounded-full flex items-center justify-center shadow-lg">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-gradient-to-r from-accent to-accent-400 rounded-full flex items-center justify-center shadow-lg">
                <Code className="w-4 h-4 text-white" />
              </div>
            </div>

            <h1 className="text-5xl sm:text-7xl font-bold gradient-text mb-6 leading-tight">Naman Mathpal</h1>

            <p className="text-2xl sm:text-3xl font-semibold text-slate-600 dark:text-slate-300 mb-6">
              Full-Stack Developer
            </p>

            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed mb-12">
              Passionate about creating innovative web solutions and solving complex problems through code. Experienced in building real-world applications and mastering competitive programming.
            </p>

            {/* Stats Row */}
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="rating-modern flex items-center gap-2">
                <Star className="w-4 h-4 rating-star" />
                <span className="font-bold">4.8 Rating</span>
              </div>
              <div className="modern-chip flex items-center gap-2">
                <Trophy className="w-4 h-4 text-primary" />
                <span className="font-semibold">150+ Problems Solved</span>
              </div>
              <div className="success-modern flex items-center gap-2">
                <span className="w-2 h-2 bg-coral rounded-full animate-pulse"></span>
                <span className="font-semibold">30% UX Improvement</span>
              </div>
              <div className="status-online">Available for Work</div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <button
                id="view-projects-btn"
                className="modern-button group flex items-center gap-3"
                onClick={() => {
                  const el = document.getElementById('projects');
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                View My Projects
              </button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-primary/30 hover:border-primary/60 hover:bg-primary/5 backdrop-blur-sm transition-all duration-300 hover:scale-105 rounded-2xl px-8 py-4 text-lg font-semibold"
                asChild
              >
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-3 h-5 w-5" />
                  Download Resume
                </a>
              </Button>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "React.js",
                "Next.js",
                "TypeScript",
                "Python",
                "Node.js",
                "Tailwind CSS",
                "PostgreSQL",
                "Competitive Programming",
              ].map((tech) => (
                <span key={tech} className="modern-chip">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Code,
                title: "Full-Stack Development",
                description: "Building end-to-end web applications with modern technologies",
                gradient: "from-primary to-primary-400",
              },
              {
                icon: Trophy,
                title: "Problem Solving",
                description: "Active competitive programmer with 150+ problems solved",
                gradient: "from-accent to-accent-400",
              },
              {
                icon: Sparkles,
                title: "UI/UX Focus",
                description: "Creating intuitive interfaces that improve user engagement",
                gradient: "from-coral to-coral-400",
              },
            ].map((feature, index) => (
              <div key={index} className="modern-card p-8 text-center group">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{feature.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
