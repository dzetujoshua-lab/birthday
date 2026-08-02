import { useEffect, useState } from "react";
import { memories } from "@/lib/birthday-config";
import { Reveal } from "./Chapter";

const TILT = ["-2.5deg", "1.8deg", "-1.2deg", "2.4deg", "-1.8deg", "1.4deg"];

export function Gallery() {
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((i) => ((i ?? 0) + 1) % memories.length);
      if (e.key === "ArrowLeft") setOpen((i) => ((i ?? 0) - 1 + memories.length) % memories.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {memories.map((m, i) => (
          <Reveal key={m.caption} delay={i * 90}>
            <button
              type="button"
              onClick={() => setOpen(i)}
              style={{ rotate: TILT[i % TILT.length] }}
              className="polaroid group block w-full rounded-sm text-left focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
              aria-label={`Open memory: ${m.caption}`}
            >
              <div className="relative aspect-4/5 w-full overflow-hidden bg-secondary">
                {m.src ? (
                  <img
                    src={m.src}
                    alt={m.caption}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-[image:var(--gradient-warm)] px-4 text-center">
                    <span className="text-3xl">📷</span>
                    <span className="chapter-label text-[0.58rem]">Photo {i + 1}</span>
                    <span className="hand text-base text-muted-foreground">{m.note}</span>
                  </div>
                )}
              </div>
              <p className="hand mt-3 px-1 text-xl leading-tight text-foreground">{m.caption}</p>
            </button>
          </Reveal>
        ))}
      </div>

      {open !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={memories[open].caption}
          className="fixed inset-0 z-50 flex items-center justify-center bg-primary/85 p-5 backdrop-blur-sm"
          onClick={() => setOpen(null)}
        >
          <figure
            className="w-full max-w-lg rounded-2xl bg-card p-4 shadow-[var(--shadow-soft)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-4/5 w-full overflow-hidden rounded-xl bg-secondary">
              {memories[open].src ? (
                <img
                  src={memories[open].src}
                  alt={memories[open].caption}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-[image:var(--gradient-warm)]">
                  <span className="hand text-2xl text-muted-foreground">
                    {memories[open].note}
                  </span>
                </div>
              )}
            </div>
            <figcaption className="mt-4 flex items-center justify-between gap-4">
              <span className="hand text-xl">{memories[open].caption}</span>
              <button
                type="button"
                onClick={() => setOpen(null)}
                className="rounded-full border border-border px-4 py-2 text-xs tracking-widest uppercase hover:bg-muted"
              >
                Close
              </button>
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
