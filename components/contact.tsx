'use client'

import { Button } from "@/components/ui/button"
import { Mail, MapPin, Linkedin, MessageCircle, Send, Sparkles, Clock, CheckCircle, Zap } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-24 section-bg relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-coral/10 text-coral px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" />
              Let's Connect
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-6">Ready to Collaborate?</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              I'm always excited to discuss new opportunities, collaborate on interesting projects, or simply connect
              with fellow developers. 
              <a 
                href="mailto:naman.mathpal@example.com" 
                className="underline text-primary hover:text-coral transition-colors font-semibold cursor-pointer"
              >
                Let's build something amazing together!
              </a>
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="modern-card p-8 group">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-400 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Email</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4 text-lg">naman.mathpal@example.com</p>
                    <button 
                      className="bg-gradient-to-r from-primary to-primary-400 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
                      onClick={() => window.location.href = 'mailto:naman.mathpal@example.com'}
                    >
                      <Send className="w-4 h-4" />
                      Send Email
                    </button>
                  </div>
                </div>
              </div>

              <div className="modern-card p-8 group">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-accent to-accent-400 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Linkedin className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">LinkedIn</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4 text-lg">Connect professionally</p>
                    <Button
                      variant="outline"
                      className="border-2 border-accent/30 hover:border-accent/60 hover:bg-accent/5 rounded-xl px-6 py-3 text-lg font-semibold hover:scale-105 transition-all duration-300"
                      asChild
                    >
                      <a href="https://www.linkedin.com/in/naman-mathpal-483297241/" target="_blank" rel="noopener noreferrer">
                        Connect
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="modern-card p-8 group">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-coral to-coral-400 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Location</h3>
                    <a
                      href="https://www.google.com/maps/place/Kundli,+Sonipat,+Haryana"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 dark:text-slate-400 mb-2 text-lg underline hover:text-primary transition-colors"
                    >
                      Kundli, Sonipat
                    </a>
                    <div className="status-online inline-flex items-center gap-2">
                      <span className="w-3 h-3 bg-white rounded-full animate-pulse"></span>
                      Available for Work
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="modern-card p-12 flex flex-col justify-center text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-primary via-accent to-coral rounded-3xl flex items-center justify-center mx-auto mb-8 floating">
                <MessageCircle className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-3xl font-bold gradient-text mb-6">Let's Start a Conversation</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed text-lg">
                Whether you have a project in mind, want to discuss opportunities, or just want to connect, I'd love to
                hear from you. Let's build something incredible together.
              </p>
              <a 
                href="mailto:naman.mathpal@example.com" 
                className="modern-button w-full flex items-center justify-center gap-3 group"
              >
                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Start Conversation
              </a>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Clock,
                value: "< 24h",
                label: "Response Time",
                gradient: "from-primary to-primary-400",
              },
              {
                icon: CheckCircle,
                value: "100%",
                label: "Project Success Rate",
                gradient: "from-accent to-accent-400",
              },
              {
                icon: Zap,
                value: "24/7",
                label: "Available",
                gradient: "from-coral to-coral-400",
              },
            ].map((stat, index) => (
              <div key={index} className="modern-card p-6 text-center group">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-slate-600 dark:text-slate-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
