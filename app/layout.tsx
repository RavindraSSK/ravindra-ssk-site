import type { Metadata } from "next";
import type { ReactNode } from "react";

import { SiteChrome } from "@/components/layout/site-chrome";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Ravindra | AI Researcher & Machine Learning Engineer",
    template: "%s | Ravindra",
  },
  description:
    "Ravindra is an AI researcher and machine learning engineer building practical systems across machine learning, deep learning, explainability, and applied AI.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
