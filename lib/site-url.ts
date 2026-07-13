export const DEFAULT_SITE_URL = "https://ravindrassk.com";

/** Deprecated hosts — redirected to the canonical domain by middleware. */
export const LEGACY_HOSTS = [
  "www.ravindrassk.com",
  "ravindra-ssk.vercel.app",
  "ravindra-ssk-site.vercel.app",
] as const;

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
