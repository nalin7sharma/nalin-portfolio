# Nalin Sharma AI/ML Portfolio

Modern, recruiter-focused portfolio website for **Nalin Sharma**, built with Next.js 15, TypeScript, Tailwind CSS, Framer Motion, ShadCN-style UI primitives, Lucide icons, and React Three Fiber.

## Highlights

- Dark-first premium AI portfolio design
- Animated hero with rotating AI/ML roles and a 3D neural particle sphere
- Resume-grounded content from Nalin Sharma's AI/ML resume
- Project filtering with animated transitions
- Research, certifications, education, memberships, and contact sections
- Scroll progress, page loader, custom cursor, theme toggle, SEO metadata, Open Graph, and JSON-LD
- Public resume download path wired to `public/resume/Nalin-Sharma-AI-ML.pdf`

## Tech Stack

- Next.js 15 App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- ShadCN-style reusable components
- Lucide React Icons
- React Three Fiber + Three.js
- Vercel-ready setup

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production

Create an optimized production build:

```bash
npm run build
npm run start
```

Because this project exports static files for cPanel, `npm run start` serves the generated `out` folder locally.

Optional checks:

```bash
npm run lint
npm run typecheck
```

## Deploy To Vercel

1. Push this project to GitHub.
2. Import the repository in [Vercel](https://vercel.com/new).
3. Use the default Next.js settings.
4. Deploy.

No custom environment variables are required for the current static portfolio.

## Deploy To cPanel

This project is configured for static export with `output: "export"` in `next.config.ts`.

Build the site:

```bash
npm install
npm run build:cpanel
```

Next.js will generate an `out` folder.

Upload to cPanel:

1. Open cPanel File Manager.
2. Go to `public_html`.
3. Upload the contents of the `out` folder, not the folder itself.
4. Make sure `index.html` is directly inside `public_html`.
5. If you use a custom domain, point it to the cPanel account and update `metadataBase` in `app/layout.tsx` if the final domain changes.

For subfolder hosting such as `example.com/portfolio`, add `basePath` and `assetPrefix` in `next.config.ts` before building.

## Content Updates

Most portfolio content lives in:

```text
lib/portfolio-data.ts
```

Update project links, certificate links, copy, stats, skills, and social profiles there.

## Assets

Current visual assets are editable placeholders under:

```text
public/assets
```

Replace them with optimized WebP/AVIF project screenshots or generated visuals when available. Keep the same aspect ratios to avoid layout shifts.

The resume download button points to:

```text
public/resume/Nalin-Sharma-AI-ML.pdf
```
