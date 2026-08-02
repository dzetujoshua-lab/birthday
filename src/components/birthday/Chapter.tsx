import type { ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";

export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "p" | "li" | "section" | "figure";
}) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  return (
    <Tag
      ref={ref as never}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${shown ? "reveal-in" : ""} ${className}`}
    >
      {children}
    </Tag>
  );
}

export function Chapter({
  number,
  title,
  children,
  dark = false,
  id,
}: {
  number: string;
  title: string;
  children: ReactNode;
  dark?: boolean;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`relative overflow-hidden px-6 py-24 sm:py-32 ${dark ? "surface-dusk" : ""}`}
    >
      <div className="mx-auto w-full max-w-5xl">
        <Reveal className="flex flex-col items-center gap-4 text-center">
          <span className={`chapter-label ${dark ? "text-lavender/80" : ""}`}>Chapter {number}</span>
          <h2
            className={`display text-3xl text-balance sm:text-5xl ${dark ? "text-cream" : "text-foreground"}`}
          >
            {title}
          </h2>
          <span className="gold-rule" />
        </Reveal>
        <div className="mt-12 sm:mt-16">{children}</div>
      </div>
    </section>
  );
}
