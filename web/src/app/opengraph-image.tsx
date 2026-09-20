import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${siteConfig.name} — ${siteConfig.role}`;

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px",
          background:
            "linear-gradient(140deg, #05080d 0%, #0a0f18 55%, #0e1522 100%)",
          fontFamily: "monospace",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            color: "#7dd3fc",
            fontSize: 34,
            letterSpacing: 2,
          }}
        >
          <span
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "#34d399",
              marginRight: 16,
            }}
          />
          OPEN TO REMOTE OPPORTUNITIES
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 92,
            fontWeight: 700,
            color: "#e8edf6",
            marginTop: 28,
            letterSpacing: -2,
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            display: "flex",
            color: "#38bdf8",
            fontSize: 40,
            marginTop: 16,
          }}
        >
          {siteConfig.role}
        </div>
        <div
          style={{
            display: "flex",
            color: "#9aa8c0",
            fontSize: 28,
            marginTop: 36,
          }}
        >
          Building practical digital products with Next.js · Python · FastAPI · AI/ML
        </div>
      </div>
    ),
    { ...size },
  );
}