'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { Language, translations } from '@/data/translations'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en')

  // Sync with the user's saved/browser preference once we're on the
  // client. We intentionally start from 'en' on the server (and on the
  // very first client render) so server and client markup match; the
  // effect below then upgrades it without ever unmounting the context.
  useEffect(() => {
    const saved = localStorage.getItem('language') as Language | null
    const browserLang = navigator.language.split('-')[0] as Language
    const initialLang = (saved || browserLang || 'en') as Language

    if (['en', 'id', 'es'].includes(initialLang)) {
      setLanguageState(initialLang)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('language', lang)
  }

  const t = (key: string): string => {
    return translations[language]?.[key] || translations['en']?.[key] || key
  }

  // The context is always provided. Previously this component rendered
  // bare `children` (no Provider) until `mounted` became true, so any
  // component calling useLanguage() during that window threw
  // "useLanguage must be used within LanguageProvider".
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
