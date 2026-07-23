import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7faff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Script
        id="header-offset-init"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          // Matches .site-header's actual rendered height per components.css (89px at <=560px where the
          // logo/padding shrink, 98px above that). SiteChrome's ResizeObserver corrects this after mount,
          // but seeding the real value here (instead of a flat guess) keeps that correction from being
          // visible as layout shift.
          __html: `(function(){var h=window.innerWidth<=560?89:98;document.documentElement.style.setProperty("--site-header-offset",h+"px");})();`,
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
        <a className="skip-link" href="#main-content">Skip to content</a>
        <JsonLd data={buildRootJsonLd()} />
        <SiteChrome>{children}</SiteChrome>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
