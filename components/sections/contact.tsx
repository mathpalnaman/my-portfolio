import { Mail, Phone, MapPin, Linkedin, Github, FileText, type LucideIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SITE } from "@/lib/site"

const rows: { icon: LucideIcon; label: string; text: string; href?: string; external?: boolean }[] = [
  { icon: Mail, label: "Email", text: SITE.email, href: `mailto:${SITE.email}` },
  { icon: Phone, label: "Phone", text: SITE.phone, href: SITE.phoneHref },
  { icon: Linkedin, label: "LinkedIn", text: "in/naman-mathpal", href: SITE.linkedin, external: true },
  { icon: Github, label: "GitHub", text: "mathpalnaman", href: SITE.github, external: true },
  { icon: FileText, label: "Resume", text: "Download (PDF)", href: SITE.resume, external: true },
  { icon: MapPin, label: "Location", text: SITE.location },
]

export function Contact() {
  return (
    <section id="contact" className="py-12 border-b border-border/50 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl font-bold mb-6">Developer contact</h2>

        <ul className="space-y-6">
          {rows.map(({ icon: Icon, label, text, href, external }) => (
            <li key={label} className="flex items-start gap-4">
              <Icon className="w-5 h-5 text-muted-foreground mt-1" aria-hidden />
              <div>
                <div className="text-sm font-semibold text-foreground">{label}</div>
                {href ? (
                  <a
                    href={href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="text-sm text-primary hover:underline block mt-0.5"
                  >
                    {text}
                  </a>
                ) : (
                  <p className="text-sm text-muted-foreground mt-0.5">{text}</p>
                )}
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-12 bg-secondary/30 rounded-xl p-6 text-center border border-border">
          <h3 className="text-base font-bold text-foreground mb-2">Let&apos;s talk</h3>
          <p className="text-sm text-muted-foreground mb-4">Open to full-time roles and freelance projects.</p>
          <Button asChild>
            <a href={`mailto:${SITE.email}`}>Send an email</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
