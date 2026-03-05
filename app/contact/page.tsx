import type { Metadata } from "next";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { PageHero } from "@/components/site/PageHero";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "聯絡合作",
  description: "Zynvrae 聯絡入口：策略合作、產品合作與長期合作洽談。",
  alternates: {
    canonical: "/contact"
  }
};

export default function ContactPage() {
  return (
    <>
      <Container>
        <PageHero
          kicker="CONTACT"
          title="聯絡定位：策略合作、產品合作、長期合作洽談"
          description="若你希望共同打造長期產品或平台，歡迎提出合作目標與背景，我們會以可執行的合作方式回覆。"
        />
      </Container>

      <section className="section-space section-line">
        <Container>
          <Reveal>
            <header>
              <h2 className="section-title">主要合作方向</h2>
              <p className="mt-2 text-sm uppercase tracking-[0.12em] text-muted">Cooperation Focus</p>
            </header>
            <ul className="body-text mt-8 list-disc space-y-2 pl-5 text-muted">
              <li>策略合作</li>
              <li>產品合作</li>
              <li>長期合作洽談</li>
            </ul>
          </Reveal>
        </Container>
      </section>

      <section className="section-space section-line">
        <Container>
          <Reveal>
            <header>
              <h2 className="section-title">聯絡方式</h2>
              <p className="mt-2 text-sm uppercase tracking-[0.12em] text-muted">Channels</p>
            </header>
          </Reveal>

          <Stagger className="mt-8 grid gap-8 md:grid-cols-2">
            <StaggerItem>
              <Card>
                <h3 className="sub-title">Email</h3>
                <p className="body-text mt-6 text-muted">適合正式合作提案與需求說明。</p>
                <p className="mt-5 text-base font-medium text-text">
                  <a href="mailto:zynvrae@gmail.com" className="transition hover:opacity-70">
                    zynvrae@gmail.com
                  </a>
                </p>
              </Card>
            </StaggerItem>
            <StaggerItem>
              <Card>
                <h3 className="sub-title">線上入口</h3>
                <p className="body-text mt-6 text-muted">適合初步交流與快速確認方向。</p>
                <p className="mt-5 text-base font-medium text-text">
                  <a href="mailto:zynvrae@gmail.com" className="transition hover:opacity-70">
                    寄送 Email
                  </a>
                </p>
              </Card>
            </StaggerItem>
          </Stagger>
        </Container>
      </section>

      <section className="section-space section-line">
        <Container>
          <Reveal>
            <header>
              <h2 className="section-title">來信建議內容</h2>
              <p className="mt-2 text-sm uppercase tracking-[0.12em] text-muted">Brief Format</p>
            </header>
            <ul className="body-text mt-8 list-disc space-y-2 pl-5 text-muted">
              <li>你想解決的核心問題與目標。</li>
              <li>目前產品或平台所處階段。</li>
              <li>期望合作型態與時間範圍。</li>
              <li>是否偏向長期共同開發。</li>
            </ul>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
