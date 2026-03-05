"use client";

import { motion, useReducedMotion } from "framer-motion";

type PageHeroProps = {
  kicker: string;
  title: string;
  description: string;
};

export function PageHero({ kicker, title, description }: PageHeroProps) {
  const shouldReduceMotion = useReducedMotion();

  const initial = shouldReduceMotion ? false : { opacity: 0, y: 20 };
  const animate = shouldReduceMotion ? {} : { opacity: 1, y: 0 };

  return (
    <section className="section-space relative overflow-hidden pb-[96px] pt-[96px]">
      <div aria-hidden className="hero-glow" />
      <motion.div
        initial={initial}
        animate={animate}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-4xl"
      >
        <p className="text-xs uppercase tracking-[0.14em] text-muted">{kicker}</p>
        <h1 className="display-title mt-6">{title}</h1>
        <p className="body-text mt-8 max-w-3xl text-muted">{description}</p>
      </motion.div>
    </section>
  );
}
