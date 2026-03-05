import type { Metadata } from "next";
import { UpdateCard } from "@/components/updates/UpdateCard";
import { Container } from "@/components/ui/Container";
import { getAllUpdates } from "@/lib/updates";

export const metadata: Metadata = {
  title: "Updates",
  description: "Zynvrae 的產品、工程與營運更新。"
};

export default function UpdatesPage() {
  const posts = getAllUpdates();

  return (
    <section className="section-space pt-12 sm:pt-16">
      <Container>
        <header className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.12em] text-muted">Updates</p>
          <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-text sm:text-6xl">
            產品更新
          </h1>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            這裡記錄我們每一輪產品決策、工程演進與營運節奏。
          </p>
        </header>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {posts.map((post) => (
            <UpdateCard key={post.slug} post={post} />
          ))}
        </div>
      </Container>
    </section>
  );
}
