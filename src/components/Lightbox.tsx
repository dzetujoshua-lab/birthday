import { useEffect } from "react";
import type { MouseEvent } from "react";
import { memories } from "@/data/content";

interface LightboxProps {
  index: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export function Lightbox({ index, onClose, onPrev, onNext }: LightboxProps) {
  useEffect(() => {
    if (index === null) return;

    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [index, onClose, onPrev, onNext]);

  if (index === null) return null;

  const memory = memories[index];

  const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Memory viewer"
      onClick={handleBackdropClick}
    >
      <figure className="lightbox-card">
        <div className="lightbox-photo">
          <img src={memory.src} alt={memory.caption} />
          <span className="camera" aria-hidden="true">
            &#128247;
          </span>
          <small className="chapter-label">Photo memory</small>
          <p className="hand">{memory.note}</p>
        </div>
        <figcaption className="lightbox-caption">
          <span>{memory.caption}</span>
          <button type="button" onClick={onClose}>
            Close
          </button>
        </figcaption>
      </figure>
    </div>
  );
}
