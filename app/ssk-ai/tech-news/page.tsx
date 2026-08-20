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
import { buildCalendarRange, defaultMonthIndex, defaultSelectedDate } from "@/lib/ssk-ai/calendar";

export const metadata: Metadata = buildSectionMetadata(TECH_NEWS);

export default function TechNewsPage() {
  const issues = getAllIssues();
  const months = buildCalendarRange(issues, TECH_NEWS.path);

  return (
    <>
      <JsonLd data={buildTechNewsJsonLd()} />
      <TechNewsDesk
        issues={issues}
        plan={getCurrentMonthPlan()}
        calendar={{
          months,
          initialIndex: defaultMonthIndex(months, issues),
          initialSelected: defaultSelectedDate(months),
        }}
      />
    </>
  );
}
