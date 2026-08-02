import { useState } from "react";
import { letter } from "@/lib/birthday-config";

export function Letter() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mx-auto max-w-2xl">
      {!open ? (
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="hand text-2xl text-muted-foreground">{letter.intro}</p>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-expanded={open}
            className="group relative w-full max-w-sm rounded-xl border border-gold/50 bg-card px-8 py-14 shadow-[var(--shadow-card)] transition-transform duration-500 hover:-translate-y-2 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
          >
            <span
              aria-hidden
              className="absolute inset-x-0 top-0 h-1/2 origin-top rounded-t-xl border-b border-gold/40 bg-[image:var(--gradient-warm)] transition-transform duration-700 group-hover:[transform:rotateX(-28deg)]"
            />
            <span className="relative text-4xl">💌</span>
            <span className="relative mt-4 block text-xs tracking-[0.24em] uppercase">
              Open the letter
            </span>
          </button>
        </div>
      ) : (
        <article className="animate-fade-in rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-soft)] sm:p-12">
          <h3 className="display text-3xl">{letter.greeting}</h3>
          <span className="gold-rule mt-4 block" />
          <div className="mt-6 space-y-5 text-[0.98rem] leading-relaxed text-muted-foreground">
            {letter.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <p className="mt-8 text-sm text-muted-foreground">{letter.signature}</p>
          <p className="hand mt-1 text-3xl text-foreground">{letter.signatureName}</p>
        </article>
      )}
    </div>
  );
}
