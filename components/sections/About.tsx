'use client'

import { config } from '@/data/config'

export default function About() {
  return (
    <section className="py-20 md:py-32 px-4 md:px-8 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">About Me</h2>
          <div className="h-1 w-16 bg-primary rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate software engineer with {Math.floor((new Date().getFullYear() - 2020) + 3)}+ years of experience building elegant solutions to complex problems. My journey in tech has been driven by a curiosity to understand how systems work and a commitment to writing clean, maintainable code.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I specialize in full-stack development, with expertise in React, Next.js, Node.js, and cloud technologies. I'm particularly passionate about creating performant, accessible, and user-friendly web applications.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open source projects, or sharing knowledge with the developer community.
            </p>

            <div className="pt-4">
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-4">Core Values</h3>
              <div className="flex flex-wrap gap-2">
                {['Quality', 'Collaboration', 'Continuous Learning', 'User-Centric', 'Reliability'].map((value) => (
                  <span
                    key={value}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                  >
                    {value}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl p-8 border border-primary/10">
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">Experience</h3>
                <p className="text-3xl font-bold text-foreground">{Math.floor((new Date().getFullYear() - 2020) + 3)}+</p>
                <p className="text-muted-foreground">Years in Software Development</p>
              </div>

              <div className="border-t border-primary/10 pt-6">
                <h3 className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">Projects</h3>
                <p className="text-3xl font-bold text-foreground">20+</p>
                <p className="text-muted-foreground">Successfully Delivered</p>
              </div>

              <div className="border-t border-primary/10 pt-6">
                <h3 className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">Clients</h3>
                <p className="text-3xl font-bold text-foreground">15+</p>
                <p className="text-muted-foreground">Satisfied Clients Worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
