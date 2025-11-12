import type { ReactNode } from "react";

export type CallToActionButton = {
  href: string;
  label: string;
  className: string;
  icon?: ReactNode;
};

export interface CallToActionProps {
  title: string;
  description?: string;
  backgroundClassName?: string;
  align?: "center" | "left";
  containerClassName?: string;
  actions: CallToActionButton[];
}

export default function CallToAction({
  title,
  description,
  backgroundClassName = "bg-hero-gradient text-white",
  align = "center",
  containerClassName = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
  actions,
}: CallToActionProps) {
  const alignmentClass = align === "center" ? "text-center" : "text-left";
  const actionsClass =
    align === "center"
      ? "flex flex-col sm:flex-row gap-4 justify-center"
      : "flex flex-col sm:flex-row gap-4";

  return (
    <section className={`${backgroundClassName} relative isolate overflow-hidden py-16`}>
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-black/25 via-transparent to-primary-900/25"
        aria-hidden="true"
      />
      <div className={`${containerClassName} ${alignmentClass} relative z-10`}>
        <h2 className="text-3xl font-bold mb-4 drop-shadow-lg">{title}</h2>
        {description && (
          <p
            className={
              align === "center"
                ? "text-xl text-white/95 mb-8 max-w-3xl mx-auto"
                : "text-xl text-white/95 mb-8"
            }
          >
            {description}
          </p>
        )}

        <div className={actionsClass}>
          {actions.map(({ href, label, className, icon }) => (
            <a key={`${href}-${label}`} href={href} className={className}>
              {label}
              {icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

