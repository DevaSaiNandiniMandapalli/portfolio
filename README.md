# Deva Sai Nandini Mandapalli — Portfolio

A single-page cybersecurity portfolio built with React, Vite, TypeScript, Tailwind CSS, shadcn/ui-style components and Framer Motion.

**Live site:** https://devasainandinimandapalliportfolio.vercel.app/

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run preview  # preview the production build
```

## Edit your content

All text lives in one file: `src/data/portfolio.ts`.

## Replace before publishing

1. **Photo** — set at `public/photo.jpg` (square 512×512, shown in a circle). Replace with a newer photo any time, keeping the filename and a square ratio.
2. **Resume** — `public/resume.pdf` holds the live resume.
3. **Dates** — set in `dates` fields under `experience` and `education` in `src/data/portfolio.ts`.
4. **Canonical / OG URLs** — already point to https://devasainandinimandapalliportfolio.vercel.app/ in `index.html`, the JSON-LD block and `public/sitemap.xml`. Update all of them if the domain changes.

## Deploy

The site is deployed on Vercel: **https://devasainandinimandapalliportfolio.vercel.app/**

```bash
npm run build            # outputs static files to dist/
vercel --prod            # or connect the GitHub repo to Vercel for auto-deploy
```

Vercel settings: framework **Vite**, build command `npm run build`, output directory `dist`.

## Structure

```
src/
  data/portfolio.ts        # all content + types
  components/
    navbar.tsx             # sticky nav, theme toggle, mobile menu
    reveal.tsx             # scroll-reveal wrapper
    typing-text.tsx        # hero typing effect
    sections/              # hero, about, skills, experience, projects, ...
    ui/                    # button, card, badge
  hooks/                   # theme, active-section
```
