"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import type { Project } from "@/lib/data";
import { ease, viewportOnce } from "@/lib/motion";

const tagList: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.35 } },
};

const tagItem: Variants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.9, delay: (index % 2) * 0.12, ease }}
      className="group flex flex-col overflow-hidden rounded-lg border border-outline-variant bg-surface-bright transition-colors duration-150 ease-out hover:border-primary-container"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-outline-variant bg-surface-container">
        {/* Gambar "mengendap" dari zoom besar ke ukuran normal saat masuk layar */}
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.14 }}
          whileInView={{ scale: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 1.6, ease }}
        >
          <Image
            src={project.image}
            alt={project.alt}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
        </motion.div>
        <span className="absolute left-4 top-4 rounded-lg border border-outline-variant bg-surface/90 px-2 py-1 font-label-sm text-label-sm text-on-surface backdrop-blur-sm">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="flex flex-1 flex-col justify-between bg-surface-bright p-space-lg">
        <div>
          <div className="mb-3 flex items-center justify-between gap-2">
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
              {project.category}
            </span>
            <span className="font-label-sm text-label-sm text-secondary">{project.year}</span>
          </div>
          <h3 className="mb-2 font-headline-sm text-headline-sm text-on-surface transition-colors duration-150 group-hover:text-primary">
            {project.title}
          </h3>
          <p className="mb-6 font-body-md text-body-md text-secondary">{project.description}</p>
        </div>

        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={tagList}
          className="flex flex-wrap gap-2 border-t border-outline-variant/60 pt-4"
        >
          {project.tags.map((tag) => (
            <motion.li
              key={tag}
              variants={tagItem}
              className="rounded-lg border border-outline-variant bg-surface-container-low px-2.5 py-1 font-label-sm text-label-sm text-on-surface"
            >
              {tag}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.article>
  );
}
