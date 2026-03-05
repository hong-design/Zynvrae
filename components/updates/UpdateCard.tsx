import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { formatDate } from "@/lib/utils";
import type { UpdatePost } from "@/lib/updates";

type UpdateCardProps = {
  post: UpdatePost;
};

export function UpdateCard({ post }: UpdateCardProps) {
  return (
    <Card className="flex h-full flex-col">
      <p className="text-xs uppercase tracking-[0.1em] text-muted">
        {post.category} · {formatDate(post.publishedAt)} · {post.readTime}
      </p>
      <h2 className="mt-3 text-2xl font-semibold leading-tight text-text">{post.title}</h2>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{post.summary}</p>
      <Link
        href={`/updates/${post.slug}`}
        className="mt-6 inline-flex items-center text-sm font-medium text-accent transition hover:text-accent-strong"
      >
        閱讀文章
      </Link>
    </Card>
  );
}
