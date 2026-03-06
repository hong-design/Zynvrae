import { ImageResponse } from "next/og";

export const runtime = "edge";
export const contentType = "image/png";
export const size = {
  width: 512,
  height: 512
};

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(circle at 30% 20%, rgba(92,225,230,0.3), transparent 34%), linear-gradient(180deg, #111111 0%, #0A0A0A 100%)",
          color: "#F5F5F5"
        }}
      >
        <div
          style={{
            display: "flex",
            width: "78%",
            height: "78%",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "120px",
            border: "1px solid rgba(255,255,255,0.12)",
            boxShadow: "0 0 0 1px rgba(92,225,230,0.16) inset"
          }}
        >
          <div style={{ fontSize: 184, fontWeight: 700, letterSpacing: "-0.08em" }}>Z</div>
        </div>
      </div>
    ),
    size
  );
}
