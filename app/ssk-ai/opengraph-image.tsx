import { ImageResponse } from "next/og";

import { SSK_AI_HUB, getLatestIssue } from "@/lib/ssk-ai";

export const alt = `${SSK_AI_HUB.name} — ${SSK_AI_HUB.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** The 1200×630 frame fits about seven headline rows under the title block. */
const MAX_HEADLINES = 7;

export default async function SskAiOpenGraphImage() {
  const latest = getLatestIssue();
  // An edition can carry more stories than the card has room for; list the first
  // rows and say how many more it holds rather than overflowing the frame.
  const headlines = latest.poster.headlines.slice(0, MAX_HEADLINES);
  const remaining = latest.poster.headlines.length - headlines.length;

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
          <span>{SSK_AI_HUB.name}</span>
          <span>{latest.dateLabel}</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 860 }}>
          <div style={{ fontSize: 54, fontWeight: 800, letterSpacing: -2, lineHeight: 1.05 }}>{SSK_AI_HUB.tagline}</div>
          <div style={{ fontSize: 26, color: "#52627a", lineHeight: 1.35 }}>{latest.theme}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10, fontSize: 22, color: "#1b2d5f" }}>
          {headlines.map((headline, index) => (
            <div key={headline} style={{ display: "flex", gap: 12 }}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <span>{headline}</span>
            </div>
          ))}
          {remaining > 0 ? (
            <div style={{ display: "flex", gap: 12, color: "#52627a" }}>
              <span>+{remaining}</span>
              <span>more {remaining === 1 ? "story" : "stories"} in this edition</span>
            </div>
          ) : null}
        </div>
      </div>
    ),
    { ...size },
  );
}
