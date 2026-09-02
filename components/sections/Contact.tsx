'use client'

import { config } from '@/data/config'
import { Mail, Code2, Share2, Send } from 'lucide-react'
import Link from 'next/link'
import { useLanguage } from '@/providers/LanguageProvider'

export default function Contact() {
  const { t } = useLanguage()
  return (
    <section id="contact" className="py-20 md:py-32 px-4 md:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <div className="mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{t('contact.title')}</h2>
          <div className="flex justify-center">
            <div className="h-1 w-16 bg-primary rounded-full"></div>
          </div>
        </div>

        <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
          {t('contact.description')}
        </p>

        <div className="bg-card/50 rounded-xl border border-border p-8 md:p-12 mb-12">
          <h3 className="text-2xl font-semibold text-foreground mb-8">{t('contact.title')}</h3>

          <div className="space-y-6">
            <Link
              href={`mailto:${config.email}`}
              className="inline-flex items-center gap-3 text-lg text-primary hover:text-primary/80 transition-colors font-semibold"
            >
              <Mail size={24} />
              {config.email}
            </Link>

            <div className="text-muted-foreground">
              <p className="font-semibold text-foreground mb-2">Location</p>
              <p>{config.location}</p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-lg font-semibold text-foreground mb-8">{t('contact.email')}</h3>
          <div className="flex justify-center gap-6 flex-wrap">
            <Link
              href={config.social.github}
              target="_blank"
              className="p-4 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
              aria-label="GitHub"
            >
              <Code2 size={24} />
            </Link>
            <Link
              href={config.social.linkedin}
              target="_blank"
              className="p-4 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
              aria-label="LinkedIn"
            >
              <Send size={24} />
            </Link>
            <Link
              href={config.social.twitter}
              target="_blank"
              className="p-4 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
              aria-label="Twitter"
            >
              <Share2 size={24} />
            </Link>
          </div>
        </div>

        <div className="pt-12 border-t border-border">
          <p className="text-sm text-muted-foreground">
            Built with <span className="text-primary font-semibold">Next.js</span>, <span className="text-primary font-semibold">Tailwind CSS</span>, and{' '}
            <span className="text-primary font-semibold">Framer Motion</span>
          </p>
        </div>
      </div>
    </section>
  )
}
