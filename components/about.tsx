import { ArrowRight, ShieldCheck, Cpu, Database, Layout, GitBranch, Terminal } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-8 border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER: "About this developer" */}
        <div className="flex items-center justify-between mb-6 group cursor-pointer">
          <h2 className="text-xl font-bold flex items-center gap-2">
            About this developer
            <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
          </h2>
        </div>

        {/* DESCRIPTION BLOCK */}
        <div className="mb-10 text-sm sm:text-base text-muted-foreground leading-relaxed space-y-4">
          <p>
            Dedicated <span className="text-foreground font-medium">Full-Stack Developer</span> capable of engineering scalable solutions. 
            Recently upgraded to <span className="text-foreground font-medium">Version 2025 (B.Tech Graduate)</span> with optimized algorithms and bug-free logic.
          </p>
          <p>
            Features include a strong foundation in Computer Science, 150+ LeetCode solutions installed, and full compatibility with React, Node.js, and Cloud environments.
          </p>
          
          {/* VERSION HISTORY (Experience/Education) */}
          <div className="mt-6 border border-border rounded-xl p-4 bg-secondary/20">
             <div className="font-semibold text-foreground mb-3 text-xs uppercase tracking-wider">Version History</div>
             <div className="space-y-4">
                <div className="flex gap-3">
                   <div className="w-12 text-xs font-mono text-muted-foreground pt-1">Dec '25</div>
                   <div>
                      <div className="text-sm font-medium text-foreground">VyomGarud Intern</div>
                      <div className="text-xs text-muted-foreground">Deployed Next.js landing page with Tailwind CSS.</div>
                   </div>
                </div>
                <div className="flex gap-3">
                   <div className="w-12 text-xs font-mono text-muted-foreground pt-1">Aug '25</div>
                   <div>
                      <div className="text-sm font-medium text-foreground">System Upgrade (Graduation)</div>
                      <div className="text-xs text-muted-foreground">Completed B.Tech CSE with 6.7 CGPA.</div>
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* DATA SAFETY BLOCK (Skills Metaphor) */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Technical Architecture</h2>
          </div>
          <div className="text-sm text-muted-foreground mb-6">
            Architecture starts with understanding how developers handle data and performance.
            <span className="block mt-1 text-xs border border-border inline-block px-2 py-1 rounded">
               <ShieldCheck className="w-3 h-3 inline mr-1 align-middle text-green-500"/>
               Verified Stack
            </span>
          </div>

          <div className="border border-border rounded-xl overflow-hidden divide-y divide-border">
            
            {/* Frontend */}
            <div className="p-4 flex gap-4 hover:bg-secondary/30 transition-colors">
              <Layout className="w-6 h-6 text-muted-foreground mt-1" />
              <div>
                <h3 className="text-sm font-semibold text-foreground">Frontend Engineering</h3>
                <p className="text-xs text-muted-foreground mt-1">
                  React.js, Next.js 15, Tailwind CSS, TypeScript, Figma
                </p>
              </div>
            </div>

            {/* Backend */}
            <div className="p-4 flex gap-4 hover:bg-secondary/30 transition-colors">
              <Cpu className="w-6 h-6 text-muted-foreground mt-1" />
              <div>
                <h3 className="text-sm font-semibold text-foreground">Backend & API</h3>
                <p className="text-xs text-muted-foreground mt-1">
                  Node.js, Express, FastAPI, REST Architecture
                </p>
              </div>
            </div>

            {/* Database */}
            <div className="p-4 flex gap-4 hover:bg-secondary/30 transition-colors">
              <Database className="w-6 h-6 text-muted-foreground mt-1" />
              <div>
                <h3 className="text-sm font-semibold text-foreground">Data Storage</h3>
                <p className="text-xs text-muted-foreground mt-1">
                  PostgreSQL, MongoDB, MySQL
                </p>
              </div>
            </div>

            {/* Tools */}
            <div className="p-4 flex gap-4 hover:bg-secondary/30 transition-colors">
              <GitBranch className="w-6 h-6 text-muted-foreground mt-1" />
              <div>
                <h3 className="text-sm font-semibold text-foreground">DevOps & Tools</h3>
                <p className="text-xs text-muted-foreground mt-1">
                  Docker, AWS (EC2/S3), Git, Linux, Vercel
                </p>
              </div>
            </div>

             {/* Problem Solving */}
            <div className="p-4 flex gap-4 hover:bg-secondary/30 transition-colors">
              <Terminal className="w-6 h-6 text-muted-foreground mt-1" />
              <div>
                <h3 className="text-sm font-semibold text-foreground">Algorithmic Core</h3>
                <p className="text-xs text-muted-foreground mt-1">
                  DSA in C++, Python Automation, Competitive Programming
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}