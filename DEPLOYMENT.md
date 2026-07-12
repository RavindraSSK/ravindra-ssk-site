# Deployment Guide

## Production URL

**Canonical live site:** [https://ravindrassk.com](https://ravindrassk.com)

GitHub pushes deploy to the **ravindra-ssk-site** Vercel project. `www.ravindrassk.com`, `ravindra-ssk.vercel.app`, and `ravindra-ssk-site.vercel.app` are legacy hosts that the middleware 308-redirects to the canonical domain (see `lib/site-url.ts`).

## Custom domain cutover (ravindrassk.com)

1. [Vercel Dashboard](https://vercel.com/dashboard) → open **ravindra-ssk-site** (Git-connected project).
2. **Settings → Domains → Add** → enter `ravindrassk.com`, then add `www.ravindrassk.com` (set it to redirect to the apex).
3. Configure DNS at your registrar with the records Vercel shows, then wait until both domains show **Valid Configuration** and the TLS certificate is issued.
4. **Settings → Environment Variables** → set `NEXT_PUBLIC_SITE_URL` = `https://ravindrassk.com` for Production (or delete the variable — the code now defaults to this URL). An old value pointing at a vercel.app host will override the new default, so do not leave a stale value in place.
5. Make sure `ravindra-ssk.vercel.app` is also attached to this project (move it from the old standalone **ravindra-ssk** project if needed) so old links redirect instead of serving a stale build.
6. **Deployments** → latest production → **Redeploy**.

## Git → Vercel

1. Push changes to `master` on GitHub.
2. Vercel auto-deploys from the connected repository.
3. Preview deployments are created for pull requests.

### If the live site does not update

1. Open [Vercel Dashboard](https://vercel.com/dashboard) → **ravindra-ssk-site** → **Deployments**.
2. Confirm the latest deployment matches the latest `master` commit.
3. If not, click **Redeploy** on the latest `master` deployment.
4. Confirm `ravindrassk.com` is listed under **Settings → Domains** for this project.

### GitHub Actions deploy (optional)

If Vercel Git hooks are unreliable, add these repository secrets. The workflow in `.github/workflows/deploy.yml` deploys on every `master` push:

| Secret | Where to find it |
|---|---|
| `VERCEL_TOKEN` | Vercel → Account Settings → Tokens |
| `VERCEL_ORG_ID` | Vercel team/user ID (Settings → General) |
| `VERCEL_PROJECT_ID` | **ravindra-ssk-site** project → Settings → General |

Use the **ravindra-ssk-site** project ID (the Git-connected project), not the old standalone ravindra-ssk project.

## Contact form email delivery

The contact form posts to `/api/contact` and sends mail through [Resend](https://resend.com).

### Required environment variables

| Variable | Description |
|---|---|
| `RESEND_API_KEY` | API key from Resend dashboard |
| `CONTACT_EMAIL` | Inbox that receives form submissions (defaults to `ravindrassk1304@gmail.com`) |
| `CONTACT_FROM_EMAIL` | Optional verified sender (defaults to Resend onboarding address for testing) |

### Setup steps

1. Create a free Resend account.
2. Add and verify your domain (recommended for production) or use the onboarding sender for testing.
3. Add the variables above in Vercel environment settings.
4. Redeploy and test the form at `/contact`.

If `RESEND_API_KEY` is not set, the form shows a friendly error with a **mailto** fallback link.

## Local development

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000
