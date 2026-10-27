import { nav, site } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-outline-variant bg-surface-container-low">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center justify-between gap-gutter px-margin py-space-xl md:flex-row md:px-margin-desktop">
        <p className="text-center font-body-sm text-body-sm text-secondary md:text-left">
          © {year} {site.fullName}. {site.role}.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6 font-body-sm text-body-sm">
          <a
            href="#"
            className="group font-medium text-on-surface transition-colors duration-150 hover:text-primary"
          >
            Back to Top{" "}
            <span className="inline-block transition-transform duration-150 group-hover:-translate-y-0.5">
              ↑
            </span>
          </a>
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-secondary transition-colors duration-150 hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
