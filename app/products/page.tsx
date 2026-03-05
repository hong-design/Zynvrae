import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { buttonVariants } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { getAllProducts, type ProductStatus } from "@/lib/products";

export const metadata: Metadata = {
  title: "Products",
  description: "Zynvrae 目前正在打造的產品組合、定位與狀態。"
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

export default function ProductsPage() {
  const products = getAllProducts();

  return (
    <section className="section-space pt-12 sm:pt-16">
      <Container>
        <header className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.12em] text-muted">Products</p>
          <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-text sm:text-6xl">
            產品組合
          </h1>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            我們以平台產品方式建立核心系統，並用長期營運視角管理每一個模組的成長與風險。
          </p>
        </header>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Card key={product.slug} className="flex h-full flex-col">
              <div className="flex items-start justify-between gap-3">
                <h2 className="text-2xl font-semibold tracking-tight text-text">{product.name}</h2>
                <Badge variant={statusVariant(product.status)}>{product.status}</Badge>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-muted">{product.tagline}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted">{product.description}</p>

              <ul className="mt-5 flex flex-wrap gap-2 text-xs text-muted">
                {product.metrics.map((metric) => (
                  <li key={metric} className="rounded-full border border-border/90 px-2.5 py-1">
                    {metric}
                  </li>
                ))}
              </ul>

              <Link
                href={`/products/${product.slug}`}
                className={buttonVariants({ variant: "secondary", className: "mt-6" })}
              >
                查看詳情
              </Link>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
