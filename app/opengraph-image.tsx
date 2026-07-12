import { ImageResponse } from "next/og";

import { getSiteHostnameLabel } from "@/lib/site-url";

export const alt = "Ravindra | AI Researcher & Machine Learning Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  const siteLabel = getSiteHostnameLabel();

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: "72px 80px",
          background: "linear-gradient(145deg, #091121 0%, #102d72 48%, #1B2D5F 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
          }}
        >
          <svg viewBox="0 0 32 32" fill="none" width="72" height="72">
            <rect width="32" height="32" rx="9" fill="rgba(255, 255, 255, 0.12)" />
            <path
              d="M10.5 24V9h7a4.5 4.5 0 0 1 0 9h-7"
              stroke="#FFFFFF"
              strokeWidth="2.1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M15.5 18l6 6" stroke="#93B4F5" strokeWidth="2.1" strokeLinecap="round" />
            <circle cx="10.5" cy="9" r="1.7" fill="#93B4F5" />
            <circle cx="22" cy="13.5" r="1.7" fill="#93B4F5" />
            <circle cx="10.5" cy="24" r="1.7" fill="#FFFFFF" />
            <circle cx="21.5" cy="24" r="2.3" fill="#93B4F5" stroke="#FFFFFF" strokeWidth="1" />
          </svg>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <div style={{ fontSize: "34px", fontWeight: 800 }}>Ravindra</div>
            <div style={{ fontSize: "22px", color: "#93B4F5" }}>
              Researcher | Engineer | Creator
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "18px", maxWidth: "880px" }}>
          <div
            style={{
              fontSize: "58px",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
            }}
          >
            Research, code, and a personal creative archive
          </div>
          <div style={{ fontSize: "28px", lineHeight: 1.45, color: "rgba(219, 234, 254, 0.92)" }}>
            AI research, GeoAI, computer vision, writing, photography, fitness, and music.
          </div>
        </div>

        <div style={{ display: "flex", gap: "14px", fontSize: "20px", color: "#dbeafe" }}>
          <span>{siteLabel}</span>
          <span>St. Louis, MO</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
