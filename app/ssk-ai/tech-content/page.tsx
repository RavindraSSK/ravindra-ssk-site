import type { Metadata } from "next";

import { JsonLd } from "@/components/json-ld";
import { TechContentIndex } from "@/components/ssk-ai/tech-content-index";
import { buildSectionMetadata, buildTechContentJsonLd, getTechContentArticlesByDate, TECH_CONTENT } from "@/lib/ssk-ai";

export const metadata: Metadata = buildSectionMetadata(TECH_CONTENT);

export default function TechContentPage() {
  const articles = getTechContentArticlesByDate();

  return (
    <>
      <JsonLd data={buildTechContentJsonLd(articles)} />
      <TechContentIndex articles={articles} />
    </>
  );
}
