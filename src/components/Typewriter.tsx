import { useEffect, useState } from "react";
import { prefersReducedMotion } from "@/utils/confetti";

interface TypewriterProps {
  lines: string[];
  onComplete?: () => void;
}

export function Typewriter({ lines, onComplete }: TypewriterProps) {
  const [completedLines, setCompletedLines] = useState<string[]>([]);
  const [currentText, setCurrentText] = useState("");
  const reduced = prefersReducedMotion();

  useEffect(() => {
    if (completedLines.length >= lines.length) {
      onComplete?.();
      return;
    }

    const line = lines[completedLines.length];

    if (reduced) {
      setCompletedLines((prev) => [...prev, line]);
      return;
    }

    let cursor = 0;
    const interval = setInterval(() => {
      cursor += 1;
      setCurrentText(line.slice(0, cursor));
      if (cursor >= line.length) {
        clearInterval(interval);
        setTimeout(() => {
          setCompletedLines((prev) => [...prev, line]);
          setCurrentText("");
        }, 850);
      }
    }, 45);

    return () => clearInterval(interval);
  }, [completedLines, lines, reduced, onComplete]);

  const currentIndex = completedLines.length;
  const isComplete = currentIndex >= lines.length;

  return (
    <div className="typewriter" aria-live="polite">
      {completedLines.map((line, i) => (
        <p key={i} className="type-line">
          {line}
        </p>
      ))}
      {!isComplete && (
        <p className="type-line">
          {currentText}
          <span className="caret" aria-hidden="true">
            |
          </span>
        </p>
      )}
    </div>
  );
}
