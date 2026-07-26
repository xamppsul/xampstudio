'use client'

import { Suspense, useEffect, useState } from 'react'
import BlogPostContent from '@/components/blog/BlogPostContent'
import { blogPosts } from '@/data/blog'
import { notFound } from 'next/navigation'

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  
  const post = blogPosts.find(p => p.slug === slug)
  
  return <BlogPostPageContent post={post} />
}

function BlogPostPageContent({ post }: { post: any }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="min-h-screen bg-background" />
  }

  if (!post) {
    notFound()
  }

  const relatedPosts = blogPosts.filter(p => p.category === post.category && p.slug !== post.slug).slice(0, 3)

  return (
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <BlogPostContent post={post} relatedPosts={relatedPosts} />
    </Suspense>
  )
}
