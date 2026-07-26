'use client'

import { config } from '@/data/config'
import Link from 'next/link'
import { useLanguage } from '@/providers/LanguageProvider'

export default function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-card/30 py-12 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-12 md:mb-16">
          <div>
            <h3 className="font-semibold text-foreground mb-4">{t('footer.links')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t('nav.projects')}
                </Link>
              </li>
              <li>
                <Link href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t('nav.skills')}
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Social</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href={config.social.github}
                  target="_blank"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  GitHub
                </Link>
              </li>
              <li>
                <Link
                  href={config.social.linkedin}
                  target="_blank"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link
                  href={config.social.twitter}
                  target="_blank"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Twitter
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">About</h3>
            <ul className="space-y-2">
              <li>
                <p className="text-muted-foreground">
                  {config.title} based in {config.location}
                </p>
              </li>
              <li>
                <Link
                  href={`mailto:${config.email}`}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {config.email}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; {currentYear} {config.name}. {t('footer.copyright')}</p>
          <p>Designed & built with care</p>
        </div>
      </div>
    </footer>
  )
}
