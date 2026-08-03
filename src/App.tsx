import { useRef, useState } from "react";
import { Opening } from "@/components/Opening";
import { Hero } from "@/components/Hero";
import { Chapters } from "@/components/Chapters";
import { Finale } from "@/components/Finale";
import { Lightbox } from "@/components/Lightbox";
import { memories } from "@/data/content";
import { celebrate, prefersReducedMotion } from "@/utils/confetti";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const memoryCount = memories.length;

export function App() {
  const [storyOpen, setStoryOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const revealVisible = useScrollReveal(storyRef);

  const openStory = () => {
    setStoryOpen(true);
    celebrate("burst");
    const hero = document.getElementById("hero");
    if (hero) {
      hero.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth" });
    }
    revealVisible();
  };

  const closeLightbox = () => setLightboxIndex(null);
  const nextLightbox = () => setLightboxIndex((i) => (i === null ? null : (i + 1) % memoryCount));
  const prevLightbox = () =>
    setLightboxIndex((i) => (i === null ? null : (i - 1 + memoryCount) % memoryCount));

  return (
    <>
      <main>
        <Opening storyOpen={storyOpen} onOpenStory={openStory} />

        <div ref={storyRef} className={`story ${storyOpen ? "" : "hidden"}`}>
          <Hero />
          <Chapters onImageClick={setLightboxIndex} />
          <Finale />
        </div>
      </main>

      <Lightbox
        index={lightboxIndex}
        onClose={closeLightbox}
        onPrev={prevLightbox}
        onNext={nextLightbox}
      />
    </>
  );
}
