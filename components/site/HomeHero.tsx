"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { buttonVariants } from "@/components/ui/Button";

const heroTransition = {
  duration: 0.6,
  ease: [0.22, 1, 0.36, 1]
};

export function HomeHero() {
  const shouldReduceMotion = useReducedMotion();

  const initial = shouldReduceMotion ? false : { opacity: 0, y: 20 };
  const animate = shouldReduceMotion ? {} : { opacity: 1, y: 0 };

  return (
    <section className="section-space relative overflow-hidden pb-[100px] pt-[96px]">
      <div aria-hidden className="hero-glow" />

      <div className="grid items-start gap-10 lg:grid-cols-12">
        <motion.div initial={initial} animate={animate} transition={heroTransition} className="lg:col-span-8">
          <p className="text-xs uppercase tracking-[0.14em] text-muted">BRAND OVERVIEW</p>
          <h1 className="display-title mt-6">Zynvrae</h1>
          <p className="body-text mt-8 max-w-3xl text-muted">
            我們專注打造數位服務產品。定位不是一次性交付的外包開發，而是把平台本身作為可以持續經營的產品。
          </p>

          <ul className="mt-8 flex flex-wrap gap-3" aria-label="品牌定位">
            <li className="rounded-full border border-border bg-surface-soft px-4 py-2 text-sm text-text">平台型產品開發者</li>
            <li className="rounded-full border border-border bg-surface-soft px-4 py-2 text-sm text-text">平台營運導向</li>
            <li className="rounded-full border border-border bg-surface-soft px-4 py-2 text-sm text-text">長期產品思維</li>
            <li className="rounded-full border border-border bg-surface-soft px-4 py-2 text-sm text-text">可擴展架構</li>
          </ul>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/platform" className={buttonVariants({ variant: "primary", size: "lg" })}>
              查看平台方向
            </Link>
            <Link href="/contact" className={buttonVariants({ variant: "secondary", size: "lg" })}>
              洽談合作
            </Link>
          </div>
        </motion.div>

        <motion.aside
          initial={initial}
          animate={animate}
          transition={{ ...heroTransition, delay: shouldReduceMotion ? 0 : 0.08 }}
          aria-label="核心主張"
          className="rounded-md border border-border bg-surface-card p-8 lg:col-span-4"
        >
          <p className="text-xs uppercase tracking-[0.14em] text-muted">核心主張</p>
          <ol className="mt-6 space-y-4">
            <li className="flex items-start gap-4 text-sm text-text">
              <span className="inline-flex h-7 min-w-7 items-center justify-center rounded-full border border-border text-xs text-muted">01</span>
              <strong className="font-medium">平台不是功能集合</strong>
            </li>
            <li className="flex items-start gap-4 text-sm text-text">
              <span className="inline-flex h-7 min-w-7 items-center justify-center rounded-full border border-border text-xs text-muted">02</span>
              <strong className="font-medium">平台是可被經營的產品</strong>
            </li>
            <li className="flex items-start gap-4 text-sm text-text">
              <span className="inline-flex h-7 min-w-7 items-center justify-center rounded-full border border-border text-xs text-muted">03</span>
              <strong className="font-medium">先考慮營運，再設計系統</strong>
            </li>
            <li className="flex items-start gap-4 text-sm text-text">
              <span className="inline-flex h-7 min-w-7 items-center justify-center rounded-full border border-border text-xs text-muted">04</span>
              <strong className="font-medium">為長期成長預留擴展性</strong>
            </li>
          </ol>
        </motion.aside>
      </div>
    </section>
  );
}
