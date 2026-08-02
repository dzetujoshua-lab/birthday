import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { config } from "@/lib/birthday-config";
import { celebrate } from "@/lib/celebrate";
import { Opening } from "@/components/birthday/Opening";
import { Chapter, Reveal } from "@/components/birthday/Chapter";
import { Countdown } from "@/components/birthday/Countdown";
import { Gallery } from "@/components/birthday/Gallery";
import { Letter } from "@/components/birthday/Letter";
import { Finale } from "@/components/birthday/Finale";
import { MusicPlayer } from "@/components/birthday/MusicPlayer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Happy Birthday, Muriel Naadu Nartey — 5th August" },
      {
        name: "description",
        content:
          "A four-year friendship told as a birthday story: from classmates at Volta Barracks School Complex to memories, laughter and family.",
      },
      { property: "og:title", content: "Happy Birthday, Muriel Naadu Nartey" },
      {
        property: "og:description",
        content: "Four years ago, we were just classmates... a birthday story for Muriel.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BirthdayStory,
});

const STAGES = [
  { icon: "🏫", label: "Classmates", line: "Some people enter your life as classmates." },
  { icon: "🤝", label: "Friends", line: "Somewhere along the way, they become friends." },
  {
    icon: "🫂",
    label: "Family",
    line: "And eventually, that friendship becomes something that feels like family.",
  },
];

const HOME_EC = [
  { icon: "🍳", title: "The Cooking", text: "We came to cook... somehow, we also created memories." },
  { icon: "😂", title: "The Chaos", text: "Not everything went according to plan." },
  {
    icon: "🤦🏽",
    title: "The Mistakes",
    text: "Let's just say... some practicals were more practical than others.",
  },
  {
    icon: "❤️",
    title: "The Memories",
    text: "But looking back, those were some of the moments that made our friendship special.",
  },
];

const TRAITS = ["Calm.", "Reserved.", "Sociable.", "Friendly.", "Fun to be around."];

const YEARS = [
  { year: "Year 01", icon: "🏫", label: "Classmates" },
  { year: "Year 02", icon: "🤝", label: "Becoming Friends" },
  { year: "Year 03", icon: "😂", label: "Making Memories" },
  { year: "Year 04", icon: "🫂", label: "Becoming Family" },
];

