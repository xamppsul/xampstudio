'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { useLanguage } from '@/providers/LanguageProvider'
import { heroSlides } from '@/data/hero'

const AUTOPLAY_DELAY_MS = 6000

export default function Hero() {
  const { t } = useLanguage()

  // Only slides with status = true are shown, ordered by position ascending.
  const slides = useMemo(
    () =>
      heroSlides
        .filter((slide) => slide.status)
        .sort((a, b) => a.position - b.position),
    []
  )

  const count = slides.length
  const [index, setIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const goTo = useCallback(
    (i: number) => {
      if (count === 0) return
      setIndex(((i % count) + count) % count)
    },
    [count]
  )

  const next = useCallback(() => goTo(index + 1), [goTo, index])
  const prev = useCallback(() => goTo(index - 1), [goTo, index])

  // Autoplay, paused on hover/focus and whenever there's only one slide.
  useEffect(() => {
    if (isPaused || count <= 1) return

    timerRef.current = setInterval(() => {
      setIndex((current) => (current + 1) % count)
    }, AUTOPLAY_DELAY_MS)

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [isPaused, count])

  // Left/right arrow key navigation.
  useEffect(() => {
    if (count <= 1) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [next, prev, count])

  if (count === 0) {
    // No published slides (all status: false) — nothing to render.
    return null
  }

  const activeSlide = slides[index]

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden animate-fade-in"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      {/* Slide images, cross-fading by opacity */}
      <div className="absolute inset-0 -z-20">
        {slides.map((slide, i) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              i === index ? 'opacity-100' : 'opacity-0'
            }`}
            aria-hidden={i !== index}
          >
            <Image
              src={slide.img}
              alt=""
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Overlay for text readability, consistent in light/dark mode */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/85 via-black/55 to-black/35" />

      <div className="relative z-10 max-w-4xl w-full px-4 md:px-8 py-32 md:py-40 text-center">
        <div className="mb-6 md:mb-8">
          <span className="inline-block px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-white text-sm font-medium">
            {t('hero.badge')}
          </span>
        </div>

        {/* Remounting on slide.id restarts the fade-up animation per slide */}
        <div key={activeSlide.id} className="animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight text-balance">
            {activeSlide.title}
          </h1>
          <p className="text-lg md:text-xl text-white/85 mb-10 leading-relaxed max-w-2xl mx-auto text-balance">
            {activeSlide.description}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 md:mb-16 animate-fade-in-up [animation-delay:200ms]">
          <Link
            href="#projects"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-black rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            {t('hero.cta.work')}
            <ArrowRight size={20} />
          </Link>

          <Link
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-white/50 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
          >
            {t('hero.cta.contact')}
          </Link>
        </div>

        <div className="text-sm text-white/75 space-y-2">
          <p>{t('hero.location')}</p>
          <p className="flex justify-center items-center gap-2">
            <span className="w-2 h-2 bg-green-400 rounded-full" />
            {t('hero.available')}
          </p>
        </div>
      </div>

      {count > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            aria-label="Previous slide"
            className="hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-10 items-center justify-center w-11 h-11 rounded-full bg-white/10 border border-white/20 text-white backdrop-blur-sm hover:bg-white/20 transition-colors cursor-pointer"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            type="button"
            onClick={next}
            aria-label="Next slide"
            className="hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-10 items-center justify-center w-11 h-11 rounded-full bg-white/10 border border-white/20 text-white backdrop-blur-sm hover:bg-white/20 transition-colors cursor-pointer"
          >
            <ChevronRight size={22} />
          </button>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
            {slides.map((slide, i) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === index}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  i === index ? 'w-8 bg-white' : 'w-2 bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </section>
  )
}
