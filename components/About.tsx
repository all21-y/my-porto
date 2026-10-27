import { about, disciplines, site } from "@/lib/data";
import { Portrait } from "./Portrait";
import { Reveal } from "./Reveal";
import { SplitText } from "./SplitText";

export function About() {
  return (
    <section id="about" className="border-b border-outline-variant py-20 md:py-28">
      <div className="grid grid-cols-1 items-start gap-gutter md:grid-cols-12 md:gap-gutter-desktop">
        {/* Kiri: foto + kredensial */}
        <div className="flex flex-col gap-6 md:col-span-5">
          <Portrait src={about.portrait} alt={about.portraitAlt} />
          <Reveal
            delay={0.3}
            y={12}
            className="flex items-center justify-between px-1 font-label-sm text-label-sm text-secondary"
          >
            <span>{site.fullName}</span>
            <span>{site.coordinates}</span>
          </Reveal>
        </div>

        {/* Kanan: bio + disiplin */}
        <div className="flex flex-col justify-between md:col-span-7">
          <div>
            <Reveal y={12} className="mb-4">
              <span className="block font-label-sm text-label-sm uppercase tracking-widest text-secondary">
                {about.eyebrow}
              </span>
            </Reveal>
            <h2 className="mb-8 font-headline-md text-headline-md font-normal leading-snug text-on-surface">
              <SplitText text={about.heading} inView stagger={0.04} />
            </h2>
            <div className="mb-12 space-y-6 font-body-lg text-body-lg leading-relaxed text-secondary">
              {about.paragraphs.map((paragraph, i) => (
                <Reveal key={i} delay={0.1 + i * 0.12}>
                  <p>{paragraph}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="border-t border-outline-variant pt-8">
            <Reveal y={12}>
              <h3 className="mb-6 font-label-sm text-label-sm uppercase tracking-widest text-on-surface">
                Disciplines &amp; Apparatus
              </h3>
            </Reveal>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
              {disciplines.map((group, i) => (
                <Reveal key={group.title} delay={i * 0.12} y={20}>
                  <span className="mb-2 block font-label-md text-label-md font-medium text-on-surface">
                    {group.title}
                  </span>
                  <ul className="space-y-1.5 font-body-sm text-body-sm text-secondary">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
