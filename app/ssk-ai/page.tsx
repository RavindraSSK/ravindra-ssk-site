import type { Metadata } from "next";

import { JsonLd } from "@/components/json-ld";
import { SskAiLanding } from "@/components/ssk-ai/landing";
import { buildSskAiLandingJsonLd, buildSskAiLandingMetadata, getAllIssues } from "@/lib/ssk-ai";

export const metadata: Metadata = buildSskAiLandingMetadata();

export default function SskAiPage() {
  return (
    <>
      <JsonLd data={buildSskAiLandingJsonLd()} />
      <SskAiLanding issues={getAllIssues()} />
    </>
  );
}
