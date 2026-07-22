# v0dev.md

This document gives v0dev Code context when working in this repository.

## About the Project

Personal portfolio website to showcase profile, skills, projects, and contact info.
Target audience: recruiters, freelance clients, and fellow developers checking out my work.

- **Owner name:** Muhammad Syamsul Ma'rif
- **Profession:** Software Engineer
- **Tone/style:** professional / playful & creative

## Tech Stack

- **Framework:** Next.js 16.2.10 (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Animation:** Framer Motion
- **Hosting:** Vercel
- **Contact form:** [e.g. Resend / Formspree]

> Update this to match your actual stack (React, Astro, Vue, plain HTML/CSS, etc).

## Folder Structure

```
/app
  /page.tsx          -> Main page (Hero, About, Skills, Projects, Contact)
  /projects/[slug]   -> Project detail page (if using separate pages)
/components
  /ui                -> Small reusable components (Button, Card, Badge)
  /sections           -> Large sections (Hero, About, Skills, Projects, Contact, Footer)
/data
  projects.ts         -> Project data (title, description, tech, links, image)
  skills.ts            -> List of skills/tools
/public
  /images              -> Image assets & project screenshots
```

## Required Page Content

1. **Hero** — name, short headline, CTA (view projects / contact me)
2. **About** — short bio, photo, key strengths
3. **Skills** — list of technologies/tools with icons
4. **Projects** — at least 3 projects: title, short description, tech stack, demo & repo links, image/thumbnail
5. **Contact** — email, social links (LinkedIn, GitHub, etc.), optional contact form
6. **Footer** — copyright, quick links

## Coding Conventions

- Use **functional components** with TypeScript; avoid `any`.
- All section components go in `/components/sections`; keep logic out of `page.tsx`.
- Use Tailwind utility classes; avoid inline styles except for dynamic values.
- Component filenames use PascalCase (`ProjectCard.tsx`), folder names use kebab-case.
- Store project/skill data as arrays of objects in `/data`, not hardcoded in components.
- Use `next/image` for all images to get automatic optimization.

## Things RooCode Should Pay Attention To

- **Responsiveness:** every section must look clean on mobile, tablet, and desktop (test `sm`, `md`, `lg` breakpoints).
- **Accessibility:** use semantic tags (`<nav>`, `<main>`, `<section>`), alt text on images, sufficient color contrast.
- **Performance:** lazy-load large images, avoid heavy animations that lag on low-end phones.
- **Basic SEO:** fill in `metadata` (title, description, og:image) on every page.
- **Dark mode (optional):** if enabled, keep it consistent across all components.

## Common Commands

```bash
npm run dev       # run the development server
npm run build     # production build
npm run lint      # run linting
```

## Things NOT to Do

- Don't hardcode personal data (email, phone number) across many files — keep it in one place (`/data/config.ts`) so it's easy to update.
- Don't add new libraries without a clear reason — check if existing Tailwind/components already cover it.
- Don't commit `.env` files or API keys.

## Roadmap / TODO

- [ ] Add a blog page (optional)
- [ ] Integrate Google Analytics
- [ ] Add scroll-reveal animation to the Projects section
- [ ] Add an English/multilingual version (i18n)