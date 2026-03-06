import { ImageResponse } from "next/og";

type SocialImageOptions = {
  eyebrow?: string;
  title: string;
  subtitle: string;
  size?: {
    width: number;
    height: number;
  };
};

export function createSocialImage({
  eyebrow = "ZYNVRAE",
  title,
  subtitle,
  size = {
    width: 1200,
    height: 630
  }
}: SocialImageOptions) {
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
            "radial-gradient(circle at 18% 0%, rgba(92,225,230,0.22), transparent 42%), radial-gradient(circle at 84% 8%, rgba(92,225,230,0.12), transparent 34%), linear-gradient(180deg, #111111 0%, #0A0A0A 100%)"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              width: "14px",
              height: "14px",
              borderRadius: "999px",
              background: "#5CE1E6"
            }}
          />
          <div style={{ fontSize: 20, letterSpacing: "0.24em", opacity: 0.88 }}>{eyebrow}</div>
        </div>

        <div style={{ maxWidth: "920px", display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, fontWeight: 600, lineHeight: 1.02, letterSpacing: "-0.04em" }}>
            {title}
          </div>
          <div style={{ marginTop: "18px", fontSize: 28, opacity: 0.8, lineHeight: 1.35 }}>
            {subtitle}
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, opacity: 0.7 }}>
          <div>https://zynvrae.com</div>
          <div>Platform Product Company</div>
        </div>
      </div>
    ),
    size
  );
}
