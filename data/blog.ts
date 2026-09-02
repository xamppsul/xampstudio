export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  date: string
  category: string
  readTime: string
  author: string
  featured: boolean
  image?: string
}

export const blogPosts: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'Getting Started with React Hooks',
    slug: 'getting-started-react-hooks',
    excerpt: 'Learn how to use React Hooks to manage state and side effects in your functional components.',
    content: 'React Hooks have revolutionized how we write React components. In this comprehensive guide, we explore useState, useEffect, and custom hooks...',
    date: '2024-01-15',
    category: 'React',
    readTime: '5 min read',
    author: 'Muhammad Syamsul Ma\'rif',
    featured: true,
    image: '/images/blog-1.jpg',
  },
  {
    id: 'blog-2',
    title: 'Building Scalable Node.js Applications',
    slug: 'scalable-nodejs-applications',
    excerpt: 'Best practices and patterns for building production-ready Node.js applications that scale.',
    content: 'Building scalable Node.js applications requires careful architecture planning. We discuss microservices, load balancing, and database optimization...',
    date: '2024-01-10',
    category: 'Node.js',
    readTime: '8 min read',
    author: 'Muhammad Syamsul Ma\'rif',
    featured: true,
    image: '/images/blog-2.jpg',
  },
  {
    id: 'blog-3',
    title: 'Web Performance Optimization Tips',
    slug: 'web-performance-optimization',
    excerpt: 'Practical techniques to improve your website performance and user experience.',
    content: 'Web performance is crucial for user experience and SEO. Learn about code splitting, lazy loading, caching strategies, and more...',
    date: '2024-01-05',
    category: 'Performance',
    readTime: '6 min read',
    author: 'Muhammad Syamsul Ma\'rif',
    featured: true,
    image: '/images/blog-3.jpg',
  },
  {
    id: 'blog-4',
    title: 'TypeScript Best Practices',
    slug: 'typescript-best-practices',
    excerpt: 'Master TypeScript with these essential best practices and patterns.',
    content: 'TypeScript can significantly improve code quality and developer experience. In this post, we cover type safety, interfaces, generics, and more...',
    date: '2023-12-28',
    category: 'TypeScript',
    readTime: '7 min read',
    author: 'Muhammad Syamsul Ma\'rif',
    featured: false,
    image: '/images/blog-4.jpg',
  },
  {
    id: 'blog-5',
    title: 'CSS Grid vs Flexbox',
    slug: 'css-grid-vs-flexbox',
    excerpt: 'Understanding when to use CSS Grid and when to use Flexbox for your layouts.',
    content: 'Both CSS Grid and Flexbox are powerful layout tools. We explore their differences, use cases, and when to use each one...',
    date: '2023-12-20',
    category: 'CSS',
    readTime: '4 min read',
    author: 'Muhammad Syamsul Ma\'rif',
    featured: false,
    image: '/images/blog-5.jpg',
  },
  {
    id: 'blog-6',
    title: 'Database Design Principles',
    slug: 'database-design-principles',
    excerpt: 'Learn fundamental database design concepts and how to create efficient database schemas.',
    content: 'Proper database design is critical for application performance. We discuss normalization, indexing, query optimization, and best practices...',
    date: '2023-12-15',
    category: 'Database',
    readTime: '9 min read',
    author: 'Muhammad Syamsul Ma\'rif',
    featured: false,
    image: '/images/blog-6.jpg',
  },
]
