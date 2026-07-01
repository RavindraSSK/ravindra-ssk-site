# Deployment Guide

## Git → Vercel

1. Push changes to `master` on GitHub.
2. Vercel auto-deploys from the connected repository.
3. Preview deployments are created for pull requests.

## Custom domain

### 1. Add domain in Vercel

1. Open [Vercel Dashboard](https://vercel.com/dashboard) → your project → **Settings** → **Domains**.
2. Add your domain (for example `ravindrassk.com` and `www.ravindrassk.com`).
3. Configure DNS at your registrar using the records Vercel provides.

### 2. Set environment variable

In Vercel → **Settings** → **Environment Variables**, add:

| Variable | Value | Environments |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://yourdomain.com` | Production, Preview |

This updates SEO metadata (`metadataBase`, Open Graph) and enables automatic redirects from `ravindra-ssk.vercel.app` to your primary domain.

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
