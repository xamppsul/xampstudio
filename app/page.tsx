'use client'

import { lazy, Suspense } from 'react'

const Hero = lazy(() => import('@/components/sections/Hero'))
const About = lazy(() => import('@/components/sections/About'))
const Experience = lazy(() => import('@/components/sections/Experience'))
const Skills = lazy(() => import('@/components/sections/Skills'))
const Projects = lazy(() => import('@/components/sections/Projects'))
const Blog = lazy(() => import('@/components/sections/Blog'))
const Contact = lazy(() => import('@/components/sections/Contact'))
const Footer = lazy(() => import('@/components/sections/Footer'))

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
    </Suspense>
  )
}
