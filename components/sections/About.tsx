'use client'

import { config } from '@/data/config'
import { useLanguage } from '@/providers/LanguageProvider'

export default function About() {
  const { t } = useLanguage()
  return (
    <section id="about" className="py-20 md:py-32 px-4 md:px-8 bg-card/50 relative overflow-hidden">
      {/* Decorative background: soft radial glow instead of a missing photo */}
      <div className="absolute inset-0 -z-10 opacity-40">
        <div className="absolute top-0 right-0 w-[26rem] h-[26rem] rounded-full bg-primary/10 blur-3xl" />
      </div>
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{t('about.title')}</h2>
          <div className="h-1 w-16 bg-primary rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('about.description')}
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
                <h3 className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">{t('about.stat1.label')}</h3>
                <p className="text-3xl font-bold text-foreground">{t('about.stat1.value')}</p>
                <p className="text-muted-foreground">{t('about.stat1.label')}</p>
              </div>

              <div className="border-t border-primary/10 pt-6">
                <h3 className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">{t('about.stat2.label')}</h3>
                <p className="text-3xl font-bold text-foreground">{t('about.stat2.value')}</p>
                <p className="text-muted-foreground">{t('about.stat2.label')}</p>
              </div>

              <div className="border-t border-primary/10 pt-6">
                <h3 className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">{t('about.stat3.label')}</h3>
                <p className="text-3xl font-bold text-foreground">{t('about.stat3.value')}</p>
                <p className="text-muted-foreground">{t('about.stat3.label')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
