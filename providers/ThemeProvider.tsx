'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

function applyTheme(newTheme: Theme) {
  const html = document.documentElement
  // Always set both classes explicitly so the theme never depends on the
  // OS `prefers-color-scheme` media query once the user (or the app) has
  // made a decision. This is what previously let a system-dark OS keep
  // forcing dark styles even after the user picked "light".
  html.classList.remove(newTheme === 'dark' ? 'light' : 'dark')
  html.classList.add(newTheme)
  html.style.colorScheme = newTheme
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Read the theme the blocking inline script (see layout.tsx) already
  // applied to <html>, so this initial state matches what's on screen and
  // React doesn't need to wait for an effect to "unlock" the real UI.
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'dark'
    return document.documentElement.classList.contains('light') ? 'light' : 'dark'
  })

  // Keep localStorage/system-preference in sync on mount in case this ever
  // renders before the inline script (e.g. fast refresh in dev).
  useEffect(() => {
    const saved = localStorage.getItem('theme') as Theme | null
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    const initialTheme = saved || systemTheme
    setThemeState(initialTheme)
    applyTheme(initialTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme)
    applyTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  // The context is always provided (even before the mount-sync effect
  // runs) so any child calling useTheme() never throws. Previously this
  // returned bare `children` while unmounted, which meant any component
  // reading useTheme() during that window crashed with
  // "useTheme must be used within ThemeProvider".
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}
