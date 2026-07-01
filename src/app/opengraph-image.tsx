import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Ahmed Elmersawy, AI Systems & Code Optimization Research, Purdue University";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          width: "100%",
          height: "100%",
          background: "#faf7f0",
          padding: "64px 72px",
          fontFamily: "Georgia, serif",
          position: "relative",
        }}
      >
        {/* top accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 6,
            background: "#b45309",
          }}
        />

        {/* background texture suggestion - subtle radial */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: 520,
            height: 520,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(180,83,9,0.08) 0%, transparent 70%)",
          }}
        />

        {/* eyebrow */}
        <div
          style={{
            display: "flex",
            marginBottom: 20,
            fontSize: 14,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#b45309",
            fontFamily: "monospace",
          }}
        >
          Purdue University · Duality Lab
        </div>

        {/* name */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 500,
            color: "#1f2430",
            lineHeight: 1.05,
            marginBottom: 20,
          }}
        >
          Ahmed Elmersawy
        </div>

        {/* descriptor */}
        <div
          style={{
            fontSize: 26,
            color: "#5b5f6b",
            lineHeight: 1.45,
            maxWidth: 760,
            marginBottom: 48,
          }}
        >
          AI Systems & Code Optimization Research
        </div>

        {/* bottom row - degree + research threads */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
          }}
        >
          {["B.S. ECE · Expected 2026", "Multi-Objective LLM Optimization", "Neural Network Training Dynamics"].map(
            (tag) => (
              <div
                key={tag}
                style={{
                  display: "flex",
                  padding: "8px 18px",
                  borderRadius: 999,
                  border: "1.5px solid rgba(180,83,9,0.35)",
                  fontSize: 13,
                  color: "#b45309",
                  fontFamily: "monospace",
                  letterSpacing: "0.04em",
                }}
              >
                {tag}
              </div>
            ),
          )}
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
