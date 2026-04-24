# Deploying to Vercel

The site is a Vite-built static SPA. Vercel detects it automatically.

## One-time setup

1. Install the Vercel CLI if you don't have it.
   ```bash
   npm i -g vercel
   ```
2. From the `portfolio/` folder, link the project:
   ```bash
   cd portfolio
   vercel link
   ```
   Pick "Create new project" if this is the first deploy, or link to the
   existing `nuno-viegas-portfolio` project on subsequent runs.

## Deploy

```bash
cd portfolio
npm install            # first run only
npm run build          # produces dist/
vercel --prod          # deploys dist/ to production
```

Vercel reads `vercel.json` and applies:

- A **catch-all rewrite** so deep-links like `/taskize` resolve to
  `index.html` and React Router takes over (without this, refreshing on
  a case-study URL returns 404).
- **Long cache headers** on `/assets/*` (Vite fingerprints filenames so
  this is safe).

## Domain

In the Vercel dashboard for the project, add the custom domain
(`nunoviegas.com` or similar) and follow the DNS instructions.
SSL is automatic.

## Updating content

- **Edit a case study** → `src/data/projects.jsx`, find the slug, edit
  the entry. Run `vercel --prod` to redeploy.
- **Edit homepage copy / metrics** → `src/data/home.jsx`.
- **Edit visual styles** → `src/styles/base.css` (everything) or
  `src/styles/project.css` (case-study pages only).
- **Add a case study** → add an entry to `PROJECTS` in
  `src/data/projects.jsx` (use a new slug), then add a row to `WORKS` in
  `src/data/home.jsx` referencing the same slug.

## Verifying a build before pushing

```bash
npm run build
npm run preview     # opens http://localhost:4173
```

Click around — home, every case study, the Tweaks panel — before
running `vercel --prod`.
