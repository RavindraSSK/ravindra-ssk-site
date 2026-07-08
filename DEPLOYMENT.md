# Deployment Guide

## Production URL

**Canonical live site:** [https://ravindra-ssk.vercel.app](https://ravindra-ssk.vercel.app)

The legacy hostname `ravindra-ssk-site.vercel.app` redirects to the canonical URL above.

## One-time Vercel setup (required)

GitHub deploys to the **ravindra-ssk-site** Vercel project. To serve the updated site at **ravindra-ssk.vercel.app**:

1. Open [Vercel Dashboard](https://vercel.com/dashboard) → **ravindra-ssk-site** project.
2. Go to **Settings → Domains**.
3. Click **Add** and enter `ravindra-ssk.vercel.app`.
4. If Vercel says the domain is already in use, open the older **ravindra-ssk** project → **Settings → Domains** → remove `ravindra-ssk.vercel.app` from that project, then add it to **ravindra-ssk-site**.
5. Go to **Settings → Environment Variables** and set:
   - `NEXT_PUBLIC_SITE_URL` = `https://ravindra-ssk.vercel.app` (Production + Preview)
6. **Deployments** → **Redeploy** the latest production deployment.

After this, every GitHub push updates **ravindra-ssk.vercel.app**, and **ravindra-ssk-site.vercel.app** redirects there automatically.

## Git → Vercel

1. Push changes to `master` on GitHub.
2. Vercel auto-deploys from the connected repository.
3. Preview deployments are created for pull requests.

### If the live site does not update

1. Open [Vercel Dashboard](https://vercel.com/dashboard) → **ravindra-ssk-site** → **Deployments**.
2. Confirm the latest deployment matches the latest `master` commit.
3. If not, click **Redeploy** on the latest `master` deployment.
4. Confirm `ravindra-ssk.vercel.app` is listed under **Settings → Domains** for this project.

### GitHub Actions deploy (optional)

If Vercel Git hooks are unreliable, add these repository secrets. The workflow in `.github/workflows/deploy.yml` deploys on every `master` push and assigns `ravindra-ssk.vercel.app`:

| Secret | Where to find it |
|---|---|
| `VERCEL_TOKEN` | Vercel → Account Settings → Tokens |
| `VERCEL_ORG_ID` | Vercel team/user ID (Settings → General) |
| `VERCEL_PROJECT_ID` | **ravindra-ssk-site** project → Settings → General |

Use the **ravindra-ssk-site** project ID (the Git-connected project), not the old standalone ravindra-ssk project.

## Custom domain

### 1. Add domain in Vercel

1. Open [Vercel Dashboard](https://vercel.com/dashboard) → **ravindra-ssk-site** → **Settings** → **Domains**.
2. Add your domain (for example `ravindrassk.com` and `www.ravindrassk.com`).
3. Configure DNS at your registrar using the records Vercel provides.

### 2. Set environment variable

| Variable | Value | Environments |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://ravindra-ssk.vercel.app` (or your custom domain) | Production, Preview |

### 3. Redeploy

Trigger a redeploy after saving environment variables so the new URL is picked up at build time.

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
