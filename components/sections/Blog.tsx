'use client'

import { useState } from 'react'
import { blogPosts } from '@/data/blog'
import { useLanguage } from '@/providers/LanguageProvider'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { BlogImagePlaceholder } from '@/components/ui/BlogImagePlaceholder'

export default function Blog() {
  const { t } = useLanguage()
  const [showAll, setShowAll] = useState(false)
  const featuredPosts = blogPosts.filter(p => p.featured)
  const displayedPosts = showAll ? blogPosts : featuredPosts.slice(0, 3)

  return (
    <section id="blog" className="py-20 md:py-32 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t('blog.title')}
          </h2>
          <div className="h-1 w-16 bg-primary rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {displayedPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group bg-card rounded-lg overflow-hidden border border-border hover:border-primary hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden bg-muted">
                <div className="transition-transform duration-300 group-hover:scale-110 absolute inset-0">
                  <BlogImagePlaceholder category={post.category} />
                </div>
                <div className="absolute top-4 right-4">
                  <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    {post.readTime} read
                  </div>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                  {t('blog.readMore')}
                  <ArrowRight size={18} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {!showAll && blogPosts.length > 3 && (
          <div className="mt-16 md:mt-24 pt-12 md:pt-16 border-t border-border text-center">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              View All Articles
              <ArrowRight size={20} className="ml-2" />
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
