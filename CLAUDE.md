# CLAUDE.md

## Project

Personal portfolio site for Iván Garza Bermea. Vite + React + TypeScript, deployed on Vercel.

## Commands

```bash
npm run dev       # dev server
npm run build     # tsc + vite build
npm run lint      # ESLint
npm run preview   # preview production build
```

## Architecture

- `src/App.tsx` — single `Promise.all` fetch for all JSON data on mount; passes data as props to section components
- `src/components/` — one component per page section; no component fetches its own data
- `src/types.ts` — all shared interfaces live here
- `public/data/*.json` — all content (experience, projects, writing, quotes); edit these to update the site without touching code
- `src/index.css` — single stylesheet, no CSS modules; all class names are defined here

## Key rules

- Do not change existing class names — the visual design is considered final
- Do not add CSS modules or Tailwind — all styles go in `src/index.css`
- Do not add new data fetches inside components — fetch in `App.tsx` via `Promise.all` and pass as props
- Do not add libraries unless clearly necessary — the project has zero runtime dependencies beyond React
- Content updates (new job, new article, new quote) go in `public/data/` JSON files only

## Contact form

Formspree endpoint is in `src/components/Contact.tsx` as `FORMSPREE_ENDPOINT`. The free tier allows 50 submissions/month.

## Fonts

Cormorant Garamond (serif) and DM Mono (monospace) — loaded from Google Fonts in `index.css`.

## Color tokens (defined in `:root`)

| Token | Value | Usage |
|---|---|---|
| `--ink` | `#e8e4dc` | Primary text |
| `--ink-muted` | `#9a9488` | Secondary text |
| `--ink-dim` | `#5c574f` | Decorative / least important text |
| `--surface` | `#0f0e0c` | Page background |
| `--surface-1/2/3` | escalating lightness | Card backgrounds |
| `--gold` | `#c9a96e` | Accent — links on hover, badges, borders |
