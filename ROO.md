@AGENTS.md

Dokumen ini memberi konteks kepada Claude Code saat bekerja di repository ini.

## Tentang Proyek

Website portfolio pribadi untuk menampilkan profil, skill, proyek, dan kontak.
Target: recruiter, klien freelance, dan sesama developer yang ingin melihat karya saya.

- **Nama pemilik:** Muhammad Syamsul Ma'rif
- **Profesi:** Software Engineer
- **Tone/gaya:** profesional / playful & kreatif

## Tech Stack

- **Framework:** Next.js 16.2.10 (App Router)
- **Styling:** Tailwind CSS
- **Bahasa:** TypeScript
- **Animasi:** Framer Motion
- **Hosting:** Vercel
- **Form kontak:** Formspree

## Struktur Folder

```
/app
  /page.tsx          -> Halaman utama (Hero, About, Skills, Projects, Contact)
  /projects/[slug]   -> Detail proyek (jika ada halaman terpisah)
/components
  /ui                -> Komponen kecil reusable (Button, Card, Badge)
  /sections           -> Section besar (Hero, About, Skills, Projects, Contact, Footer)
/data
  projects.ts         -> Data proyek (judul, deskripsi, tech, link, gambar)
  skills.ts            -> Daftar skill/tools
/public
  /images              -> Aset gambar & foto proyek
```

## Konten Wajib di Halaman

1. **Hero** — nama, headline singkat, CTA (lihat proyek / hubungi saya)
2. **About** — bio singkat, foto, poin keahlian
3. **Skills** — daftar teknologi/tools dengan ikon
4. **Projects** — minimal 3 proyek: judul, deskripsi singkat, tech stack, link demo & repo, gambar/thumbnail
5. **Contact** — email, link sosial media (LinkedIn, GitHub, dll), form kontak opsional
6. **Footer** — copyright, link cepat

## Konvensi Coding

- Gunakan **komponen fungsional** dengan TypeScript, hindari `any`.
- Semua komponen section diletakkan di `/components/sections`, jangan campur logic di `page.tsx`.
- Gunakan Tailwind utility classes; hindari inline style kecuali untuk nilai dinamis.
- Nama file komponen pakai PascalCase (`ProjectCard.tsx`), nama folder pakai kebab-case.
- Data proyek/skill disimpan sebagai array objek di `/data`, bukan hardcode di komponen.
- Gambar wajib pakai `next/image` untuk optimasi otomatis.

## Yang Harus Diperhatikan Claude

- **Responsif:** semua section harus rapi di mobile, tablet, dan desktop (uji breakpoint `sm`, `md`, `lg`).
- **Aksesibilitas:** gunakan tag semantik (`<nav>`, `<main>`, `<section>`), alt text pada gambar, kontras warna cukup.
- **Performa:** lazy-load gambar besar, hindari animasi berat yang bikin lag di HP low-end.
- **SEO dasar:** isi `metadata` (title, description, og:image) di setiap halaman.
- **Dark mode (opsional):** jika diaktifkan, pastikan konsisten di semua komponen.

## Hal yang JANGAN Dilakukan

- Jangan hardcode data pribadi (email, nomor telepon) langsung di banyak file — taruh di satu tempat (`/data/config.ts`) agar mudah diubah.
- Jangan menambah library baru tanpa alasan jelas — cek dulu apakah Tailwind/komponen yang ada sudah cukup.
- Jangan commit file `.env` atau API key.

## Roadmap / TODO

- [ ] Tambah halaman blog (opsional)
- [ ] Integrasi Google Analytics
- [ ] Tambah animasi scroll-reveal di section Projects
- [ ] Tambah versi bahasa Inggris (i18n)