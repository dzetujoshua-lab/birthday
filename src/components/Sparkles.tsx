import { useEffect, useState } from "react";

interface SparklesProps {
  count?: number;
  warm?: boolean;
  className?: string;
}

export function Sparkles({ count = 10, warm = false, className = "" }: SparklesProps) {
  const items = Array.from({ length: count }, (_, i) => ({
    key: i,
    size: 2 + (i % 3),
    left: (i * 37) % 96,
    top: (i * 53) % 94,
    delay: i * 700,
  }));

  return (
    <div
      className={`sparkles${warm ? " warm" : ""}${className ? " " + className : ""}`}
      aria-hidden="true"
    >
      {items.map((item) => (
        <span
          key={item.key}
          className="sparkle"
          style={{
            width: `${item.size}px`,
            height: `${item.size}px`,
            left: `${item.left}%`,
            top: `${item.top}%`,
            animationDelay: `${item.delay}ms`,
          }}
        />
      ))}
    </div>
  );
}
