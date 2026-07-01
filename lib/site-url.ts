const DEFAULT_SITE_URL = "https://ravindra-ssk.vercel.app";

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
