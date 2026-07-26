'use client'

import { config } from '@/data/config'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '@/providers/LanguageProvider'

export default function Hero() {
  const { t } = useLanguage()
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 md:px-8 py-20 md:py-32 pt-32 md:pt-40 animate-fade-in relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-30">
        <Image
          src="/images/tech-background.png"
          alt="tech background"
          fill
          className="object-cover"
          priority
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
            <div className="relative w-72 h-96 rounded-2xl overflow-hidden border-2 border-primary/20 shadow-2xl">
              <Image
                src="/images/personal-photo.png"
                alt={config.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
