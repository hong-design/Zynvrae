import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site";
import { formatDate } from "@/lib/utils";
import { getAllUpdates, getUpdateBySlug } from "@/lib/updates";

type UpdateDetailProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return getAllUpdates().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: UpdateDetailProps): Metadata {
  const post = getUpdateBySlug(params.slug);

  if (!post) {
    return {
      title: "找不到文章"
    };
  }

  const url = `${siteConfig.url}/updates/${post.slug}`;

  return {
    title: post.title,
    description: post.summary,
    alternates: {
      canonical: `/updates/${post.slug}`
    },
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.summary,
      publishedTime: post.publishedAt,
      images: [siteConfig.ogImage]
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.summary,
      images: [siteConfig.ogImage]
    }
  };
}

export default function UpdateDetailPage({ params }: UpdateDetailProps) {
  const post = getUpdateBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="section-space pt-12 sm:pt-16">
      <Container className="grid gap-10 lg:grid-cols-12">
        <header className="lg:col-span-8 lg:col-start-1">
          <p className="text-xs uppercase tracking-[0.12em] text-muted">
            {post.category} · {formatDate(post.publishedAt)} · {post.readTime}
          </p>
          <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-text sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">{post.summary}</p>
        </header>

        <aside className="rounded-md border border-border/85 bg-surface/70 p-4 lg:col-span-3 lg:col-start-10 lg:row-span-2 lg:sticky lg:top-24 lg:self-start">
          <p className="text-xs uppercase tracking-[0.1em] text-muted">目錄</p>
          <ol className="mt-3 space-y-2 text-sm text-muted">
            {post.sections.map((section, index) => (
              <li key={section.id}>
                <a href={`#${section.id}`} className="transition hover:text-text">
                  {index + 1}. {section.title}
                </a>
              </li>
            ))}
          </ol>
        </aside>

        <div className="space-y-10 lg:col-span-8 lg:col-start-1">
          {post.sections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-24">
              <h2 className="text-2xl font-semibold tracking-tight text-text">{section.title}</h2>
              <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted sm:text-base">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </Container>
    </article>
  );
}
