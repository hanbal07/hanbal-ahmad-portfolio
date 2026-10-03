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
          background: "linear-gradient(140deg, #f7f7f5 0%, #ffffff 55%, #f1f1ef 100%)",
          fontFamily: "monospace",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            color: "#3d4450",
            fontSize: 34,
            letterSpacing: 2,
          }}
        >
          <span
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "#047857",
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
            color: "#111318",
            marginTop: 28,
            letterSpacing: -2,
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            display: "flex",
            color: "#5b4acb",
            fontSize: 40,
            marginTop: 16,
          }}
        >
          {siteConfig.role}
        </div>
        <div
          style={{
            display: "flex",
            color: "#3d4450",
            fontSize: 28,
            marginTop: 36,
          }}
        >
          Full-stack web apps · Python backends & APIs · AI-powered software
        </div>
      </div>
    ),
    { ...size },
  );
}
