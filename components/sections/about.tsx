import { skills } from "@/lib/data/skills"
import { experience, education } from "@/lib/data/experience"

export function About() {
  return (
    <section id="about" className="py-8 border-b border-border/50 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl font-bold mb-4">About this developer</h2>
        <p className="mb-10 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-3xl">
          Full-stack developer in Delhi NCR. I build web platforms end to end: React and Next.js front ends, Laravel
          and Node.js back ends, payments, access control and AI features. I also maintain an open-source library
          published on npm and Maven Central.
        </p>

        <h2 className="text-xl font-bold mb-4">Version history</h2>
        <ol className="mb-10 space-y-6 border-l border-border pl-5">
          {experience.map((role) => (
            <li key={role.company + role.period} className="relative">
              <span
                aria-hidden
                className={`absolute -left-[26px] top-1.5 h-2.5 w-2.5 rounded-full ${role.current ? "bg-primary" : "bg-muted-foreground/40"}`}
              />
              <div className="text-xs font-mono text-muted-foreground">{role.period}</div>
              <h3 className="text-base font-semibold text-foreground">{role.title}</h3>
              <div className="text-sm text-muted-foreground">
                {role.company} · {role.location}
              </div>
              <ul className="mt-2 list-disc pl-4 space-y-1 text-sm text-muted-foreground">
                {role.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </li>
          ))}
          <li className="relative">
            <span aria-hidden className="absolute -left-[26px] top-1.5 h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
            <div className="text-xs font-mono text-muted-foreground">{education.period}</div>
            <h3 className="text-base font-semibold text-foreground">{education.degree}</h3>
            <div className="text-sm text-muted-foreground">{education.school}</div>
          </li>
        </ol>

        <h2 className="text-xl font-bold mb-4">Technical skills</h2>
        <div className="border border-border rounded-xl overflow-hidden divide-y divide-border">
          {skills.map(({ title, icon: Icon, items }) => (
            <div key={title} className="p-4 flex gap-4">
              <Icon className="w-6 h-6 text-muted-foreground mt-0.5 shrink-0" aria-hidden />
              <div>
                <h3 className="text-sm font-semibold text-foreground">{title}</h3>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{items.join(", ")}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
