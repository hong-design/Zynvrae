import Link from "next/link";
import { Accordion } from "@/components/ui/Accordion";
import { buttonVariants } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { principles } from "@/lib/principles";

export function OperatingMindset() {
  return (
    <section className="section-space section-rule">
      <Container>
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.12em] text-muted">Operating mindset</p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-text sm:text-4xl">
              原則不是標語，而是可執行的操作系統。
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
              我們用固定原則保證判斷一致，再用量化指標驗證決策是否有效。
            </p>
            <Link
              href="/principles"
              className={buttonVariants({ variant: "secondary", className: "mt-6" })}
            >
              查看完整 Principles
            </Link>
          </div>

          <div className="lg:col-span-7">
            <Accordion
              items={principles.map((principle) => ({
                id: principle.id,
                title: principle.title,
                content: (
                  <div className="space-y-3">
                    <p className="text-sm text-muted-strong">{principle.oneLiner}</p>
                    <div>
                      <p className="text-xs uppercase tracking-[0.1em] text-muted">具體做法</p>
                      <ul className="mt-1 list-disc space-y-1 pl-5 text-sm text-muted">
                        {principle.execution.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.1em] text-muted">如何衡量</p>
                      <p className="mt-1 text-sm text-muted">
                        {principle.measurement.join(" / ")}
                      </p>
                    </div>
                  </div>
                )
              }))}
              defaultOpenId={principles[0]?.id}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
