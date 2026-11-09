import { ImageResponse } from "next/og"

export const alt = "Naman Mathpal, Full-Stack Developer"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#0b0b0d",
          color: "#fafafa",
        }}
      >
        <div
          style={{
            width: 120,
            height: 120,
            borderRadius: 28,
            background: "linear-gradient(135deg, #01875f, #2f3d52)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 52,
            fontWeight: 700,
            marginBottom: 40,
          }}
        >
          NM
        </div>
        <div style={{ fontSize: 76, fontWeight: 700 }}>Naman Mathpal</div>
        <div style={{ fontSize: 40, color: "#34d399", marginTop: 12 }}>Full-Stack Developer</div>
        <div style={{ fontSize: 28, color: "#a1a1aa", marginTop: 32 }}>
          React · Next.js · Laravel · Node.js · hinglish-profanity on npm &amp; Maven Central
        </div>
      </div>
    ),
    size,
  )
}
