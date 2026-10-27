"use client";

import { MotionConfig } from "framer-motion";

/** Menghormati pengaturan "reduce motion" milik sistem operasi pengunjung. */
export function Providers({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
