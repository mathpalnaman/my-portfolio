"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="min-h-screen bg-background relative selection:bg-primary/20">
      {/* Pass search setter to Header */}
      <Header onSearch={setSearchQuery} />
      
      <main className="flex flex-col gap-0">
        <Hero />
        <About />
        {/* Pass search query to Projects to filter the list */}
        <Projects searchQuery={searchQuery} />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}