export const DEFAULT_SITE_URL = "https://ravindra-ssk.vercel.app";

/** Legacy Vercel project hostname — redirects to the canonical deployment URL. */
export const LEGACY_VERCEL_HOSTS = ["ravindra-ssk-site.vercel.app"] as const;

export function getSiteUrl() {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!configured) {
    return DEFAULT_SITE_URL;
  }

  return configured.replace(/\/$/, "");
}

export function getSiteHostname() {
  return new URL(getSiteUrl()).hostname;
}

export function getSiteHostnameLabel() {
  return getSiteHostname().replace(/^www\./, "");
}
