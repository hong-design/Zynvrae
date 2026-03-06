import { createSocialImage } from "@/lib/og";

export const runtime = "edge";
export const alt = "Zynvrae | 平台型數位平台開發";
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

export default function TwitterImage() {
  return createSocialImage({
    title: "平台型數位平台開發",
    subtitle: "高對比、極簡、系統感。Zynvrae 官方網站。"
  });
}
