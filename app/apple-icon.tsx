import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#F4F0E8",
        }}
      >
        <svg width="112" height="112" viewBox="0 0 160 160" fill="#22272B">
          <g transform="translate(32 22)">
            <path d="M0 56 68 0 56 42 0 108Z" />
            <path d="M32 76 72 44 96 116Z" />
          </g>
        </svg>
      </div>
    ),
    { ...size }
  );
}
