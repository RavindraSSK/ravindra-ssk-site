import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import type { ReactNode } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { JsonLd } from "@/components/json-ld";
import { SiteChrome } from "@/components/layout/site-chrome";
import { buildRootJsonLd, pageMetadata } from "@/lib/content";
import { DEFAULT_SITE_URL } from "@/lib/site-url";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(DEFAULT_SITE_URL),
  alternates: { canonical: "/" },
  title: {
    default: pageMetadata.home.title,
    template: "%s | Ravindra SSK",
  },
  description: pageMetadata.home.description,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: DEFAULT_SITE_URL,
    siteName: "Ravindra SSK",
    title: pageMetadata.home.title,
    description: pageMetadata.home.description,
  },
  twitter: {
    card: "summary_large_image",
    title: pageMetadata.home.title,
    description: pageMetadata.home.description,
  },
  icons: {
    icon: [
      { url: "/branding/favicon-32-light.png", type: "image/png", sizes: "32x32", media: "(prefers-color-scheme: light)" },
      { url: "/branding/favicon-32-dark.png", type: "image/png", sizes: "32x32", media: "(prefers-color-scheme: dark)" },
      { url: "/branding/favicon-light.png", type: "image/png", sizes: "512x512", media: "(prefers-color-scheme: light)" },
      { url: "/branding/favicon-dark.png", type: "image/png", sizes: "512x512", media: "(prefers-color-scheme: dark)" },
    ],
    apple: [{ url: "/branding/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Script
        id="header-offset-init"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `document.documentElement.style.setProperty("--site-header-offset","120px");`,
        }}
      />
      <Script
        id="theme-init"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `try{var t=localStorage.getItem("theme");var d=t?t==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;if(d){document.documentElement.setAttribute("data-theme","dark")}else{document.documentElement.removeAttribute("data-theme")}}catch(e){}`,
        }}
      />
      <body>
        <JsonLd data={buildRootJsonLd()} />
        <SiteChrome>{children}</SiteChrome>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
