'use client'

import Navigation from './Navigation'

export function ClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      {children}
    </>
  )
}
