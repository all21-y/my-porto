"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SplitText } from "./SplitText";
import { site } from "@/lib/data";
import { ease } from "@/lib/motion";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  // Konten hero bergerak lebih lambat dan memudar saat di-scroll (parallax halus).
  const y = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.15]);

  return (
    <section
      id="hero"
      ref={ref}
      className="border-b border-outline-variant pb-24 pt-space-xl md:py-32"
    >
      <motion.div
        style={{ y, opacity }}
        className="grid grid-cols-1 gap-gutter md:grid-cols-12 md:gap-gutter-desktop"
      >
        <div className="flex flex-col justify-start md:col-span-10 lg:col-span-9">
          <div className="mb-6 inline-flex items-center gap-2">
            <motion.span
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease }}
              className="font-label-sm text-label-sm uppercase tracking-widest text-primary"
            >
              {site.eyebrow}
            </motion.span>
            <motion.span
              aria-hidden="true"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, delay: 0.3, ease }}
              className="h-px w-8 origin-left bg-outline-variant"
            />
          </div>

          <h1 className="mb-6 font-headline-xl text-headline-xl-mobile font-normal leading-tight tracking-tight text-on-surface md:mb-8 md:text-headline-xl">
            <SplitText text={site.headline} delay={0.15} stagger={0.06} />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85, ease }}
            className="mb-12 max-w-2xl font-body-lg text-body-lg leading-relaxed text-secondary"
          >
            {site.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.05, ease }}
          >
            <a
              href="#work"
              className="inline-flex items-center gap-2 border-b border-outline pb-0.5 font-label-md text-label-md text-on-surface transition-colors duration-150 hover:border-primary hover:text-primary"
            >
              <span>View selected work</span>
              <motion.span
                aria-hidden="true"
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              >
                ↓
              </motion.span>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
