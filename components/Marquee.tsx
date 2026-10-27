import { marquee } from "@/lib/data";

/**
 * Pita teks berjalan pelan. Murni CSS (lihat keyframes "marquee" di tailwind.config.ts),
 * berhenti saat di-hover dan otomatis mati jika pengunjung memilih "reduce motion".
 */
export function Marquee() {
  const items = [...marquee, ...marquee]; // diduplikasi agar loop mulus (geser -50%)

  return (
    <div
      aria-hidden="true"
      className="group mask-fade-x overflow-hidden border-b border-outline-variant py-6"
    >
      <div className="flex w-max animate-marquee motion-reduce:animate-none group-hover:[animation-play-state:paused]">
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center whitespace-nowrap font-headline-md text-headline-md italic text-secondary"
          >
            <span className="px-8">{item}</span>
            <span className="h-1.5 w-1.5 rounded-full bg-outline-variant" />
          </span>
        ))}
      </div>
    </div>
  );
}
