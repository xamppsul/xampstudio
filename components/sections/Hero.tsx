'use client'

import { config } from '@/data/config'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 md:px-8 py-20 md:py-32 pt-32 md:pt-40 animate-fade-in">
      <div className="max-w-4xl w-full text-center">
        <div className="mb-6 md:mb-8">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            Welcome to my portfolio
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 md:mb-8 tracking-tight animate-fade-in-up [animation-delay:200ms]">
          {config.name}
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-8 md:mb-12 leading-relaxed max-w-2xl mx-auto animate-fade-in-up [animation-delay:400ms]">
          {config.title} specializing in building scalable web applications with modern technologies
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up [animation-delay:600ms]">
          <Link
            href="#projects"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            View My Work
            <ArrowRight size={20} />
          </Link>

          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors"
          >
            Get In Touch
          </Link>
        </div>

        <div className="mt-16 md:mt-24 text-sm text-muted-foreground space-y-2">
          <p>Based in {config.location}</p>
          <p className="flex justify-center items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Available for freelance & full-time opportunities
          </p>
        </div>
      </div>
    </section>
  )
}
