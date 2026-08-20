import type { Metadata } from "next";

import { JsonLd } from "@/components/json-ld";
import { SskAiHubLanding } from "@/components/ssk-ai/hub-landing";
import {
  buildSskAiLandingJsonLd,
  buildSskAiLandingMetadata,
  getAllIssues,
  getTechContentArticlesByDate,
} from "@/lib/ssk-ai";

export const metadata: Metadata = buildSskAiLandingMetadata();

export default function SskAiHubPage() {
  return (
    <>
      <JsonLd data={buildSskAiLandingJsonLd()} />
      <SskAiHubLanding issues={getAllIssues()} articles={getTechContentArticlesByDate()} />
    </>
  );
}
