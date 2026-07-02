# AGENTS.md

## Cursor Cloud specific instructions

This repo is a single Next.js 16 (App Router) + React 19 personal portfolio site (`ravindra-ssk`). Package manager is **npm**. There is no backend, database, auth, or environment variables — the only service is the Next.js dev server.

- **Run (dev):** `npm run dev` starts the app on `http://localhost:3000` (Turbopack). This is the only service needed to exercise the whole product end-to-end.
- **Typecheck:** `npx tsc --noEmit` (passes).
- **Build:** `npm run build`.
- **Lint is currently broken (pre-existing, not an environment issue):** `npm run lint` fails with `TypeError: Converting circular structure to JSON` from `@eslint/eslintrc` while resolving `next/core-web-vitals` via `FlatCompat` in `eslint.config.mjs`. This same failure occurs in GitHub Actions CI on `master`, so it is a repo/config bug, not a setup problem. Do not treat a green lint as a prerequisite unless you first fix the eslint flat-config compatibility.
- **Auto-generated files:** Running `next dev`/`next build` rewrites `tsconfig.json` (`jsx` → `react-jsx`, adds `.next/dev/types`) and `next-env.d.ts`. Do not commit these churn changes — revert with `git checkout -- tsconfig.json next-env.d.ts`.
- **Page content is read from disk at runtime:** `lib/site-content.ts` reads raw HTML files (`index.html`, `about.html`, `portfolio.html`, `contact.html`, `explore.html`, `explore/*.html`) relative to `process.cwd()`. Keep these files at the repo root / `explore/` folder.
- **Contact page has no form:** `/contact` uses direct action links (email/social), not a submittable form.
