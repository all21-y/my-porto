"use client";

import { motion, type Variants } from "framer-motion";
import { experience } from "@/lib/data";
import { ease, fadeUp, viewportOnce } from "@/lib/motion";
import { Reveal } from "./Reveal";
import { SplitText } from "./SplitText";

const rowVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const lineVariants: Variants = {
  hidden: { scaleX: 0 },
  show: { scaleX: 1, transition: { duration: 1.1, ease } },
};

export function Experience() {
  return (
    <section id="experience" className="border-b border-outline-variant py-20 md:py-28">
      <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <Reveal y={12} className="mb-2">
            <span className="block font-label-sm text-label-sm uppercase tracking-widest text-secondary">
              Chronology / 03
            </span>
          </Reveal>
          <h2 className="font-headline-lg text-headline-lg font-normal text-on-surface">
            <SplitText text="Experience & Engagements" inView />
          </h2>
        </div>
        <Reveal delay={0.15}>
          <p className="font-body-md text-body-md text-secondary">
            Selected tenure across product labs, studios, and autonomous practices.
          </p>
        </Reveal>
      </div>

      <div className="relative">
        {/* Garis atas "digambar" dari kiri ke kanan */}
        <motion.span
          aria-hidden="true"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 1.1, ease }}
          className="absolute left-0 top-0 h-px w-full origin-left bg-outline-variant"
        />

        {experience.map((job) => (
          <motion.div
            key={`${job.company}-${job.period}`}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={rowVariants}
            className="group relative flex flex-col justify-between px-3 py-6 transition-colors duration-200 hover:bg-surface-container-low md:flex-row md:items-center"
          >
            <motion.span
              aria-hidden="true"
              variants={lineVariants}
              className="absolute bottom-0 left-0 h-px w-full origin-left bg-outline-variant"
            />

            <motion.div variants={fadeUp} className="mb-2 md:mb-0">
              <div className="flex flex-col gap-2 transition-transform duration-300 ease-out group-hover:translate-x-2 md:flex-row md:items-center md:gap-8">
                <span className="w-28 font-label-md text-label-md text-secondary">
                  {job.period}
                </span>
                <span className="font-headline-sm text-headline-sm text-on-surface transition-colors duration-150 group-hover:text-primary">
                  {job.role}
                </span>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="flex items-center justify-between md:gap-12"
            >
              <span className="font-body-md text-body-md text-secondary">{job.company}</span>
              <span
                className={`font-label-sm text-label-sm uppercase ${
                  job.current ? "text-primary" : "text-secondary"
                }`}
              >
                {job.location}
              </span>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
