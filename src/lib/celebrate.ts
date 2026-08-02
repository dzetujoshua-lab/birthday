import { prefersReducedMotion } from "@/hooks/use-reveal";

const COLORS = ["#e9d8a6", "#c9a84c", "#cbbfe6", "#f6e7d8", "#2b2f5a"];

export async function celebrate(intensity: "burst" | "gentle" = "burst") {
  if (typeof window === "undefined" || prefersReducedMotion()) return;
  const { default: confetti } = await import("canvas-confetti");

  if (intensity === "gentle") {
    confetti({
      particleCount: 40,
      spread: 90,
      startVelocity: 22,
      gravity: 0.5,
      scalar: 0.8,
      ticks: 260,
      origin: { y: 0.4 },
      colors: COLORS,
    });
    return;
  }

  const end = Date.now() + 1400;
  confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 }, colors: COLORS });
  const frame = () => {
    confetti({ particleCount: 4, angle: 60, spread: 60, origin: { x: 0, y: 0.7 }, colors: COLORS });
    confetti({ particleCount: 4, angle: 120, spread: 60, origin: { x: 1, y: 0.7 }, colors: COLORS });
    if (Date.now() < end) requestAnimationFrame(frame);
  };
  frame();
}
