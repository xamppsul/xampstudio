'use client'

import { config } from '@/data/config'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '@/providers/LanguageProvider'

function initials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()
}

export default function Hero() {
  const { t } = useLanguage()
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 md:px-8 py-20 md:py-32 pt-32 md:pt-40 animate-fade-in relative overflow-hidden">
      {/* Decorative background: soft radial glows instead of a missing photo */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-24 w-[28rem] h-[28rem] rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute top-1/3 -right-24 w-[24rem] h-[24rem] rounded-full bg-primary/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>
      <div className="max-w-5xl w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <div className="mb-6 md:mb-8">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                {t('hero.badge')}
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 md:mb-8 tracking-tight animate-fade-in-up [animation-delay:200ms]">
              {t('hero.title')}
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 md:mb-12 leading-relaxed animate-fade-in-up [animation-delay:400ms]">
              {t('hero.subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in-up [animation-delay:600ms]">
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                {t('hero.cta.work')}
                <ArrowRight size={20} />
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors"
              >
                {t('hero.cta.contact')}
              </Link>
            </div>

            <div className="mt-12 md:mt-16 text-sm text-muted-foreground space-y-2">
              <p>{t('hero.location')}</p>
              <p className="flex justify-center md:justify-start items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                {t('hero.available')}
              </p>
            </div>
          </div>

          <div className="hidden md:flex justify-center items-center animate-fade-in-up [animation-delay:800ms]">
            <div className="relative w-72 h-96 rounded-2xl overflow-hidden border-2 border-primary/20 shadow-2xl bg-gradient-to-br from-primary/25 via-primary/10 to-transparent flex items-center justify-center">
              <span className="text-7xl font-bold text-primary/40 select-none">
                {initials(config.name)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
