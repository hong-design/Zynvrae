"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { GlowBG } from "@/components/GlowBG";
import { buttonVariants } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const canAnimate = mounted && !shouldReduceMotion;
  const initial = canAnimate ? { opacity: 0, y: 18 } : false;
  const animate = canAnimate ? { opacity: 1, y: 0 } : undefined;

  return (
    <section className="section-space relative overflow-x-clip pb-[96px] pt-[80px] md:pt-[96px]">
      <GlowBG />

      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <motion.p
              initial={initial}
              animate={animate}
              transition={canAnimate ? { duration: 0.6, ease } : undefined}
              className="eyebrow uppercase text-muted"
            >
              BRAND OVERVIEW
            </motion.p>

            <motion.h1
              initial={initial}
              animate={animate}
              transition={canAnimate ? { duration: 0.6, ease } : undefined}
              className="display-title mt-6"
            >
              Zynvrae
            </motion.h1>

            <motion.p
              initial={initial}
              animate={animate}
              transition={canAnimate ? { duration: 0.56, ease, delay: 0.14 } : undefined}
              className="body-text mt-8 max-w-3xl text-muted"
            >
              我們專注打造數位服務產品。定位不是一次性交付的外包開發，而是把平台本身作為可以持續經營的產品。
            </motion.p>

            <motion.ul
              initial={initial}
              animate={animate}
              transition={canAnimate ? { duration: 0.56, ease, delay: 0.16 } : undefined}
              className="mt-8 flex flex-wrap gap-3"
              aria-label="品牌定位"
            >
              <li className="rounded-full border border-border bg-surface-soft px-4 py-2 text-sm text-text">平台型產品開發者</li>
              <li className="rounded-full border border-border bg-surface-soft px-4 py-2 text-sm text-text">平台營運導向</li>
              <li className="rounded-full border border-border bg-surface-soft px-4 py-2 text-sm text-text">長期產品思維</li>
              <li className="rounded-full border border-border bg-surface-soft px-4 py-2 text-sm text-text">可擴展架構</li>
            </motion.ul>

            <motion.div
              initial={initial}
              animate={animate}
              transition={canAnimate ? { duration: 0.52, ease, delay: 0.28 } : undefined}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link href="/platform" className={buttonVariants({ variant: "primary", size: "lg" })}>
                查看平台方向
              </Link>
              <Link href="/contact" className={buttonVariants({ variant: "secondary", size: "lg" })}>
                洽談合作
              </Link>
            </motion.div>
          </div>

          <motion.aside
            initial={initial}
            animate={animate}
            transition={canAnimate ? { duration: 0.56, ease, delay: 0.22 } : undefined}
            aria-label="核心主張"
            className="rounded-[14px] border border-border bg-card p-8 lg:col-span-4"
          >
            <p className="eyebrow uppercase text-muted">核心主張</p>
            <ol className="mt-6 space-y-4">
              <li className="card-lift flex items-start gap-4 rounded-md border border-border bg-surface-soft/40 p-3 text-sm text-text">
                <span className="inline-flex h-7 min-w-7 items-center justify-center rounded-full border border-border text-xs text-muted">01</span>
                <strong className="font-medium">平台不是功能集合</strong>
              </li>
              <li className="card-lift flex items-start gap-4 rounded-md border border-border bg-surface-soft/40 p-3 text-sm text-text">
                <span className="inline-flex h-7 min-w-7 items-center justify-center rounded-full border border-border text-xs text-muted">02</span>
                <strong className="font-medium">平台是可被經營的產品</strong>
              </li>
              <li className="card-lift flex items-start gap-4 rounded-md border border-border bg-surface-soft/40 p-3 text-sm text-text">
                <span className="inline-flex h-7 min-w-7 items-center justify-center rounded-full border border-border text-xs text-muted">03</span>
                <strong className="font-medium">先考慮營運，再設計系統</strong>
              </li>
              <li className="card-lift flex items-start gap-4 rounded-md border border-border bg-surface-soft/40 p-3 text-sm text-text">
                <span className="inline-flex h-7 min-w-7 items-center justify-center rounded-full border border-border text-xs text-muted">04</span>
                <strong className="font-medium">為長期成長預留擴展性</strong>
              </li>
            </ol>
          </motion.aside>
        </div>
      </Container>
    </section>
  );
}
