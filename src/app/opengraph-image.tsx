import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Ahmed Elmersawy, AI Systems Engineer, Federal Working Group";
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
          background: "#ffffff",
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
            background: "#692d40",
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
              "radial-gradient(circle, rgba(105,45,64,0.08) 0%, transparent 70%)",
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
            color: "#692d40",
            fontFamily: "monospace",
          }}
        >
          AI Systems Engineer · Federal Working Group
        </div>

        {/* name */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 500,
            color: "#24211f",
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
            color: "#5c544d",
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
          {["B.S. ECE · Purdue University", "Multi-Objective LLM Optimization", "Efficient LLM Systems"].map(
            (tag) => (
              <div
                key={tag}
                style={{
                  display: "flex",
                  padding: "8px 18px",
                  borderRadius: 999,
                  border: "1.5px solid rgba(105,45,64,0.35)",
                  fontSize: 13,
                  color: "#692d40",
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
