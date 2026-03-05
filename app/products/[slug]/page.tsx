import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SubscribeForm } from "@/components/forms/SubscribeForm";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { getAllProducts, getProductBySlug, type ProductStatus } from "@/lib/products";
import { siteConfig } from "@/lib/site";

type ProductDetailProps = {
  params: {
    slug: string;
  };
};

function statusVariant(status: ProductStatus): "accent" | "success" | "warning" {
  if (status === "Private beta") {
    return "success";
  }

  if (status === "Building") {
    return "accent";
  }

  return "warning";
}

export function generateStaticParams() {
  return getAllProducts().map((product) => ({ slug: product.slug }));
}

export function generateMetadata({ params }: ProductDetailProps): Metadata {
  const product = getProductBySlug(params.slug);

  if (!product) {
    return {
      title: "找不到產品"
    };
  }

  const title = `${product.name} | Zynvrae Products`;
  const description = `${product.tagline} ${product.positioning}`;
  const url = `${siteConfig.url}/products/${product.slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: `/products/${product.slug}`
    },
    openGraph: {
      type: "website",
      url,
      title,
      description,
      images: [siteConfig.ogImage]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteConfig.ogImage]
    }
  };
}

export default function ProductDetailPage({ params }: ProductDetailProps) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  return (
    <article className="section-space pt-12 sm:pt-16">
      <Container className="space-y-10">
        <header className="max-w-4xl">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant={statusVariant(product.status)}>{product.status}</Badge>
            <p className="text-xs uppercase tracking-[0.12em] text-muted">Product detail</p>
          </div>
          <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-text sm:text-6xl">
            {product.name}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
            {product.positioning}
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted">{product.description}</p>
        </header>

        <div className="grid gap-4 lg:grid-cols-12">
          <Card className="lg:col-span-6">
            <h2 className="text-sm font-semibold uppercase tracking-[0.1em] text-muted">目標使用者</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted">
              {product.targetUsers.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Card>

          <Card className="lg:col-span-6">
            <h2 className="text-sm font-semibold uppercase tracking-[0.1em] text-muted">核心流程</h2>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-muted">
              {product.coreFlow.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </Card>

          <Card className="lg:col-span-6">
            <h2 className="text-sm font-semibold uppercase tracking-[0.1em] text-muted">信任與安全</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted">
              {product.trustAndSafety.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Card>

          <Card className="lg:col-span-6">
            <h2 className="text-sm font-semibold uppercase tracking-[0.1em] text-muted">我們如何衡量</h2>
            <ul className="mt-3 flex flex-wrap gap-2 text-xs text-muted">
              {product.metrics.map((metric) => (
                <li key={metric} className="rounded-full border border-border/90 px-2.5 py-1">
                  {metric}
                </li>
              ))}
            </ul>
          </Card>
        </div>

        <section className="rounded-lg border border-border/85 bg-surface/75 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-text">加入候補名單</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
            {product.waitlistLabel}。我們會優先通知可加入測試的時段與條件。
          </p>
          <div className="mt-6 max-w-xl">
            <SubscribeForm idPrefix={`${product.slug}-waitlist`} buttonLabel="加入候補名單" />
          </div>
        </section>
      </Container>
    </article>
  );
}
