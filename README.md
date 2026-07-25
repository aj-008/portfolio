# Portfolio scaffold

Astro + Tailwind, deployed as a fully static site (no server runtime needed).

## Structure

- `src/content/projects/*.md` — one file per project. Edit these directly; this
  is the only place you should need to touch to add/update a project. Frontmatter
  fields are typed and validated in `src/content/config.ts`.
- `src/pages/index.astro` — home page, pulls in projects marked `featured: true`.
- `src/pages/projects/index.astro` — full project listing.
- `src/pages/projects/[...slug].astro` — auto-generated page per project from its
  markdown body.
- `src/pages/about.astro` — bio + skills list.
- `src/components/ProjectCard.astro` — the card used on both the home and
  projects pages.
- `src/layouts/Layout.astro` — shared shell (nav, footer, fonts).

## Getting started

```bash
npm install
npm run dev       # http://localhost:4321
```

## To customize

1. Replace placeholder links/usernames (`your-username`, `your-domain.com`) —
   search for these strings across the project.
2. Swap the color palette in `tailwind.config.mjs` for your own (pywal export
   would work well here).
3. Add a `favicon.svg`, `resume.pdf`, and any project screenshots to `public/`.
4. Edit or add entries in `src/content/projects/` — each new `.md` file there
   automatically gets a page and shows up in the listing.

## Deploying

Push to GitHub, then import the repo in Vercel — it auto-detects Astro, no
config needed. Framework preset: Astro. Output: static.
