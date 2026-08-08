import BlogPostContent from '@/components/blog/BlogPostContent'
import { blogPosts } from '@/data/blog'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return { title: 'Post Not Found' }
  }

  return {
    title: `${post.title} | Blog`,
    description: post.excerpt,
  }
}

// This is a Server Component: it can safely be `async` and `await` the
// `params` Promise. Client Components ("use client") can never be async,
// and awaiting a freshly-created promise inside one is what caused the
// "suspended by an uncached promise" error.
export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params

  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3)

  return <BlogPostContent post={post} relatedPosts={relatedPosts} />
}
