import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { buttonVariants } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { getAllProducts, type ProductStatus } from "@/lib/products";

function statusVariant(status: ProductStatus): "accent" | "success" | "warning" {
  if (status === "Private beta") {
    return "success";
  }

  if (status === "Building") {
    return "accent";
  }

  return "warning";
}

export function ProductsTeaser() {
  const products = getAllProducts();

  return (
    <section className="section-space section-rule">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.12em] text-muted">Products</p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-text sm:text-4xl">
              我們正在打造的產品
            </h2>
          </div>
          <Link href="/products" className={buttonVariants({ variant: "secondary" })}>
            查看所有產品
          </Link>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {products.map((product) => (
            <Card key={product.slug} className="flex h-full flex-col">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-xl font-semibold tracking-tight text-text">{product.name}</h3>
                <Badge variant={statusVariant(product.status)}>{product.status}</Badge>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted">{product.tagline}</p>
              <p className="mt-4 text-xs uppercase tracking-[0.1em] text-muted">
                {product.positioning}
              </p>
              <Link
                href={`/products/${product.slug}`}
                className="mt-6 inline-flex items-center text-sm font-medium text-accent transition hover:text-accent-strong"
              >
                進入產品頁
              </Link>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
