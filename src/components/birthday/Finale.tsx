import { useEffect, useState } from "react";
import { config } from "@/lib/birthday-config";
import { celebrate } from "@/lib/celebrate";
import { useReveal } from "@/hooks/use-reveal";
import { Reveal } from "./Chapter";

const WISHES = [
  "Here's to another year of life.",
  "Another year of growth.",
  "Another year of laughter.",
  "Another year of memories.",
];

export function Finale() {
  const { ref, shown } = useReveal<HTMLDivElement>(0.35);
  const [stage, setStage] = useState(0); // 0 none, 1 opening echo, 2 final line, 3 signature

  useEffect(() => {
    if (!shown) return;
    celebrate("burst");
    const t1 = setTimeout(() => setStage(1), 1400);
    const t2 = setTimeout(() => setStage(2), 5200);
    const t3 = setTimeout(() => {
      setStage(3);
      celebrate("gentle");
    }, 8200);
    return () => [t1, t2, t3].forEach(clearTimeout);
  }, [shown]);

  return (
    <section
      ref={ref}
      aria-label="Final celebration"
      className="surface-dusk relative overflow-hidden px-6 py-28 sm:py-36"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {[...Array(16)].map((_, i) => (
          <span
            key={i}
            className="drift-up absolute text-lg opacity-0"
            style={{
              left: `${(i * 61) % 96}%`,
              bottom: "-6vh",
              animationDuration: `${14 + (i % 6) * 3}s`,
              animationDelay: `${i * 1.3}s`,
            }}
          >
            {i % 3 === 0 ? "🎈" : i % 3 === 1 ? "❤️" : "✨"}
          </span>
        ))}
      </div>

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-10 text-center">
        <Reveal>
          <h2 className="display text-4xl text-cream text-balance sm:text-6xl">
            HAPPY BIRTHDAY, {config.firstName.toUpperCase()}!
          </h2>
          <p className="mt-3 text-sm tracking-[0.3em] text-gold uppercase">
            {config.birthdayLabel} 🎂
          </p>
        </Reveal>

        <ul className="space-y-2">
          {WISHES.map((w, i) => (
            <Reveal key={w} as="li" delay={i * 200}>
              <span className="display text-xl text-lavender sm:text-2xl">{w}</span>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={200}>
          <p className="max-w-xl text-base leading-relaxed text-cream/75">
            May the years ahead be even more beautiful than the four years we&apos;ve already
            shared.
          </p>
        </Reveal>

        <div className="mt-10 flex min-h-[16rem] w-full flex-col items-center justify-center gap-10 sm:min-h-[20rem]">
          <p
            className={`display text-2xl text-cream/70 text-balance transition-all duration-[2500ms] sm:text-3xl ${
              stage >= 1 ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            {config.openingLine}
          </p>

          <p
            className={`glow-pulse display text-3xl text-balance text-gold transition-all duration-[3000ms] sm:text-6xl ${
              stage >= 2 ? "translate-y-0 opacity-100 blur-0" : "translate-y-6 opacity-0 blur-sm"
            }`}
          >
            {config.finalLine}
          </p>
        </div>

        <p
          className={`hand text-2xl text-cream/80 transition-opacity duration-[2000ms] sm:text-3xl ${
            stage >= 3 ? "opacity-100" : "opacity-0"
          }`}
        >
          Happy Birthday, {config.firstName} ❤️
        </p>
      </div>
    </section>
  );
}
