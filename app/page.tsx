"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Projects } from "@/components/sections/projects"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/layout/footer"

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="min-h-screen bg-background relative selection:bg-primary/20">
      <Header onSearch={setSearchQuery} />
      
      <main className="flex flex-col gap-0">
        <Hero />
        <About />
        <Projects searchQuery={searchQuery} />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}