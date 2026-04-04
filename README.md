[![Site](https://img.shields.io/badge/ivangarzab.com-visit-c9a96e?style=flat)](https://ivangarzab.com)
[![GitHub](https://img.shields.io/badge/GitHub-ivangarzab-181717?logo=github)](https://github.com/ivangarzab)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-ivangarzab-0A66C2?logo=linkedin)](https://linkedin.com/in/ivangarzab)
[![Medium](https://img.shields.io/badge/Medium-ivangarzab-000000?logo=medium&logoColor=white)](https://medium.ivangarzab.com)
[![Substack](https://img.shields.io/badge/Substack-ivangarzab-FF6719?logo=substack&logoColor=white)](https://substack.com/@ivangarzab)

<h1>
  <img src="public/logo.svg" width="64" height="64" alt="logo" valign="middle" />
  ivangarzab.com
</h1>

<img src="public/title-line.png" alt="Iván Garza Bermea — Senior Software Engineer & M.A. Philosophy" width="100%" />

## Stack

Built with **Claude**: Vite + React + TypeScript. Deployed on Vercel.

- **React** — component-per-section architecture
- **TypeScript** — shared types in `src/types.ts`
- **Vite** — dev server and build
- **Formspree** — contact form submissions
- **Vercel** — hosting and CI/CD

## Project structure

```
src/
  components/       # One file per section
    Nav.tsx
    Hero.tsx
    About.tsx
    Experience.tsx
    Projects.tsx
    Writing.tsx
    Contact.tsx
    Footer.tsx
  App.tsx           # Fetches all data, composes layout
  types.ts          # Shared interfaces
  index.css         # All styles (single file, no CSS modules)

public/
  data/             # Content as JSON — edit here, no code changes needed
    experience.json
    projects.json
    writing.json
    quotes.json
  images/           # Project card icons
  icons.svg         # SVG sprite (social/UI icons)
  logo.svg          # Browser tab favicon
```

## Development

```bash
npm install
npm run dev       # localhost:5173
npm run build     # type-check + production build
npm run preview   # preview production build locally
npm run lint      # ESLint
```

## Updating content

All content lives in `public/data/`. No code changes required:

| File | What to edit |
|---|---|
| `experience.json` | Work history — add `"url"` to linkify a company name |
| `projects.json` | Projects — `"icon"` points to a file in `public/images/` |
| `writing.json` | Published articles |
| `quotes.json` | Footer quotes — one is picked at random on each load |
