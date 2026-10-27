"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ease, viewportOnce } from "@/lib/motion";

/** Foto terbuka dari bawah (clip-path), lalu bergeser halus mengikuti scroll (parallax). */
export function Portrait({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-7%", "7%"]);

  return (
    <motion.div
      ref={ref}
      initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
      viewport={viewportOnce}
      transition={{ duration: 1.2, ease }}
      className="relative aspect-[4/5] overflow-hidden rounded-lg border border-outline-variant bg-surface-container-low"
    >
      <motion.div style={{ y }} className="absolute inset-x-0 -top-[8%] h-[116%]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 768px) 40vw, 100vw"
          className="object-cover grayscale contrast-105 transition-[filter] duration-700 hover:grayscale-0"
        />
      </motion.div>
    </motion.div>
  );
}
