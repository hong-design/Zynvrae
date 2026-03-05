"use client";

import { motion, useReducedMotion } from "framer-motion";
import { GlowBG } from "@/components/layout/GlowBG";

type PageHeroProps = {
  kicker: string;
  title: string;
  description: string;
};

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function PageHero({ kicker, title, description }: PageHeroProps) {
  const shouldReduceMotion = useReducedMotion();
  const initial = shouldReduceMotion ? undefined : { opacity: 0, y: 16 };
  const animate = shouldReduceMotion ? undefined : { opacity: 1, y: 0 };

  return (
    <section className="section-space relative overflow-hidden pb-[96px] pt-[80px] md:pt-[96px]">
      <GlowBG />

      <div className="max-w-4xl">
        <motion.p
          initial={initial}
          animate={animate}
          transition={{ duration: 0.6, ease }}
          className="eyebrow uppercase text-muted"
        >
          {kicker}
        </motion.p>
        <motion.h1
          initial={initial}
          animate={animate}
          transition={{ duration: 0.6, ease }}
          className="display-title mt-6"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={initial}
          animate={animate}
          transition={{ duration: 0.56, ease, delay: shouldReduceMotion ? 0 : 0.14 }}
          className="body-text mt-8 max-w-3xl text-muted"
        >
          {description}
        </motion.p>
      </div>
    </section>
  );
}
