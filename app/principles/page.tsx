import type { Metadata } from "next";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { principles } from "@/lib/principles";

export const metadata: Metadata = {
  title: "Principles",
  description: "Zynvrae 的產品與營運原則：一句話、具體做法、可衡量指標。"
};

export default function PrinciplesPage() {
  return (
    <section className="section-space pt-12 sm:pt-16">
      <Container>
        <header className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.12em] text-muted">Manifesto</p>
          <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-text sm:text-6xl">
            Principles
          </h1>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            每條原則都必須同時具備三件事：一句話定義、可執行做法、可驗證指標。
          </p>
        </header>

        <div className="mt-10 space-y-4">
          {principles.map((principle) => (
            <Card key={principle.id} className="grid gap-5 lg:grid-cols-12 lg:gap-6">
              <div className="lg:col-span-4">
                <p className="text-xs uppercase tracking-[0.1em] text-muted">{principle.title}</p>
                <p className="mt-3 text-lg font-medium leading-snug text-text">{principle.oneLiner}</p>
              </div>

              <div className="lg:col-span-4">
                <p className="text-xs uppercase tracking-[0.1em] text-muted">具體做法</p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted">
                  {principle.execution.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-4">
                <p className="text-xs uppercase tracking-[0.1em] text-muted">我們如何衡量</p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted">
                  {principle.measurement.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
