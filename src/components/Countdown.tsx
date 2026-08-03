import { useEffect, useState } from "react";
import { config } from "@/data/content";

function nextBirthday(now: Date) {
  const year = now.getFullYear();
  const start = new Date(year, config.birthdayMonth - 1, config.birthdayDay, 0, 0, 0);
  const end = new Date(year, config.birthdayMonth - 1, config.birthdayDay, 23, 59, 59);
  if (now <= end) {
    return { target: start, isToday: now >= start };
  }
  return {
    target: new Date(year + 1, config.birthdayMonth - 1, config.birthdayDay, 0, 0, 0),
    isToday: false,
  };
}

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState(() => computeTimeLeft());

  function computeTimeLeft() {
    const now = new Date();
    const { target, isToday } = nextBirthday(now);

    if (isToday) {
      return { isToday: true };
    }

    const diff = Math.max(0, target.getTime() - now.getTime());
    const units = [
      ["Days", Math.floor(diff / 86400000)],
      ["Hours", Math.floor((diff / 3600000) % 24)],
      ["Minutes", Math.floor((diff / 60000) % 60)],
      ["Seconds", Math.floor((diff / 1000) % 60)],
    ];
    const message =
      target.getFullYear() > now.getFullYear()
        ? "The celebration may be over, but the memories continue."
        : "Something special is coming...";

    return { isToday: false, units, message };
  }

  useEffect(() => {
    const interval = setInterval(() => setTimeLeft(computeTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  if (timeLeft.isToday) {
    return (
      <p className="display lead gold">
        TODAY IS {config.firstName.toUpperCase()}&apos;S DAY! &#127881;
      </p>
    );
  }

  return (
    <>
      <p className="hand lead">{timeLeft.message}</p>
      <div className="countdown-grid">
        {timeLeft.units!.map(([label, value]) => (
          <div key={label} className="countdown-card">
            <strong>{String(value).padStart(2, "0")}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </>
  );
}
