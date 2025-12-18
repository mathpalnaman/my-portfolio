'use client'

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Download, Share2, Info, CheckCircle2, ArrowRight } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative pt-32 pb-12 overflow-hidden bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* APP HEADER SECTION */}
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 mb-8">
          
          {/* App Icon (Profile Box) */}
          <div className="flex-shrink-0 mx-auto sm:mx-0">
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-[22px] bg-gradient-to-br from-primary to-accent shadow-xl flex items-center justify-center text-white font-bold text-4xl border border-white/10 relative overflow-hidden">
               {/* Replace this span with <Image /> of your face or a Memoji for best results */}
               <span className="z-10">NM</span>
               
               {/* Glossy effect */}
               <div className="absolute top-0 left-0 w-full h-1/2 bg-white/10 z-0"></div>
            </div>
          </div>

          {/* App Info */}
          <div className="flex flex-col justify-center text-center sm:text-left flex-grow">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-1 tracking-tight">
              Naman Mathpal
            </h1>
            <div className="text-primary font-medium text-lg mb-2">
              Full-Stack Developer & UI Architect
            </div>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-xs sm:text-sm text-muted-foreground">
              <span className="bg-secondary px-2 py-0.5 rounded-md">Contains clean code</span>
              <span>•</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-green-500"/> Verified Developer</span>
            </div>
          </div>
        </div>

        {/* STATS BAR (The classic Play Store Scroll) */}
        <div className="flex items-center justify-between sm:justify-start sm:gap-12 border-b border-border pb-6 mb-6 overflow-x-auto no-scrollbar">
          
          {/* Rating */}
          <div className="flex flex-col items-center px-4 min-w-[80px] border-r border-border/50 last:border-0">
            <div className="flex items-center gap-1 font-bold text-foreground">
              <span>4.9</span>
              <Star className="w-3 h-3 fill-current text-foreground" />
            </div>
            <div className="text-xs text-muted-foreground whitespace-nowrap">
              150+ Solved
            </div>
          </div>

          {/* Size */}
          <div className="flex flex-col items-center px-4 min-w-[80px] border-r border-border/50 last:border-0">
            <div className="font-bold text-foreground">
              90<span className="text-xs align-top">kg</span>
            </div>
            <div className="text-xs text-muted-foreground whitespace-nowrap">
              Heavy Lifter
            </div>
          </div>

          {/* Age Rating */}
          <div className="flex flex-col items-center px-4 min-w-[80px] border-r border-border/50 last:border-0">
            <div className="w-6 h-6 border-2 border-foreground rounded-sm flex items-center justify-center font-bold text-[10px]">
              E
            </div>
            <div className="text-xs text-muted-foreground whitespace-nowrap">
              Everyone
            </div>
          </div>

          {/* Downloads/Commits */}
          <div className="flex flex-col items-center px-4 min-w-[80px]">
             <div className="font-bold text-foreground">
              2025
            </div>
            <div className="text-xs text-muted-foreground whitespace-nowrap">
              Version / Grad
            </div>
          </div>
        </div>

        {/* ACTION BUTTONS */}
        <div className="w-full sm:max-w-md mb-8">
           <Button className="w-full h-12 text-lg rounded-full bg-primary hover:bg-primary/90 mb-3 shadow-lg hover:shadow-primary/25 transition-all" asChild>
             <Link href="#contact">
               Install / Hire Me
             </Link>
           </Button>
           <div className="flex gap-3">
             <Button variant="outline" className="flex-1 rounded-full text-primary border-primary/20 hover:bg-primary/5" asChild>
                <a href="/naman_resume3.pdf" target="_blank">
                  <Download className="w-4 h-4 mr-2" />
                  Resume
                </a>
             </Button>
             <Button variant="ghost" size="icon" className="rounded-full">
                <Share2 className="w-5 h-5 text-muted-foreground" />
             </Button>
           </div>
        </div>

        {/* "WHATS NEW" SECTION */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold">What's New</h2>
            <span className="text-xs text-muted-foreground">Last updated Dec 2025</span>
          </div>
          <div className="bg-secondary/30 p-4 rounded-xl text-sm leading-relaxed text-muted-foreground">
            <p className="mb-2"><span className="font-semibold text-foreground">Version 2.0.5 Release Notes:</span></p>
            <ul className="list-disc pl-4 space-y-1">
              <li>Graduated B.Tech in Computer Science (August 2025).</li>
              <li>Added <b>Next.js 15</b> and <b>Cloud Native</b> support to core skillset.</li>
              <li>Fixed bugs in "Sleep Schedule" (working on it).</li>
              <li>Performance improvements in full-stack deployment.</li>
            </ul>
          </div>
        </div>

        {/* PREVIEW CARDS (Tech Stack) */}
        <div>
           <h2 className="text-lg font-bold mb-4">Preview</h2>
           <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x">
              {/* Screenshot 1 */}
              <div className="min-w-[200px] sm:min-w-[250px] aspect-[9/16] bg-slate-900 rounded-2xl p-4 flex flex-col justify-end relative overflow-hidden snap-center border border-border">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"/>
                  <div className="relative z-20">
                     <div className="text-white font-bold text-lg">React Expert</div>
                     <div className="text-slate-300 text-xs">Complex UIs & Animations</div>
                  </div>
                  <div className="absolute top-4 left-4 bg-blue-500/20 px-2 py-1 rounded text-xs text-blue-400 font-mono border border-blue-500/30">src/components</div>
              </div>

               {/* Screenshot 2 */}
              <div className="min-w-[200px] sm:min-w-[250px] aspect-[9/16] bg-slate-900 rounded-2xl p-4 flex flex-col justify-end relative overflow-hidden snap-center border border-border">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"/>
                  <div className="relative z-20">
                     <div className="text-white font-bold text-lg">Backend Logic</div>
                     <div className="text-slate-300 text-xs">Node.js, Postgres & AWS</div>
                  </div>
                  <div className="absolute top-4 left-4 bg-green-500/20 px-2 py-1 rounded text-xs text-green-400 font-mono border border-green-500/30">server/api</div>
              </div>

               {/* Screenshot 3 */}
              <div className="min-w-[200px] sm:min-w-[250px] aspect-[9/16] bg-slate-900 rounded-2xl p-4 flex flex-col justify-end relative overflow-hidden snap-center border border-border">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"/>
                  <div className="relative z-20">
                     <div className="text-white font-bold text-lg">Competitive</div>
                     <div className="text-slate-300 text-xs">150+ Problems Solved</div>
                  </div>
                  <div className="absolute top-4 left-4 bg-orange-500/20 px-2 py-1 rounded text-xs text-orange-400 font-mono border border-orange-500/30">leetcode/hard</div>
              </div>
           </div>
        </div>

      </div>
    </section>
  )
}