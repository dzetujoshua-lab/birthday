import { useEffect } from "react";
import type { RefObject } from "react";

export function useScrollReveal(containerRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const elements = container.querySelectorAll<HTMLElement>(".reveal:not(.in)");
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = Number(el.dataset.delay || 0);
            setTimeout(() => el.classList.add("in"), delay);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.18 },
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [containerRef]);

  const revealVisible = () => {
    const container = containerRef.current;
    if (!container) return;
    container.querySelectorAll<HTMLElement>(".reveal:not(.in)").forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const delay = Number(el.dataset.delay || 0);
        setTimeout(() => el.classList.add("in"), delay);
      }
    });
  };

  return revealVisible;
}
