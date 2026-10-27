"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { ease, viewportOnce } from "@/lib/motion";

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
  y?: number;
  duration?: number;
};

/** Fade + naik pelan saat elemen masuk viewport. Dipakai di hampir semua blok teks. */
export function Reveal({
  delay = 0,
  y = 24,
  duration = 0.8,
  children,
  ...props
}: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration, delay, ease }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
