'use client'

import { BlogPost } from '@/data/blog'
import { useLanguage } from '@/providers/LanguageProvider'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft, Tag } from 'lucide-react'
import { BlogImagePlaceholder } from '@/components/ui/BlogImagePlaceholder'

interface BlogPostContentProps {
  post: BlogPost
  relatedPosts: BlogPost[]
}

export default function BlogPostContent({ post, relatedPosts }: BlogPostContentProps) {
  const { t } = useLanguage()
  
  return (
    <main className="min-h-screen bg-background text-foreground pt-24">
      <article className="max-w-3xl mx-auto px-4 md:px-8 py-20">
        {/* Back Link */}
        <Link href="/blog" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold mb-8 transition-colors">
          <ArrowLeft size={20} />
          {t('blog.backToBlog')}
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
              {post.category}
            </span>
            <span className="text-sm text-muted-foreground flex items-center gap-1">
              <Clock size={16} />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-6 border-t border-border">
            <div className="flex flex-col gap-1">
              <p className="text-muted-foreground">
                {t('blog.author')} <span className="font-semibold text-foreground">{post.author}</span>
              </p>
              <p className="text-muted-foreground flex items-center gap-2">
                <Calendar size={16} />
                {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        {post.image && (
          <div className="relative w-full h-96 rounded-xl overflow-hidden mb-12 bg-muted">
            <BlogImagePlaceholder category={post.category} />
          </div>
        )}

        {/* Content */}
        <div className="mb-16 text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
          {post.content}
        </div>

        {/* Divider */}
        <div className="border-t border-border py-12">
          {/* Share & Tags */}
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">Tags</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full flex items-center gap-2">
                  <Tag size={16} />
                  {post.category}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map(relatedPost => (
                <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                  <article className="group bg-card/50 rounded-lg border border-border p-6 hover:border-primary/50 transition-all duration-300 h-full">
                    <div className="flex items-center gap-2 mb-3">
                      <Tag size={14} className="text-primary" />
                      <span className="text-xs font-semibold text-primary">{relatedPost.category}</span>
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {relatedPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {new Date(relatedPost.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </span>
                      <span>{relatedPost.readTime}</span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </main>
  )
}
