import { BookOpen } from 'lucide-react'

/**
 * Decorative fallback used wherever a blog post doesn't have a real
 * uploaded image yet (the project ships without any files in
 * `public/images`, so pointing <Image> at those paths produced broken
 * images everywhere). Fills its parent (`absolute inset-0`), so drop it
 * inside a `relative` container the same way `<Image fill />` was used.
 */
export function BlogImagePlaceholder({ category }: { category: string }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-primary/25 via-primary/10 to-transparent">
      <BookOpen className="text-primary/50" size={28} />
      <span className="text-xs font-semibold uppercase tracking-wide text-primary/60">
        {category}
      </span>
    </div>
  )
}
