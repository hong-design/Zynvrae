import Link from "next/link";
import { buttonVariants } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="section-space pt-16">
      <Container className="max-w-2xl text-center">
        <p className="text-xs uppercase tracking-[0.12em] text-muted">404</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-text sm:text-5xl">
          找不到這個頁面
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          這個連結可能已經更新。你可以回到首頁或查看目前公開的產品與更新。
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Link href="/" className={buttonVariants()}>
            回首頁
          </Link>
          <Link href="/products" className={buttonVariants({ variant: "secondary" })}>
            看產品
          </Link>
        </div>
      </Container>
    </section>
  );
}
