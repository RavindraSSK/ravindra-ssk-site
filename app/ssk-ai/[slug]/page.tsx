import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/json-ld";
import { SskAiIssuePage } from "@/components/ssk-ai/issue-page";
import {
  buildSskAiArticleJsonLd,
  buildSskAiIssueMetadata,
  getAllIssues,
  getIssueBySlug,
} from "@/lib/ssk-ai";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllIssues().map((issue) => ({ slug: issue.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const issue = getIssueBySlug(slug);
  if (!issue) return {};
  return buildSskAiIssueMetadata(issue);
}

export default async function SskAiIssueRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const issue = getIssueBySlug(slug);
  if (!issue) notFound();

  return (
    <>
      <JsonLd data={buildSskAiArticleJsonLd(issue)} />
      <SskAiIssuePage issue={issue} />
    </>
  );
}
