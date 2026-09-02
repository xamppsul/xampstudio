'use client'

import { useState } from 'react'
import { experiences } from '@/data/experience'
import { useLanguage } from '@/providers/LanguageProvider'
import { Briefcase, CheckCircle2, ArrowRight } from 'lucide-react'

export default function Experience() {
  const { t } = useLanguage()
  const [showAll, setShowAll] = useState(false)
  const displayedExperiences = showAll ? experiences : experiences.slice(0, 3)

  return (
    <section id="experience" className="py-20 md:py-32 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {showAll ? t('experience.all') : t('experience.title')}
          </h2>
          <div className="h-1 w-16 bg-primary rounded-full"></div>
        </div>

        <div className="space-y-8">
          {displayedExperiences.map((exp, index) => (
            <div
              key={exp.id}
              className="relative pl-8 md:pl-12 pb-12 border-l-2 border-primary/30 hover:border-primary transition-colors"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-0 -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-background"></div>

              <div className="bg-card/50 rounded-lg border border-border p-6 md:p-8 hover:border-primary/50 transition-colors">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 p-2 rounded-lg bg-primary/10">
                      <Briefcase className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{exp.title}</h3>
                      <p className="text-primary font-semibold">{exp.company}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-muted-foreground text-sm font-medium">{exp.period}</p>
                    <p className="text-xs text-muted-foreground">{exp.duration}</p>
                  </div>
                </div>

                {/* Type badge */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wide">
                    {exp.type === 'full-time' ? 'Full-time' : exp.type === 'freelance' ? 'Freelance' : 'Contract'}
                  </span>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">{exp.description}</p>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">Key Achievements</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-muted-foreground text-sm">
                        <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={16} />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline end marker */}
        <div className="pl-8 md:pl-12">
          <div className="relative">
            <div className="absolute left-0 -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-background"></div>
          </div>
        </div>

        {/* Toggle buttons */}
        {!showAll && experiences.length > 3 && (
          <div className="mt-16 md:mt-24 pt-12 md:pt-16 border-t border-border text-center">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              {t('experience.viewMore')}
              <ArrowRight size={20} className="ml-2" />
            </button>
          </div>
        )}

        {showAll && (
          <div className="mt-16 md:mt-24 pt-12 md:pt-16 border-t border-border text-center">
            <button
              onClick={() => setShowAll(false)}
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors"
            >
              {t('experience.showRecent')}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
