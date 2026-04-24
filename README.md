# Nuno Viegas — Portfolio (v0.2)

Vite + React + React Router build of the editorial portfolio. Deploys cleanly
to Vercel as a static site.

## Stack

- **Vite 5** — dev server + production bundle
- **React 18** — UI
- **React Router 6** — `/` (home) + `/:slug` (case studies)
- CSS variables for theming, OKLCH palette, no preprocessor

## Local development

```bash
cd portfolio
npm install
npm run dev
```

Then open the URL Vite prints (defaults to `http://localhost:5173`).

## Production build

```bash
npm run build      # outputs static site to dist/
npm run preview    # serves dist/ locally for a final check
```

## Project shape

```
portfolio/
├── index.html               # HTML shell, fonts, meta
├── vercel.json              # SPA fallback rewrite + asset cache headers
├── vite.config.js
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx             # Router wiring
    ├── pages/
    │   ├── Home.jsx         # Homepage assembly
    │   ├── Project.jsx      # /:slug — looks up PROJECTS[slug]
    │   └── NotFound.jsx
    ├── components/          # Nav, Hero, Highlights, Works, Testimonials, …
    │   ├── Tweaks.jsx       # Floating accent / serif / density / theme panel
    │   └── ProjectLayout.jsx# Case-study chrome (hero, overview, chapters …)
    ├── data/
    │   ├── home.jsx         # HIGHLIGHTS / BRANDS / WORKS / TESTIMONIALS
    │   ├── projects.jsx     # PROJECTS — every case study, keyed by slug
    │   └── theme.js         # Theme tokens + applyTheme(cfg)
    └── styles/
        ├── base.css         # Tokens, layout, components
        └── project.css      # Case-study page styles
```

## Routes

| Route        | Renders                       |
|--------------|-------------------------------|
| `/`          | Home (all sections)           |
| `/axa`       | AXA Digital case study        |
| `/santander` | Santander Portugal            |
| `/lloyds`    | Lloyd's Register              |
| `/taskize`   | Taskize / Euroclear           |
| `/mytr`      | My Thomson Reuters / Refinitiv|
| `/vodafone`  | Vodafone Business UK          |
| `/bt`        | British Telecom               |
| `/wasalt`    | Wasalt & Quara                |
| `/*`         | 404 NotFound                  |

Slugs are defined in `src/data/projects.jsx` and referenced from the
`WORKS` array in `src/data/home.jsx`. Adding a new case study =
adding one entry to `PROJECTS` plus one row in `WORKS`.

## Theme tweaks

The bottom-right "Tweaks" pill opens a panel for live changes to:

- **Accent** colour (5 presets)
- **Display serif** (Instrument / Fraunces / Cormorant)
- **Density** (cozy / normal / roomy padding scale)
- **Theme** (light / dark)

Settings persist to `localStorage` under `nuno-tweaks-v1`.
