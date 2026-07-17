import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { getSiteHostnameLabel } from "@/lib/site-url";

export const alt = "Ravindra SSK | ML & AI Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const siteLabel = getSiteHostnameLabel();
  const markData = await readFile(join(process.cwd(), "public/images/brand/ravindra-ssk-mark.png"));
  const markSrc = `data:image/png;base64,${markData.toString("base64")}`;

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
          <img src={markSrc} width={84} height={84} alt="" />
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <div style={{ fontSize: "34px", fontWeight: 800, letterSpacing: "-0.02em" }}>Ravindra SSK</div>
            <div style={{ fontSize: "22px", color: "#93B4F5" }}>
              ML & AI Engineer
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
            I build and evaluate production ML & AI systems
          </div>
          <div style={{ fontSize: "28px", lineHeight: 1.45, color: "rgba(219, 234, 254, 0.92)" }}>
            LLM evaluation, computer vision, GeoAI, healthcare AI, and applied research.
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
