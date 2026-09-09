import { ImageResponse } from "next/og";
import { siteConfig } from "@/content/site";

export const alt = `${siteConfig.name}: ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0B0D0E",
          padding: "72px",
          color: "#F4F0E8",
          fontFamily: "Helvetica, Arial, sans-serif",
        }}
      >
        <svg width="72" height="72" viewBox="0 0 160 160" fill="#F4F0E8">
          <g transform="translate(32 22)">
            <path d="M0 56 68 0 56 42 0 108Z" />
            <path d="M32 76 72 44 96 116Z" />
          </g>
        </svg>
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div style={{ fontSize: 30, letterSpacing: 6, color: "#FF5A36" }}>
            SILVERFOX
          </div>
          <div style={{ fontSize: 56, fontWeight: 600, lineHeight: 1.05, maxWidth: 980 }}>
            {siteConfig.tagline}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