function BirthdayStory() {
  const [opened, setOpened] = useState(false);

  const open = () => {
    setOpened(true);
    celebrate("burst");
    requestAnimationFrame(() => {
      document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
    });
  };

  return (
    <main className="min-h-screen">
      <Opening onOpen={open} />

      {opened && (
        <>
          {/* ── Chapter 02 · Birthday hero ─────────────────── */}
          <section id="hero" className="surface-warm relative overflow-hidden px-6 py-24 sm:py-32">
            <div aria-hidden className="pointer-events-none absolute inset-0">
              {[...Array(10)].map((_, i) => (
                <span
                  key={i}
                  className="float-soft absolute h-2 w-2 rounded-full bg-gold/35"
                  style={{
                    left: `${(i * 41) % 95}%`,
                    top: `${(i * 29) % 90}%`,
                    animationDelay: `${i * 0.9}s`,
                  }}
                />
              ))}
            </div>
            <div className="relative mx-auto grid w-full max-w-5xl items-center gap-12 md:grid-cols-2">
              <Reveal>
                <figure className="polaroid mx-auto max-w-sm rounded-sm">
                  <img
                    src={config.photos.hero}
                    alt={`Portrait of ${config.name}`}
                    width={1000}
                    height={1250}
                    className="aspect-4/5 w-full object-cover"
                  />
                  <figcaption className="hand mt-3 text-xl">{config.firstName} ✨</figcaption>
                </figure>
              </Reveal>
              <Reveal delay={150} className="text-center md:text-left">
                <span className="chapter-label">Chapter 02</span>
                <h1 className="display mt-3 text-4xl text-balance sm:text-6xl">
                  Happy Birthday, {config.name}!
                </h1>
                <p className="mt-4 text-sm tracking-[0.3em] uppercase">
                  {config.birthdayLabel} 🎂
                </p>
                <span className="gold-rule mt-6 inline-block" />
                <p className="mt-6 leading-relaxed text-muted-foreground">
                  Today isn&apos;t just about celebrating another year of your life. It&apos;s about
                  celebrating the beautiful person you are, the memories you&apos;ve created, and
                  the friendship we&apos;ve built along the way.
                </p>
              </Reveal>
            </div>
            <div className="relative mx-auto mt-16 max-w-5xl">
              <Countdown />
            </div>
          </section>

          {/* ── Chapter 03 · Where it began ────────────────── */}
          <Chapter number="03" title="It Started Here...">
            <div className="grid items-center gap-10 md:grid-cols-5">
              <Reveal className="md:col-span-3">
                <figure className="overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-card)]">
                  <img
                    src={config.photos.school}
                    alt={config.school}
                    loading="lazy"
                    width={1400}
                    height={900}
                    className="w-full object-cover"
                  />
                  <figcaption className="hand bg-card px-4 py-3 text-lg">{config.school}</figcaption>
                </figure>
              </Reveal>
              <Reveal delay={150} className="space-y-5 md:col-span-2">
                <p className="display text-2xl leading-snug">
                  Four years ago, we were just classmates. Two people sharing the same school, the
                  same classrooms, and the same everyday life.
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  Little did we know that those ordinary school days would become the beginning of a
                  friendship filled with some of the funniest, strangest, most random, and
                  unforgettable memories.
                </p>
              </Reveal>
            </div>
          </Chapter>

          {/* ── Chapter 04 · Classmates → Friends → Family ── */}
          <Chapter number="04" title="From Classmates to Friends" dark>
            <ol className="grid gap-6 sm:grid-cols-3">
              {STAGES.map((s, i) => (
                <Reveal key={s.label} as="li" delay={i * 220}>
                  <div className="flex h-full flex-col items-center gap-4 rounded-2xl border border-gold/25 bg-cream/5 px-6 py-10 text-center">
                    <span className="text-4xl">{s.icon}</span>
                    <span className="chapter-label text-gold">{s.label}</span>
                    <p className="display text-xl text-cream/90">{s.line}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </Chapter>

          {/* ── Chapter 05 · Memory wall ───────────────────── */}
          <Chapter number="05" title="The Good. The Bad. The Random.">
            <Gallery />
          </Chapter>

          {/* ── Chapter 06 · Home Economics ────────────────── */}
          <Chapter number="06" title="The Home Economics Era">
            <Reveal className="mx-auto max-w-2xl text-center">
              <p className="display text-2xl leading-snug">
                If there is one thing I know we&apos;ll never forget, it&apos;s those Home Economics
                practicals.
              </p>
            </Reveal>
            <Reveal delay={120} className="mt-10">
              <img
                src={config.photos.homeEconomics}
                alt="Home Economics practicals"
                loading="lazy"
                width={1200}
                height={900}
                className="aspect-16/9 w-full rounded-2xl border border-border object-cover shadow-[var(--shadow-card)]"
              />
            </Reveal>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {HOME_EC.map((c, i) => (
                <Reveal key={c.title} delay={i * 130}>
                  <div className="h-full rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)] transition-transform duration-500 hover:-translate-y-1">
                    <span className="text-3xl">{c.icon}</span>
                    <h3 className="display mt-3 text-2xl">{c.title}</h3>
                    <p className="mt-2 leading-relaxed text-muted-foreground">{c.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Chapter>

          {/* ── Chapter 07 · Who Muriel is ─────────────────── */}
          <Chapter number="07" title="The Person Behind the Memories" dark>
            <div className="grid items-center gap-12 md:grid-cols-2">
              <Reveal>
                <ul className="space-y-4">
                  {TRAITS.map((t, i) => (
                    <Reveal key={t} as="li" delay={i * 180}>
                      <span className="display text-3xl text-gold sm:text-4xl">{t}</span>
                    </Reveal>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={150} className="space-y-5 text-cream/80">
                <p className="leading-relaxed">
                  You&apos;re the kind of person who doesn&apos;t have to try too hard to make
                  people feel comfortable around you.
                </p>
                <p className="leading-relaxed">
                  You have a calmness about you, but there&apos;s also a side of you that knows how
                  to have fun and make the simplest moments memorable.
                </p>
                <p className="leading-relaxed">
                  And perhaps one of the things that makes you special is how friendly you are to
                  everyone.
                </p>
                <p className="hand text-2xl text-lavender">
                  Calm at heart, reserved by nature, friendly to everyone.
                </p>
              </Reveal>
            </div>
          </Chapter>

          {/* ── Chapter 08 · Timeline ──────────────────────── */}
          <Chapter number="08" title="4 Years. Countless Memories.">
            <ol className="relative grid gap-8 sm:grid-cols-4">
              <span
                aria-hidden
                className="absolute top-8 right-4 left-4 hidden h-px bg-gold/40 sm:block"
              />
              {YEARS.map((y, i) => (
                <Reveal key={y.year} as="li" delay={i * 180}>
                  <div className="relative flex flex-col items-center gap-3 text-center">
                    <span className="flex h-16 w-16 items-center justify-center rounded-full border border-gold/50 bg-card text-2xl shadow-[var(--shadow-card)]">
                      {y.icon}
                    </span>
                    <span className="chapter-label">{y.year}</span>
                    <span className="display text-xl">{y.label}</span>
                  </div>
                </Reveal>
              ))}
            </ol>
            <Reveal delay={200} className="mx-auto mt-14 max-w-xl space-y-3 text-center">
              <p className="display text-2xl">Four years later, here we are.</p>
              <p className="leading-relaxed text-muted-foreground">
                Still friends. Still making memories. Still finding reasons to laugh at the random
                things life throws at us.
              </p>
            </Reveal>
          </Chapter>

          {/* ── Chapter 09 · The letter ────────────────────── */}
          <Chapter number="09" title="The Birthday Letter">
            <Letter />
          </Chapter>

          {/* ── Chapter 10 · Finale ────────────────────────── */}
          <Finale />
        </>
      )}

      <MusicPlayer autoStart={opened} />
    </main>
  );
}
