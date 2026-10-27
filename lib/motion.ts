import type { Variants } from "framer-motion";

/** Easing "expo-out" yang lembut, dipakai di semua animasi supaya terasa konsisten. */
export const ease = [0.22, 1, 0.36, 1] as const;

/** Pemicu scroll: animasi jalan sekali, saat elemen masuk 10% dari bawah viewport. */
export const viewportOnce = { once: true, margin: "0px 0px -10% 0px" } as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};
