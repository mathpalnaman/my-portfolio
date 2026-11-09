'use client'

import { Mail, MapPin, Globe, Linkedin, ArrowRight, FileText, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Contact() {
  return (
    <section id="contact" className="py-12 border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
            Developer contact
          </h2>
          <ChevronDown className="w-5 h-5 text-muted-foreground" />
        </div>

        {/* Contact List (Play Store Style) */}
        <div className="space-y-6">
          
          {/* Email Item */}
          <div className="flex items-start gap-4">
            <Mail className="w-5 h-5 text-muted-foreground mt-1" />
            <div>
              <div className="text-sm font-semibold text-foreground">Email</div>
              <a 
                href="mailto:naman.work.mathpal@gmail.com" 
                className="text-sm text-primary hover:underline block mt-0.5"
              >
                naman.work.mathpal@gmail.com
              </a>
            </div>
          </div>

          {/* Location Item */}
          <div className="flex items-start gap-4">
            <MapPin className="w-5 h-5 text-muted-foreground mt-1" />
            <div>
              <div className="text-sm font-semibold text-foreground">Address</div>
              <p className="text-sm text-muted-foreground mt-0.5">
                Delhi NCR, India
              </p>
            </div>
          </div>

          {/* Website / LinkedIn Item */}
          <div className="flex items-start gap-4">
            <Globe className="w-5 h-5 text-muted-foreground mt-1" />
            <div>
              <div className="text-sm font-semibold text-foreground">Website</div>
              <a 
                 href="https://www.linkedin.com/in/naman-mathpal-483297241/"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-sm text-primary hover:underline block mt-0.5"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>

          {/* Resume (Privacy Policy Metaphor) */}
          <div className="flex items-start gap-4">
            <FileText className="w-5 h-5 text-muted-foreground mt-1" />
            <div>
              <div className="text-sm font-semibold text-foreground">Privacy Policy</div>
              <a 
                href="/naman_resume3.pdf" 
                target="_blank" 
                className="text-sm text-primary hover:underline block mt-0.5"
              >
                View Resume (PDF)
              </a>
            </div>
          </div>

        </div>

        {/* Feedback / Hire CTA */}
        <div className="mt-12 bg-secondary/30 rounded-xl p-6 text-center border border-border">
           <h3 className="text-base font-bold text-foreground mb-2">Rate this developer</h3>
           <p className="text-sm text-muted-foreground mb-4">
             Tell others what you think about this portfolio.
           </p>
           
           <div className="flex justify-center gap-4 mb-6">
              {[1, 2, 3, 4, 5].map((star) => (
                <div key={star} className="w-8 h-8 rounded-full border border-muted-foreground/30 flex items-center justify-center hover:bg-primary/10 cursor-pointer transition-colors text-muted-foreground hover:text-primary">
                   ★
                </div>
              ))}
           </div>

           <Button className="w-full sm:w-auto" variant="outline" asChild>
            <a href="mailto:naman.work.mathpal@gmail.com">
              Write a Review (Send Email)
            </a>
           </Button>
        </div>

      </div>
    </section>
  )
}