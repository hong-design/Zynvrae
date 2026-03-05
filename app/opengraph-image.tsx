import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Zynvrae | 平台型數位平台開發";
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px",
          color: "#F5F5F5",
          background:
            "radial-gradient(circle at 20% 0%, rgba(92,225,230,0.24), transparent 42%), radial-gradient(circle at 80% 0%, rgba(92,225,230,0.12), transparent 38%), #0A0A0A"
        }}
      >
        <div style={{ fontSize: 22, letterSpacing: "0.2em", opacity: 0.9 }}>ZYNVRAE</div>

        <div style={{ maxWidth: "900px" }}>
          <div style={{ fontSize: 74, fontWeight: 600, lineHeight: 1.02 }}>平台型數位平台開發</div>
          <div style={{ marginTop: 14, fontSize: 30, opacity: 0.86 }}>
            Platform Product. Long-term Operation.
          </div>
        </div>

        <div style={{ fontSize: 24, opacity: 0.75 }}>High contrast, minimal interface, engineered clarity.</div>
      </div>
    ),
    size
  );
}
