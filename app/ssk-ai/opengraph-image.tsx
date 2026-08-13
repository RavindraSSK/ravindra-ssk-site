import { ImageResponse } from "next/og";

import { SSK_AI, getLatestIssue } from "@/lib/ssk-ai";

export const alt = `${SSK_AI.name} — ${SSK_AI.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function SskAiOpenGraphImage() {
  const latest = getLatestIssue();

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: "64px 72px",
          background: "linear-gradient(180deg, #f7faff 0%, #eef3fb 100%)",
          color: "#0f172a",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, fontWeight: 800, letterSpacing: 4, textTransform: "uppercase", color: "#1b2d5f" }}>
          <span>{SSK_AI.name}</span>
          <span>{latest.dateLabel}</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 860 }}>
          <div style={{ fontSize: 54, fontWeight: 800, letterSpacing: -2, lineHeight: 1.05 }}>{SSK_AI.tagline}</div>
          <div style={{ fontSize: 26, color: "#52627a", lineHeight: 1.35 }}>{latest.theme}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10, fontSize: 22, color: "#1b2d5f" }}>
          {latest.poster.headlines.map((headline, index) => (
            <div key={headline} style={{ display: "flex", gap: 12 }}>
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
