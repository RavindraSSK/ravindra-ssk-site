export const DEFAULT_SITE_URL = "https://ravindra-ssk.vercel.app";

/** Optional legacy hosts to redirect once they are aliased to the canonical deployment. */
export const LEGACY_VERCEL_HOSTS = [] as const;

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
