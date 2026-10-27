"use client";

import { useEffect, useState } from "react";

/**
 * Mengembalikan id section yang sedang berada di tengah layar.
 * Mengembalikan null saat berada di hero (paling atas).
 */
export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string | null>(null);
  const key = ids.join(",");

  useEffect(() => {
    const targets = ["hero", ...key.split(",")]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          setActive(entry.target.id === "hero" ? null : entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [key]);

  return active;
}
