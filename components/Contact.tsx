"use client";

import { motion } from "framer-motion";
import { site, socials } from "@/lib/data";
import { ease, viewportOnce } from "@/lib/motion";
import { Reveal } from "./Reveal";
import { SplitText } from "./SplitText";

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-36">
      <div className="grid grid-cols-1 gap-gutter md:grid-cols-12 md:gap-gutter-desktop">
        <div className="md:col-span-10">
          <Reveal y={12} className="mb-4">
            <span className="block font-label-sm text-label-sm uppercase tracking-widest text-primary">
              Inquiry / 04
            </span>
          </Reveal>

          <h2 className="mb-8 font-headline-lg text-headline-lg font-normal leading-tight text-on-surface md:font-headline-xl md:text-headline-xl">
            <SplitText text={site.contactTitle} inView stagger={0.07} />
          </h2>

          <Reveal delay={0.2} className="mb-12 max-w-xl">
            <p className="font-body-lg text-body-lg text-secondary">{site.contactText}</p>
          </Reveal>

          <Reveal delay={0.3} className="mb-16">
            <a
              href={`mailto:${site.email}`}
              className="group relative inline-block break-all pb-1 font-headline-sm text-headline-sm text-on-surface transition-colors duration-200 hover:text-primary-container md:font-headline-lg md:text-headline-lg"
            >
              {site.email}
              {/* Garis bawah digambar saat masuk layar, berubah warna saat hover */}
              <motion.span
                aria-hidden="true"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={viewportOnce}
                transition={{ duration: 1.1, delay: 0.7, ease }}
                className="absolute bottom-0 left-0 h-0.5 w-full origin-left bg-on-surface transition-colors duration-200 group-hover:bg-primary-container"
              />
            </a>
          </Reveal>

          <div className="flex flex-wrap items-center gap-6 border-t border-outline-variant pt-8 font-label-md text-label-md md:gap-10">
            {socials.map((social, i) => (
              <Reveal key={social.label} delay={0.4 + i * 0.08} y={12}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-1 text-secondary transition-colors duration-150 hover:text-on-surface"
                >
                  <span>{social.label}</span>
                  <span className="transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                    ↗
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
