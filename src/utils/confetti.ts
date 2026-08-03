import confetti from "canvas-confetti";

export const prefersReducedMotion = (): boolean => {
  return (
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
};

export function celebrate(mode = "gentle"): void {
  if (typeof window === "undefined" || prefersReducedMotion()) return;

  const colors = ["#c99a3f", "#d9bee7", "#f1cfcb", "#fbf5e8"];

  if (mode === "burst") {
    confetti({ particleCount: 90, spread: 70, origin: { y: 0.68 }, colors });
    confetti({
      particleCount: 45,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.74 },
      colors: ["#c99a3f", "#d9bee7"],
    });
    confetti({
      particleCount: 45,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.74 },
      colors: ["#c99a3f", "#f1cfcb"],
    });
    return;
  }

  confetti({
    particleCount: 38,
    spread: 52,
    origin: { y: 0.72 },
    colors: ["#c99a3f", "#d9bee7", "#fbf5e8"],
  });
}
