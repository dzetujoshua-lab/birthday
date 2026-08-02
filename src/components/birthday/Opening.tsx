import { useCallback, useEffect, useRef, useState } from "react";
import { prefersReducedMotion } from "@/hooks/use-reveal";
import { config } from "@/lib/birthday-config";
import heroVideo from "@/assets/videos/hero.mp4";

const LINES = [
  config.openingLine,
  "I didn't know we'd make this many memories.",
  "And I definitely didn't know you'd become family.",
];

function TypeLine({ text, active, onDone }: { text: string; active: boolean; onDone: () => void }) {
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!active) return;
    if (prefersReducedMotion()) {
      setN(text.length);
      const t = setTimeout(onDone, 900);
      return () => clearTimeout(t);
    }
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setN(i);
      if (i >= text.length) {
        clearInterval(id);
        setTimeout(onDone, 1100);
      }
    }, 45);
    return () => clearInterval(id);
  }, [active, text, onDone]);

  if (!active && n === 0) return null;

  return (
    <p className="display text-balance text-2xl leading-snug text-cream sm:text-4xl md:text-5xl">
      {text.slice(0, n)}
      {n < text.length && <span className="caret text-gold">|</span>}
    </p>
  );
}

export function Opening({ onOpen }: { onOpen: () => void }) {
  const [step, setStep] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const done = step >= LINES.length;

  const playHeroVideo = useCallback(() => {
    const video = videoRef.current;
    if (!video || !video.paused) return;
    void video.play().catch(() => undefined);
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(playHeroVideo, 180);
    const handleInteraction = () => playHeroVideo();
    const handleVisibility = () => {
      if (!document.hidden) playHeroVideo();
    };

    window.addEventListener("pointerdown", handleInteraction, { passive: true });
    window.addEventListener("touchstart", handleInteraction, { passive: true });
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("pointerdown", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [playHeroVideo]);

  return (
    <section
      aria-label="Opening"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-6 py-24 text-cream"
    >
      {/* Full-bleed background video — first in DOM so it paints lowest */}
      <video
        ref={videoRef}
        className="video-bg pointer-events-none"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
        disablePictureInPicture
        preload="auto"
        onCanPlay={playHeroVideo}
        onLoadedData={playHeroVideo}
        aria-hidden="true"
      />
      {/* Very light scrim so text stays readable without hiding the video */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-10 bg-ink/10" />
      {/* Floating gold sparkles */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-20">
        {[...Array(14)].map((_, i) => (
          <span
            key={i}
            className="float-soft absolute rounded-full bg-gold/40"
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 53) % 100}%`,
              width: `${2 + (i % 3)}px`,
              height: `${2 + (i % 3)}px`,
              animationDelay: `${i * 0.7}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-30 mx-auto flex w-full max-w-3xl flex-col items-center gap-6 text-center">
        <span className="chapter-label text-lavender/80">Chapter 01</span>
        <div className="flex min-h-[9rem] flex-col justify-center gap-5 sm:min-h-[13rem]">
          {LINES.map((line, i) => (
            <TypeLine
              key={line}
              text={line}
              active={step >= i}
              onDone={() => setStep((s) => (s === i ? s + 1 : s))}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={onOpen}
          className={`mt-6 rounded-full border border-gold/60 bg-gold/10 px-8 py-4 font-sans text-sm tracking-[0.18em] text-cream uppercase transition-all duration-700 hover:bg-gold/25 focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none ${
            done ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
          }`}
        >
          Open Your Birthday Story ✨
        </button>
        <p
          className={`hand text-lg text-lavender/70 transition-opacity duration-1000 ${done ? "opacity-100" : "opacity-0"}`}
        >
          for {config.firstName}
        </p>
      </div>
    </section>
  );
}
