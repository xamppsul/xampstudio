export interface HeroSlide {
  id: string
  title: string
  description: string
  /** Determines slide order — slides are sorted ascending (lowest first). */
  position: number
  /** Show/hide toggle — only slides with status = true are rendered in the slider. */
  status: boolean
  img: string
}

export const heroSlides: HeroSlide[] = [
  {
    id: 'hero-slide-1',
    title: "Muhammad Syamsul Ma'rif",
    description:
      'Full-stack Software Engineer specializing in building scalable web applications with modern technologies.',
    position: 1,
    status: true,
    img: '/images/hero-1.svg',
  },
  {
    id: 'hero-slide-2',
    title: 'Crafting Clean, Scalable Code',
    description:
      'From idea to production, I build performant Next.js and Node.js applications with a focus on maintainability and developer experience.',
    position: 2,
    status: true,
    img: '/images/hero-2.svg',
  },
  {
    id: 'hero-slide-3',
    title: 'Open for Freelance & Full-time Roles',
    description:
      "Let's collaborate on your next product. Currently available for freelance projects and full-time opportunities.",
    position: 3,
    status: true,
    img: '/images/hero-3.svg',
  },
  {
    id: 'hero-slide-4',
    title: 'Draft Slide (Hidden Example)',
    description:
      'This slide has status set to false, so it is hidden from the slider. Flip status to true to publish it.',
    position: 4,
    status: false,
    img: '/images/hero-4.svg',
  },
]
