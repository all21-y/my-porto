import { projects } from "@/lib/data";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "./Reveal";
import { SplitText } from "./SplitText";

export function SelectedWork() {
  return (
    <section id="work" className="border-b border-outline-variant py-20 md:py-28">
      <div className="mb-16 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <Reveal y={12} className="mb-2">
            <span className="block font-label-sm text-label-sm uppercase tracking-widest text-secondary">
              Exhibition / 01
            </span>
          </Reveal>
          <h2 className="font-headline-lg text-headline-lg font-normal text-on-surface">
            <SplitText text="Selected Work" inView />
          </h2>
        </div>
        <Reveal delay={0.15} className="max-w-md">
          <p className="font-body-md text-body-md text-secondary">
            A curated registry of commercial systems, editorial frameworks, and computational
            explorations.
          </p>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 gap-gutter md:grid-cols-2 md:gap-gutter-desktop">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
