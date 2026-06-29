import type { Metadata } from "next";
import Script from "next/script";
import type { ReactNode } from "react";

import { SiteChrome } from "@/components/layout/site-chrome";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Ravindra | Research, Code & Creative Archive",
    template: "%s | Ravindra",
  },
  description:
    "Ravindra's personal digital space for AI research, machine learning projects, writing, photography, fitness, music, and creative notes.",
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
