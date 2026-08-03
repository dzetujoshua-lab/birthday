import { useEffect, useRef, useState } from "react";
import { config } from "@/data/content";
import { Sparkles } from "@/components/Sparkles";
import { Typewriter } from "@/components/Typewriter";
import { celebrate } from "@/utils/confetti";

interface OpeningProps {
  storyOpen: boolean;
  onOpenStory: () => void;
}

export function Opening({ storyOpen, onOpenStory }: OpeningProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playVideos = () => {
      video.muted = true;
      if (video.paused) {
        video.play().catch(() => {});
      }
    };

    video.addEventListener("loadeddata", playVideos, { once: true });
    video.addEventListener("canplay", playVideos, { once: true });
    playVideos();

    const onPointerDown = () => playVideos();
    const onTouchStart = () => playVideos();
    const onVisibilityChange = () => {
      if (!document.hidden) playVideos();
    };

    window.addEventListener("pointerdown", onPointerDown, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      video.removeEventListener("loadeddata", playVideos);
      video.removeEventListener("canplay", playVideos);
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("touchstart", onTouchStart);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  const handleOpenStory = () => {
    onOpenStory();
    celebrate("burst");
  };

  return (
    <section className="opening surface-dusk" aria-label="Opening">
      <video
        ref={videoRef}
        className="video-bg"
        data-video="opening"
        src="/videos/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
        disablePictureInPicture
        preload="auto"
        aria-hidden="true"
      />
      <Sparkles count={14} />
      <div className="opening-content">
        <span className="chapter-label light">Chapter 01</span>
        <Typewriter lines={config.openingLines} onComplete={() => setReady(true)} />
        <button
          className={`primary-button ${ready ? "ready" : "hidden-start"}`}
          type="button"
          onClick={handleOpenStory}
        >
          Open Your Birthday Story &#10024;
        </button>
        <p className={`hand faded ${ready ? "ready" : ""}`}>for {config.firstName}</p>
      </div>
    </section>
  );
}
