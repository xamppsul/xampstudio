'use client'

import { BlogPost } from '@/data/blog'
import Link from 'next/link'
import { Calendar, Clock } from 'lucide-react'
import { useLanguage } from '@/providers/LanguageProvider'
import { BlogImagePlaceholder } from '@/components/ui/BlogImagePlaceholder'

interface BlogContentProps {
  posts: BlogPost[]
}

export default function BlogContent({ posts }: BlogContentProps) {
  const { t } = useLanguage()
  const featuredPosts = posts.filter(post => post.featured)
  const otherPosts = posts.filter(post => !post.featured)

  return (
    <main className="min-h-screen bg-background text-foreground pt-24">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-20">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
            {t('blog.title')}
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
            Thoughts on web development, software engineering, and technology trends.
          </p>
        </div>

        {/* Featured Posts */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-8">Featured</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts.map(post => (
              <article key={post.id} className="group bg-card/50 rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300">
                {post.image && (
                  <div className="relative h-48 overflow-hidden bg-muted">
                    <div className="transition-transform duration-300 group-hover:scale-105 absolute inset-0">
                      <BlogImagePlaceholder category={post.category} />
                    </div>
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar size={16} />
                      {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-primary hover:text-primary/80 font-semibold transition-colors"
                    >
                      {t('blog.readMore')} →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* All Posts */}
        {otherPosts.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-8">All Articles</h2>
            <div className="space-y-6">
              {otherPosts.map(post => (
                <article key={post.id} className="group bg-card/50 rounded-lg border border-border p-6 hover:border-primary/50 transition-all duration-300 flex gap-6">
                  {post.image && (
                    <div className="hidden md:block relative w-32 h-32 flex-shrink-0 overflow-hidden rounded-lg bg-muted">
                      <div className="transition-transform duration-300 group-hover:scale-105 absolute inset-0">
                        <BlogImagePlaceholder category={post.category} />
                      </div>
                    </div>
                  )}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock size={14} />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                        </span>
                      </div>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-primary hover:text-primary/80 font-semibold transition-colors"
                      >
                        {t('blog.readMore')} →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
