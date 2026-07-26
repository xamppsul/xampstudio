'use client'

import { Suspense, useEffect, useState } from 'react'
import BlogContent from '@/components/blog/BlogContent'
import { blogPosts } from '@/data/blog'

export default function BlogPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="min-h-screen bg-background" />
  }

  return (
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <BlogContent posts={blogPosts} />
    </Suspense>
  )
}
