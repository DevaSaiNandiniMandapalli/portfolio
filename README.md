# Deva Sai Nandini Mandapalli — Portfolio

A single-page cybersecurity portfolio built with React, Vite, TypeScript, Tailwind CSS, shadcn/ui-style components and Framer Motion.

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

1. **Photo** — already set at `public/photo.jpg` (portrait 4:5, 512×640). Replace with a newer photo any time, keeping the filename and roughly the same portrait ratio.
2. **Resume** — replace `public/resume.pdf` with your real resume.
3. **Dates** — update every `dates: "[Dates]"` entry in `experience`.
4. **Canonical / OG URLs** — update `https://devasainandini.dev/` in `index.html` and the JSON-LD block to your real domain.

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
