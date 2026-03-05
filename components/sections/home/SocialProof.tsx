import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";

const proofItems = [
  {
    title: "System Reliability",
    value: "99.95%",
    note: "核心流程可用性目標"
  },
  {
    title: "Release Rhythm",
    value: "每週",
    note: "固定迭代與回顧節奏"
  },
  {
    title: "Operational Loop",
    value: "End-to-end",
    note: "從訊號到決策的完整閉環"
  }
];

export function SocialProof() {
  return (
    <section className="section-space section-rule py-12">
      <Container>
        <div className="grid gap-4 md:grid-cols-3">
          {proofItems.map((item) => (
            <Card key={item.title} className="p-4 sm:p-5">
              <p className="text-xs uppercase tracking-[0.12em] text-muted">{item.title}</p>
              <p className="mt-2 text-2xl font-semibold tracking-tight text-text sm:text-3xl">{item.value}</p>
              <p className="mt-2 text-sm text-muted">{item.note}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
