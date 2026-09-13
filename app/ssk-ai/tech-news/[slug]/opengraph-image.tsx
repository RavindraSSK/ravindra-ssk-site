import { readFile } from "node:fs/promises";
import path from "node:path";

import { ImageResponse } from "next/og";
import { notFound } from "next/navigation";

import { getAllIssues, getIssueBySlug, isEditorialImageAvailable } from "@/lib/ssk-ai";

export const alt = "SSK AI issue";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Rendered at build time for every edition, like the edition pages themselves. */
export function generateStaticParams() {
  return getAllIssues().map((issue) => ({ slug: issue.slug }));
}

export default async function SskAiIssueOpenGraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const issue = getIssueBySlug(slug);
  if (!issue) notFound();

  // An edition with its own share card — a padded, uncropped derivative of its
  // cover at exactly this route's size — serves that file as-is. Editions
  // without one get the generated text card below.
  const social = issue.socialImage;
  if (social && isEditorialImageAvailable(social.src)) {
    const file = await readFile(path.join(process.cwd(), "public", social.src.replace(/^\//, "")));
    const ext = path.extname(social.src).toLowerCase();
    const mime =
      ext === ".webp" ? "image/webp" : ext === ".jpg" || ext === ".jpeg" ? "image/jpeg" : "image/png";
    return new Response(new Uint8Array(file), { headers: { "Content-Type": mime } });
  }

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: "56px 64px",
          background: "linear-gradient(180deg, #ffffff 0%, #f4f7fc 100%)",
          color: "#0f172a",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: 4, textTransform: "uppercase", color: "#1b2d5f" }}>
            {issue.poster.brand}
          </div>
          <div style={{ fontSize: 22, color: "#52627a" }}>{issue.dateLabel}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 14, maxWidth: 900 }}>
          <div style={{ fontSize: 48, fontWeight: 800, letterSpacing: -1.8, lineHeight: 1.08 }}>
            {issue.poster.title}
          </div>
          <div style={{ fontSize: 24, color: "#52627a", lineHeight: 1.35 }}>{issue.theme}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 22 }}>
          {issue.poster.headlines.map((headline, index) => (
            <div key={headline} style={{ display: "flex", gap: 12, color: "#1b2d5f" }}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <span>{headline}</span>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
