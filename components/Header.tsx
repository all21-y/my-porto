"use client";

import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "framer-motion";
import { nav, site } from "@/lib/data";
import { ease } from "@/lib/motion";
import { useActiveSection } from "@/lib/useActiveSection";

export function Header() {
  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(nav.map((item) => item.id));

  // Header menyembunyikan diri saat scroll ke bawah, muncul lagi saat scroll ke atas.
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setHidden(latest > previous && latest > 120);
  });

  // Kunci scroll saat menu mobile terbuka.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Tutup menu mobile jika layar melebar ke ukuran desktop.
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <motion.header
      initial={{ y: "-100%" }}
      animate={{ y: hidden && !open ? "-100%" : "0%" }}
      transition={{ duration: 0.45, ease }}
      className="sticky top-0 z-50 w-full border-b border-outline-variant bg-surface"
    >
      <div className="mx-auto flex h-16 w-full max-w-[1440px] items-center justify-between px-margin md:px-margin-desktop">
        {/* Brand + status */}
        <div className="flex items-center gap-space-md">
          <a
            href="#"
            className="font-headline-sm text-headline-sm tracking-tight text-on-surface transition-colors duration-150 ease-out hover:text-primary"
          >
            {site.name}
          </a>
          <div className="hidden items-center gap-space-xs rounded-lg border border-outline-variant bg-surface-container-low px-2.5 py-1 lg:inline-flex">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
              {site.status}
            </span>
          </div>
        </div>

        {/* Nav + CTA + hamburger */}
        <div className="flex items-center gap-gutter">
          <nav className="hidden items-center gap-space-lg font-body-md text-body-md md:flex">
            {nav.map((item) => {
              const isActive = active === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`relative py-1 transition-colors duration-150 ease-out ${
                    isActive ? "text-primary" : "text-secondary hover:text-primary"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      aria-hidden="true"
                      className="absolute inset-x-0 -bottom-0.5 h-px bg-primary"
                      transition={{ type: "spring", stiffness: 400, damping: 34 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          <a
            href="#contact"
            className="hidden h-9 items-center justify-center rounded-lg bg-on-surface px-4 font-label-md text-label-md text-surface transition-colors duration-150 ease-out hover:bg-primary-container lg:inline-flex"
          >
            Get in Touch
          </a>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="relative -mr-2 flex h-10 w-10 items-center justify-center md:hidden"
          >
            <motion.span
              aria-hidden="true"
              className="absolute h-px w-5 bg-on-surface"
              animate={open ? { y: 0, rotate: 45 } : { y: -4, rotate: 0 }}
              transition={{ duration: 0.3, ease }}
            />
            <motion.span
              aria-hidden="true"
              className="absolute h-px w-5 bg-on-surface"
              animate={open ? { y: 0, rotate: -45 } : { y: 4, rotate: 0 }}
              transition={{ duration: 0.3, ease }}
            />
          </button>
        </div>
      </div>

      {/* Garis progres scroll */}
      <motion.div
        aria-hidden="true"
        style={{ scaleX: progress }}
        className="absolute inset-x-0 -bottom-px h-px origin-left bg-primary"
      />

      {/* Menu mobile */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute left-0 right-0 top-full flex h-[calc(100dvh-4rem)] flex-col justify-between bg-surface px-margin py-space-xl md:hidden"
          >
            <nav className="flex flex-col">
              {nav.map((item, i) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.08 + i * 0.07, ease }}
                  className="flex items-baseline justify-between border-b border-outline-variant py-5 font-headline-md text-headline-md text-on-surface"
                >
                  <span>{item.label}</span>
                  <span className="font-label-sm text-label-sm text-secondary">
                    0{i + 1}
                  </span>
                </motion.a>
              ))}
            </nav>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="font-label-sm text-label-sm uppercase tracking-wider text-secondary"
            >
              {site.status}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
