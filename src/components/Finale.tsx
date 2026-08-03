import { useEffect, useRef, useState } from "react";
import { wishes, finalLines, floatIcons } from "@/data/content";
import { celebrate, prefersReducedMotion } from "@/utils/confetti";

export function Finale() {
  const ref = useRef<HTMLElement>(null);
  const [finalOpening, setFinalOpening] = useState(false);
  const [finalLine, setFinalLine] = useState(false);
  const [finalSignature, setFinalSignature] = useState(false);
  const [observed, setObserved] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduced = prefersReducedMotion();

    if (reduced) {
      setFinalOpening(true);
      setFinalLine(true);
      setFinalSignature(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !observed) {
            setObserved(true);
            celebrate("burst");

            setTimeout(() => setFinalOpening(true), 900);
            setTimeout(() => setFinalLine(true), 3600);
            setTimeout(() => {
              setFinalSignature(true);
              celebrate("gentle");
            }, 6100);

            observer.unobserve(node);
          }
        });
      },
      { threshold: 0.35 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [observed]);

  const floatingIcons = Array.from({ length: 16 }, (_, i) => ({
    key: i,
    icon: floatIcons[i % floatIcons.length],
    left: (i * 61) % 96,
    duration: 14 + (i % 6) * 3,
    delay: i * 1.3,
  }));

  return (
    <section id="finale" ref={ref} className="finale surface-dusk" aria-label="Final celebration">
      <div className="floating-icons" aria-hidden="true">
        {floatingIcons.map((item) => (
          <span
            key={item.key}
            className="float-icon"
            dangerouslySetInnerHTML={{ __html: item.icon }}
            style={{
              left: `${item.left}%`,
              animationDuration: `${item.duration}s`,
              animationDelay: `${item.delay}s`,
            }}
          />
        ))}
      </div>
      <div className="content finale-content">
        <h2 className="reveal">HAPPY BIRTHDAY, MURIEL!</h2>
        <p className="date-line reveal" data-delay="160">
          5th August &#127874;
        </p>
        <ul className="wishes">
          {wishes.map((wish) => (
            <li key={wish.text} className="reveal" data-delay={wish.delay}>
              {wish.text}
            </li>
          ))}
        </ul>
        <p className="narrow reveal" data-delay="200">
          May the years ahead be even more beautiful than the four years we&apos;ve already shared.
        </p>
        <div className="final-lines">
          <p id="finalOpening" className={`display staged ${finalOpening ? "show" : ""}`}>
            {finalLines.opening}
          </p>
          <p id="finalLine" className={`display staged gold glow ${finalLine ? "show" : ""}`}>
            {finalLines.closing}
          </p>
        </div>
        <p id="finalSignature" className={`hand staged ${finalSignature ? "show" : ""}`}>
          Happy Birthday, Muriel &#10084;
        </p>
      </div>
    </section>
  );
}
