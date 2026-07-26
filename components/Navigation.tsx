'use client'

import { config } from '@/data/config'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X, Moon, Sun, Globe } from 'lucide-react'
import { useTheme } from '@/providers/ThemeProvider'
import { useLanguage } from '@/providers/LanguageProvider'

function NavigationContent({ isOpen, setIsOpen, scrolled }: { isOpen: boolean; setIsOpen: (open: boolean) => void; scrolled: boolean }) {
  const { theme, toggleTheme } = useTheme()
  const { language, setLanguage, t } = useLanguage()

  const navLinks = [
    { label: t('nav.about'), href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: t('nav.skills'), href: '#skills' },
    { label: t('nav.projects'), href: '#projects' },
    { label: t('nav.blog'), href: '#blog' },
    { label: t('nav.contact'), href: '#contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-sm' : 'bg-background/50'
        }`}
    >
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="text-lg md:text-xl font-bold text-foreground hover:text-primary transition-colors">
          {config.name.split(' ')[0]}
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              {link.label}
            </Link>
          ))}
          
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors text-foreground"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Language Selector */}
          <div className="relative group">
            <button className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors text-foreground flex items-center gap-2">
              <Globe size={20} />
            </button>
            <div className="absolute right-0 mt-2 w-40 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
              {(['en', 'id', 'es'] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`w-full text-left px-4 py-2 ${language === lang ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'} transition-colors first:rounded-t-lg last:rounded-b-lg`}
                >
                  {lang === 'en' ? 'English' : lang === 'id' ? 'Indonesian' : 'Español'}
                </button>
              ))}
            </div>
          </div>

          <Link
            href={`mailto:${config.email}`}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            {t('hero.cta.contact')}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-border md:hidden">
            <div className="flex flex-col gap-4 p-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              
              {/* Mobile Theme & Language */}
              <div className="flex gap-4 pt-4 border-t border-border">
                <button
                  onClick={() => {
                    toggleTheme()
                    setIsOpen(false)
                  }}
                  className="flex-1 p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors text-foreground flex items-center justify-center gap-2"
                >
                  {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                </button>
                <div className="flex-1 relative group">
                  <button className="w-full p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors text-foreground flex items-center justify-center gap-2">
                    <Globe size={20} />
                  </button>
                  <div className="absolute right-0 mt-2 w-32 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                    {(['en', 'id', 'es'] as const).map((lang) => (
                      <button
                        key={lang}
                        onClick={() => {
                          setLanguage(lang)
                          setIsOpen(false)
                        }}
                        className={`w-full text-left px-4 py-2 text-sm ${language === lang ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'} transition-colors first:rounded-t-lg last:rounded-b-lg`}
                      >
                        {lang === 'en' ? 'EN' : lang === 'id' ? 'ID' : 'ES'}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                href={`mailto:${config.email}`}
                className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity text-center"
                onClick={() => setIsOpen(false)}
              >
                {t('hero.cta.contact')}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Render skeleton while loading
  if (!mounted) {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/50">
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="text-lg md:text-xl font-bold text-foreground">
            {config.name.split(' ')[0]}
          </Link>
        </div>
      </nav>
    )
  }

  return <NavigationContent isOpen={isOpen} setIsOpen={setIsOpen} scrolled={scrolled} />
}
