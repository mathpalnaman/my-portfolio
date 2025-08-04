import { GraduationCap, Code, Trophy, Briefcase, Star, Sparkles, Target, Zap } from "lucide-react"

const technicalSkills = {
  Languages: ["Python", "C/C++", "SQL", "Java", "JavaScript", "TypeScript", "HTML/CSS"],
  Frameworks: ["React.js", "Next.js", "Node.js", "WordPress", "FastAPI", "Truffle", "Express.js"],
  DBMS: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
  Tools: ["Git", "VS Code", "PyCharm", "Blender", "Cursor", "Docker", "Figma"],
  Libraries: ["Pandas", "NumPy", "Matplotlib", "D3.js", "Chart.js"],
  Coursework: ["Web Design", "DAA", "OS", "OOP", "DBMS", "Software Engineering", "AI/ML"],
}

export function About() {
  return (
    <section id="about" className="py-24 section-bg relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" />
              About Developer
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-6">Get to Know Me</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Dedicated developer with a strong foundation in computer science, focused on delivering innovative solutions and continuously expanding technical expertise.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {[
              { value: "4.8", label: "Rating", icon: Star, gradient: "from-primary to-primary-400" },
              { value: "150+", label: "Problems Solved", icon: Code, gradient: "from-accent to-accent-400" },
              { value: "6+", label: "Projects Built", icon: Briefcase, gradient: "from-coral to-coral-400" },
              { value: "30%", label: "UX Improvement", icon: Target, gradient: "from-primary to-accent" },
            ].map((stat, index) => (
              <div key={index} className="modern-card p-6 text-center group">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-slate-600 dark:text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Education */}
              <div className="modern-card p-8 group">
                <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-400 rounded-3xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold gradient-text mb-4">Education</h3>
                    <div className="mb-6">
                      <div className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                        B.Tech in Computer Science Engineering
                      </div>
                      <div className="text-primary font-semibold text-lg mb-1">
                        KCC Institute of Technology & Management
                      </div>
                      <div className="text-slate-500 dark:text-slate-400 font-medium">2021 – 2025</div>
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
                      I'm Naman Mathpal, an adaptable developer with a strong foundation in computer science. I am committed to mastering both theoretical concepts and practical applications in software development.
                    </p>
                  </div>
                </div>
              </div>

              {/* Experience */}
              <div className="modern-card p-8 group">
                <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-accent to-accent-400 rounded-3xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Briefcase className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold gradient-text mb-4">Experience</h3>
                    <div className="mb-6">
                      <div className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                        Front-End Developer Intern
                      </div>
                      <div className="flex items-center justify-center sm:justify-start gap-4 mb-4">
                        <div className="rating-modern flex items-center gap-2">
                          <Star className="w-4 h-4 rating-star" />
                          <span className="font-bold">4.8 Rating</span>
                        </div>
                        <div className="success-modern flex items-center gap-2">
                          <Zap className="w-4 h-4 text-coral" />
                          <span className="font-bold">30% Engagement ↗</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
                      Developed dynamic web pages that enhanced user experience and increased engagement through intuitive design and optimized performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Competitive Programming */}
              <div className="modern-card p-8 group">
                <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-coral to-coral-400 rounded-3xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Trophy className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold gradient-text mb-4">Competitive Programming</h3>
                    <div className="flex items-center justify-center sm:justify-start gap-4 mb-6">
                      <div className="bg-gradient-to-r from-primary/10 to-accent/10 text-primary border-2 border-primary/20 px-6 py-3 rounded-2xl">
                        <span className="text-3xl font-bold">150+</span>
                        <span className="text-lg ml-2 font-semibold">Problems</span>
                      </div>
                    </div>
                    <div className="flex justify-center sm:justify-start gap-3 mb-6">
                      {["LeetCode", "HackerRank", "CodeChef"].map((platform) => (
                        <span key={platform} className="modern-chip font-semibold">
                          {platform}
                        </span>
                      ))}
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
                      Actively engaged in competitive programming and problem-solving, with a focus on algorithmic thinking and optimization. Consistently tackling challenging problems to sharpen analytical skills.
                    </p>
                  </div>
                </div>
              </div>

              {/* Technical Skills */}
              <div className="modern-card p-8">
                <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary via-accent to-coral rounded-3xl flex items-center justify-center flex-shrink-0">
                    <Code className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold gradient-text mb-6">Technical Skills</h3>
                    <div className="space-y-6">
                      {Object.entries(technicalSkills).map(([category, skills]) => (
                        <div key={category}>
                          <h4 className="text-lg font-bold text-slate-700 dark:text-slate-300 mb-3 uppercase tracking-wide">
                            {category}
                          </h4>
                          <div className="flex flex-wrap justify-center sm:justify-start gap-3">
                            {skills.map((skill) => (
                              <span key={skill} className="modern-chip font-semibold">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-20">
            <div className="modern-card p-12 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold gradient-text mb-6">My Development Philosophy</h3>
              <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed mb-8">
                I strive to write clean, maintainable code and create solutions that are both efficient and user-friendly. Every project is an opportunity to learn, grow, and contribute to the tech community.
              </p>
              <button className="modern-button">Let's Build Something Amazing Together</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
