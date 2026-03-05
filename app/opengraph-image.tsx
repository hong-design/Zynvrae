import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Zynvrae | 平台型數位產品公司";
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
          color: "#ecf3ff",
          background:
            "radial-gradient(circle at 14% -2%, rgba(104, 185, 228, 0.25), transparent 34%), radial-gradient(circle at 86% 0%, rgba(104, 185, 228, 0.14), transparent 32%), #0a0d12"
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: "0.24em",
            opacity: 0.85
          }}
        >
          ZYNVRAE
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: "940px" }}>
          <div style={{ fontSize: 70, fontWeight: 700, lineHeight: 1.05 }}>
            平台型產品開發與營運
          </div>
          <div style={{ fontSize: 32, opacity: 0.88 }}>
            System-first. Ship fast. Measure reality.
          </div>
        </div>

        <div style={{ fontSize: 26, opacity: 0.78 }}>Build products. Operate systems. Compound iteration.</div>
      </div>
    ),
    size
  );
}
