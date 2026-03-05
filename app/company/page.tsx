import type { Metadata } from "next";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { PageHero } from "@/components/site/PageHero";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "公司資訊",
  description: "Zynvrae 以團隊形式運作，專注平台型數位平台開發，並規劃正式法人與組織結構。",
  alternates: {
    canonical: "/company"
  }
};

export default function CompanyPage() {
  return (
    <>
      <Container>
        <PageHero
          kicker="COMPANY POSITIONING"
          title="我們是平台型產品開發者，也是平台營運導向的數位事業體"
          description="Zynvrae 專注打造可實際上線、可長期營運的數位平台，重視平台結構設計、角色分工與長期成長性。"
        />
      </Container>

      <section className="section-space section-line">
        <Container>
          <Reveal>
            <header>
              <h2 className="section-title">合作立場</h2>
              <p className="mt-2 text-sm uppercase tracking-[0.12em] text-muted">Collaboration Position</p>
            </header>
            <p className="body-text mt-8 max-w-4xl text-muted">
              我們歡迎策略性合作與共同開發，尤其是能共同打造長期產品或平台的夥伴。合作上重視清楚的角色分工、權責結構與長期目標一致性。
            </p>
          </Reveal>

          <Stagger className="mt-8 grid gap-8 md:grid-cols-2">
            <StaggerItem>
              <Card>
                <h3 className="sub-title">優先合作類型</h3>
                <ul className="mt-6 list-disc space-y-2 pl-5 text-muted">
                  <li>策略合作</li>
                  <li>產品共同開發</li>
                  <li>長期平台夥伴</li>
                </ul>
              </Card>
            </StaggerItem>
            <StaggerItem>
              <Card>
                <h3 className="sub-title">非主要合作類型</h3>
                <ul className="mt-6 list-disc space-y-2 pl-5 text-muted">
                  <li>單次外包</li>
                  <li>短期專案委託</li>
                </ul>
              </Card>
            </StaggerItem>
          </Stagger>
        </Container>
      </section>

      <section className="section-space section-line">
        <Container>
          <Reveal>
            <header>
              <h2 className="section-title">法律與組織狀態</h2>
              <p className="mt-2 text-sm uppercase tracking-[0.12em] text-muted">Legal & Organization</p>
            </header>
            <p className="body-text mt-8 max-w-4xl text-muted">
              Zynvrae 目前以團隊形式運作，正在規劃正式法人與組織結構。相關法律與營運架構將隨事業發展逐步完善。
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="section-space section-line">
        <Container>
          <Reveal>
            <header>
              <h2 className="section-title">營運關注重點</h2>
              <p className="mt-2 text-sm uppercase tracking-[0.12em] text-muted">Operational Focus</p>
            </header>
            <ul className="body-text mt-8 list-disc space-y-2 pl-5 text-muted">
              <li>長期營運能力</li>
              <li>平台結構與可擴展性</li>
              <li>角色分工與權限治理</li>
              <li>可持續成長的產品設計</li>
            </ul>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
