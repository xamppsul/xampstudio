'use client'

import { skills } from '@/data/skills'
import { useLanguage } from '@/providers/LanguageProvider'

export default function Skills() {
  const { t } = useLanguage()
  return (
    <section id="skills" className="py-20 md:py-32 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{t('skills.title')}</h2>
          <div className="h-1 w-16 bg-primary rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className="group">
              <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-lg font-medium text-sm hover:bg-primary/20 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 md:mt-24 pt-12 md:pt-16 border-t border-border">
          <h3 className="text-2xl font-semibold text-foreground mb-8">{t('skills.concepts')}</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              'RESTful API Design',
              'Database Optimization',
              'DevOps & CI/CD',
              'Testing & QA',
              'Code Review',
              'Technical Writing',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
