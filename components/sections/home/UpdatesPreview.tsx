import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { formatDate } from "@/lib/utils";
import { getAllUpdates } from "@/lib/updates";

export function UpdatesPreview() {
  const updates = getAllUpdates().slice(0, 3);

  return (
    <section className="section-space section-rule">
      <Container>
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.12em] text-muted">Updates</p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-text sm:text-4xl">
              最新產品與營運更新
            </h2>
          </div>
          <Link
            href="/updates"
            className="text-sm font-medium text-accent transition hover:text-accent-strong"
          >
            查看全部文章
          </Link>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {updates.map((post) => (
            <Card key={post.slug} className="flex h-full flex-col">
              <p className="text-xs uppercase tracking-[0.1em] text-muted">
                {post.category} · {formatDate(post.publishedAt)} · {post.readTime}
              </p>
              <h3 className="mt-3 text-xl font-semibold leading-tight text-text">{post.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{post.summary}</p>
              <Link
                href={`/updates/${post.slug}`}
                className="mt-6 inline-flex items-center text-sm font-medium text-accent transition hover:text-accent-strong"
              >
                閱讀全文
              </Link>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
