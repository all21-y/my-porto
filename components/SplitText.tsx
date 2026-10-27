"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";
import { ease, viewportOnce } from "@/lib/motion";

type SplitTextProps = {
  text: string;
  className?: string;
  /** Jeda sebelum kata pertama muncul (detik). */
  delay?: number;
  /** Selisih waktu antar kata (detik). */
  stagger?: number;
  /** true = jalan saat masuk viewport, false = jalan saat halaman dimuat. */
  inView?: boolean;
};

/**
 * Teks muncul kata demi kata, naik dari balik "masker" (efek editorial).
 * Teks asli tetap tersedia untuk screen reader lewat elemen sr-only.
 */
export function SplitText({
  text,
  className,
  delay = 0,
  stagger = 0.05,
  inView = false,
}: SplitTextProps) {
  const words = text.split(" ");
  const trigger = inView
    ? { whileInView: { y: "0%" }, viewport: viewportOnce }
    : { animate: { y: "0%" } };

  return (
    <span className={className}>
      <span className="sr-only">{text}</span>
      {words.map((word, i) => (
        <Fragment key={`${word}-${i}`}>
          <span
            aria-hidden="true"
            className="-mb-[0.15em] inline-block overflow-hidden pb-[0.15em] align-bottom"
          >
            <motion.span
              className="inline-block will-change-transform"
              initial={{ y: "115%" }}
              {...trigger}
              transition={{ duration: 0.9, delay: delay + i * stagger, ease }}
            >
              {word}
            </motion.span>
          </span>{" "}
        </Fragment>
      ))}
    </span>
  );
}
