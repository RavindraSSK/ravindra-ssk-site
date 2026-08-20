import type { Metadata } from "next";

import { JsonLd } from "@/components/json-ld";
import { TechNewsDesk } from "@/components/ssk-ai/news-desk";
import {
  buildSectionMetadata,
  buildTechNewsJsonLd,
  getAllIssues,
  getCurrentMonthPlan,
  TECH_NEWS,
} from "@/lib/ssk-ai";

export const metadata: Metadata = buildSectionMetadata(TECH_NEWS);

export default function TechNewsPage() {
  return (
    <>
      <JsonLd data={buildTechNewsJsonLd()} />
      <TechNewsDesk issues={getAllIssues()} plan={getCurrentMonthPlan()} />
    </>
  );
}
