import type { ReactNode } from "react";

export type HeroButton = {
  href: string;
  label: string;
  className: string;
  icon?: ReactNode;
};

export interface HeroSectionProps {
  title: string;
  description?: string;
  eyebrow?: string;
  align?: "left" | "center";
  backgroundClassName?: string;
  containerClassName?: string;
  spacingClassName?: string;
  textClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  overlayClassName?: string | null;
  buttons?: HeroButton[];
  extraContent?: ReactNode;
}

export default function HeroSection({
  title,
  description,
  eyebrow,
  align = "center",
  backgroundClassName = "bg-hero-gradient",
  containerClassName = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
  spacingClassName = "py-20",
  textClassName = "text-white",
  titleClassName,
  descriptionClassName,
  overlayClassName = "bg-gradient-to-br from-black/30 via-black/15 to-primary-900/30",
  buttons,
  extraContent,
}: HeroSectionProps) {
  const alignmentClass =
    align === "center"
      ? "text-center space-y-6"
      : "text-left space-y-6 max-w-3xl";

  const baseTitleClass = "text-4xl sm:text-5xl font-bold";
  const resolvedTitleClass = titleClassName ?? "text-gradient drop-shadow-lg";
  const resolvedDescriptionClass =
    descriptionClassName ??
    (align === "center"
      ? "text-xl text-white/90 max-w-3xl mx-auto"
      : "text-xl text-white/90");

  return (
    <section className={`${backgroundClassName} relative isolate overflow-hidden ${textClassName} ${spacingClassName}`}>
      {overlayClassName !== null && (
        <div
          className={`pointer-events-none absolute inset-0 ${overlayClassName} mix-blend-normal`}
          aria-hidden="true"
        />
      )}
      <div className={`${containerClassName} relative z-10`}>
        <div className={alignmentClass}>
          {eyebrow && (
            <span className="inline-flex items-center px-4 py-1 text-xs font-semibold uppercase tracking-widest rounded-full bg-white/10 backdrop-blur">
              {eyebrow}
            </span>
          )}

          <h1 className={`${baseTitleClass} ${resolvedTitleClass}`}>{title}</h1>

          {description && (
            <p className={resolvedDescriptionClass}>
              {description}
            </p>
          )}

          {buttons && buttons.length > 0 && (
            <div
              className={
                align === "center"
                  ? "flex flex-col sm:flex-row gap-4 justify-center"
                  : "flex flex-col sm:flex-row gap-4"
              }
            >
              {buttons.map(({ href, label, className, icon }) => (
                <a key={`${href}-${label}`} href={href} className={className}>
                  {label}
                  {icon}
                </a>
              ))}
            </div>
          )}

          {extraContent}
        </div>
      </div>
    </section>
  );
}

