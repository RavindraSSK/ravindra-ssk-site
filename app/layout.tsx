import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import type { ReactNode } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { SiteChrome } from "@/components/layout/site-chrome";
import { pageMetadata } from "@/lib/content";
import { displayName, email, fullName, location, socialLinks } from "@/lib/recruiter-content";
import { getSiteUrl } from "@/lib/site-url";

import "./globals.css";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: pageMetadata.home.title,
    template: "%s | Ravindra SSK",
  },
  description: pageMetadata.home.description,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Ravindra SSK",
    title: pageMetadata.home.title,
    description: pageMetadata.home.description,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: pageMetadata.home.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageMetadata.home.title,
    description: pageMetadata.home.description,
    images: ["/opengraph-image"],
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
  const sameAs = socialLinks.filter((link) => link.href.startsWith("http")).map((link) => link.href);
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: fullName,
      alternateName: displayName,
      email: `mailto:${email}`,
      url: siteUrl,
      sameAs,
      address: {
        "@type": "PostalAddress",
        addressLocality: "St. Louis",
        addressRegion: "MO",
        addressCountry: "US",
      },
      jobTitle: "AI/ML Engineer and LLM Evaluation Specialist",
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Saint Louis University",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Ravindra SSK",
      url: siteUrl,
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      name: pageMetadata.home.title,
      description: pageMetadata.home.description,
      url: siteUrl,
      mainEntity: {
        "@type": "Person",
        name: fullName,
        address: location,
      },
    },
  ];

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          id="header-offset-init"
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.style.setProperty("--site-header-offset","120px");`,
          }}
        />
        <script
          id="theme-init"
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem("theme");var d=t?t==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;if(d){document.documentElement.setAttribute("data-theme","dark")}else{document.documentElement.removeAttribute("data-theme")}}catch(e){}`,
          }}
        />
        <script
          id="profile-json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <SiteChrome>{children}</SiteChrome>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
