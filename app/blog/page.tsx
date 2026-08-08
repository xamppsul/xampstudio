import BlogContent from '@/components/blog/BlogContent'
import { blogPosts } from '@/data/blog'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Thoughts on web development, software engineering, and technology trends.',
}

// Static content -> plain Server Component. BlogContent itself is a
// 'use client' component (it needs the language context), so interactivity
// is preserved, but we no longer need an artificial mount-gate here.
export default function BlogPage() {
  return <BlogContent posts={blogPosts} />
}
