import type { Metadata } from "next";
import { Capabilities } from "@/components/sections/home/Capabilities";
import { FinalCta } from "@/components/sections/home/FinalCta";
import { Hero } from "@/components/sections/home/Hero";
import { OperatingMindset } from "@/components/sections/home/OperatingMindset";
import { ProductsTeaser } from "@/components/sections/home/ProductsTeaser";
import { SocialProof } from "@/components/sections/home/SocialProof";
import { UpdatesPreview } from "@/components/sections/home/UpdatesPreview";

export const metadata: Metadata = {
  title: "平台型產品開發與營運",
  description:
    "Zynvrae 是平台型數位產品公司，專注平台產品開發、營運迭代與可靠性建設。"
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <SocialProof />
      <Capabilities />
      <ProductsTeaser />
      <OperatingMindset />
      <UpdatesPreview />
      <FinalCta />
    </>
  );
}
