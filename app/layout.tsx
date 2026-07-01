import type { Metadata } from "next";
import Script from "next/script";
import type { ReactNode } from "react";

import { SiteChrome } from "@/components/layout/site-chrome";
import { pageMetadata } from "@/lib/content";

import "./globals.css";

const siteUrl = "https://ravindra-ssk.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: pageMetadata.home.title,
    template: "%s | Ravindra",
  },
  description: pageMetadata.home.description,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Ravindra",
    title: pageMetadata.home.title,
    description: pageMetadata.home.description,
  },
  twitter: {
    card: "summary_large_image",
    title: pageMetadata.home.title,
    description: pageMetadata.home.description,
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Script
        id="theme-init"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `try{var t=localStorage.getItem("theme");var d=t?t==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;if(d){document.documentElement.setAttribute("data-theme","dark")}else{document.documentElement.removeAttribute("data-theme")}}catch(e){}`,
        }}
      />
      <body>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
