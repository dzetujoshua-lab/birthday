import { useEffect, useState } from "react";
import { config } from "@/lib/birthday-config";

function nextBirthday(now: Date) {
  const y = now.getFullYear();
  const thisYear = new Date(y, config.birthdayMonth - 1, config.birthdayDay, 0, 0, 0);
  const endOfDay = new Date(y, config.birthdayMonth - 1, config.birthdayDay, 23, 59, 59);
  if (now <= endOfDay) return { target: thisYear, isToday: now >= thisYear };
  return { target: new Date(y + 1, config.birthdayMonth - 1, config.birthdayDay), isToday: false };
}

export function Countdown() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  if (!now) return <div className="min-h-[9rem]" aria-hidden />;

  const { target, isToday } = nextBirthday(now);
  const diff = Math.max(0, target.getTime() - now.getTime());
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff / 3600000) % 24);
  const minutes = Math.floor((diff / 60000) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  const passedThisYear =
    !isToday && target.getFullYear() > now.getFullYear() ? "The celebration may be over, but the memories continue." : "Something special is coming...";

  const units = [
    { label: "Days", value: days },
    { label: "Hours", value: hours },
    { label: "Minutes", value: minutes },
    { label: "Seconds", value: seconds },
  ];

  return (
    <div className="mx-auto w-full max-w-2xl text-center" aria-live="polite">
      {isToday ? (
        <p className="display text-3xl text-gold sm:text-4xl">TODAY IS {config.firstName.toUpperCase()}&apos;S DAY! 🎉</p>
      ) : (
        <>
          <p className="hand text-2xl text-muted-foreground">{passedThisYear}</p>
          <div className="mt-6 grid grid-cols-4 gap-2 sm:gap-4">
            {units.map((u) => (
              <div
                key={u.label}
                className="rounded-2xl border border-border bg-card px-2 py-5 shadow-[var(--shadow-card)]"
              >
                <div className="display text-2xl tabular-nums sm:text-4xl">
                  {String(u.value).padStart(2, "0")}
                </div>
                <div className="chapter-label mt-1 text-[0.6rem]">{u.label}</div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
