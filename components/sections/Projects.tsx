'use client'

import { useState } from 'react'
import { projects } from '@/data/projects'
import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink, Code2 } from 'lucide-react'
import { useLanguage } from '@/providers/LanguageProvider'

export default function Projects() {
  const { t } = useLanguage()
  const [showAll, setShowAll] = useState(false)
  const featuredProjects = projects.filter((p) => p.featured)
  const displayedProjects = showAll ? projects : featuredProjects

  return (
    <section id="projects" className="py-20 md:py-32 px-4 md:px-8 bg-card/50">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {showAll ? t('projects.allProjects') : t('projects.title')}
          </h2>
          <div className="h-1 w-16 bg-primary rounded-full"></div>
        </div>

        <div className="space-y-12 md:space-y-16">
          {displayedProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:grid-cols-2' : ''}`}
            >
              <div
                className={`order-2 md:order-${index % 2 === 0 ? '1' : '2'} relative h-80 md:h-96 bg-muted rounded-xl overflow-hidden border border-border`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <div className="text-5xl font-bold opacity-20 mb-2">{index + 1}</div>
                    <p>Project Image</p>
                  </div>
                </div>
              </div>

              <div className={`order-1 md:order-${index % 2 === 0 ? '2' : '1'}`}>
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wide rounded-full mb-4">
                  {project.featured ? 'Featured Project' : 'Project'}
                </span>

                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-lg font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  {project.demo && (
                    <Link
                      href={project.demo}
                      target="_blank"
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors"
                    >
                      Live Demo
                      <ExternalLink size={18} />
                    </Link>
                  )}
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground font-semibold transition-colors"
                    >
                      View Code
                      <Code2 size={18} />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {!showAll && projects.length > featuredProjects.length && (
          <div className="mt-16 md:mt-24 pt-12 md:pt-16 border-t border-border text-center">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              {t('projects.viewAll')}
              <ExternalLink size={20} className="ml-2" />
            </button>
          </div>
        )}

        {showAll && (
          <div className="mt-16 md:mt-24 pt-12 md:pt-16 border-t border-border text-center">
            <button
              onClick={() => setShowAll(false)}
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors"
            >
              Show Featured Only
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
