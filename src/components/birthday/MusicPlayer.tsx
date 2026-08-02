import { useEffect, useRef, useState } from "react";
import { config } from "@/lib/birthday-config";

export function MusicPlayer({ autoStart }: { autoStart: boolean }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    a.volume = volume;
    a.muted = muted;
  }, [volume, muted]);

  useEffect(() => {
    if (!autoStart) return;
    const a = audioRef.current;
    if (!a) return;
    a.play()
      .then(() => setPlaying(true))
      .catch(() => setPlaying(false)); // browser blocked autoplay — stay silent
  }, [autoStart]);

  if (!config.musicSrc) return null;

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    if (a.paused) {
      a.play()
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false));
    } else {
      a.pause();
      setPlaying(false);
    }
  };

  return (
    <div className="fixed right-4 bottom-4 z-40 flex items-center gap-3 rounded-full border border-border bg-card/90 px-4 py-2 shadow-[var(--shadow-card)] backdrop-blur">
      <audio ref={audioRef} src={config.musicSrc} loop preload="none" />
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Pause music" : "Play music"}
        className="text-lg"
      >
        {playing ? "⏸" : "▶️"}
      </button>
      <button
        type="button"
        onClick={() => setMuted((m) => !m)}
        aria-label={muted ? "Unmute" : "Mute"}
        className="text-lg"
      >
        {muted ? "🔇" : "🔊"}
      </button>
      <label className="sr-only" htmlFor="volume">
        Volume
      </label>
      <input
        id="volume"
        type="range"
        min={0}
        max={1}
        step={0.05}
        value={volume}
        onChange={(e) => setVolume(Number(e.target.value))}
        className="h-1 w-20 accent-[var(--gold)]"
      />
      <span className="hidden text-xs tracking-widest uppercase sm:inline">
        🎵 {config.musicTitle}
      </span>
    </div>
  );
}
