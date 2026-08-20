# AGENTS.md

## Cursor Cloud specific instructions

This repo is a single Next.js 16 (App Router) + React 19 personal portfolio site (`ravindra-ssk`). Package manager is **npm**. There is no backend, database, auth, or environment variables — the only service is the Next.js dev server.

- **Run (dev):** `npm run dev` starts the app on `http://localhost:3000` (Turbopack). This is the only service needed to exercise the whole product end-to-end.
- **Typecheck:** `npx tsc --noEmit` (passes).
- **Build:** `npm run build`.
- **Lint:** `npm run lint` passes.
- **Auto-generated files:** Running `next dev`/`next build` rewrites `tsconfig.json` (`jsx` → `react-jsx`, adds `.next/dev/types`) and `next-env.d.ts`. Do not commit these churn changes — revert with `git checkout -- tsconfig.json next-env.d.ts`.
- **Page content is read from disk at runtime:** `lib/site-content.ts` reads raw HTML files (`index.html`, `about.html`, `portfolio.html`, `contact.html`, `explore.html`, `explore/*.html`, `ssk-ai/tech-content/*.html`) relative to `process.cwd()`. Keep these files at the repo root / `explore/` / `ssk-ai/tech-content/` folders.
- **SSK AI Hub** (`/ssk-ai`) has two desks: **Tech Content** (`/ssk-ai/tech-content`, long-form, static HTML bodies + `lib/ssk-ai/tech-content.ts`) and **Tech News** (`/ssk-ai/tech-news`, weekly/monthly editions authored as `SskAiIssue` objects). The publishing cadence and how to add an edition are documented in `lib/ssk-ai/EDITIONS.md`. URLs that moved out of `/explore` are 301-redirected in `next.config.js` — update both lists when a slug changes.
- **Contact page has no form:** `/contact` uses direct action links (email/social), not a submittable form.
