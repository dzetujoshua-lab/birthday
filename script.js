const config = {
  firstName: "Muriel",
  birthdayMonth: 8,
  birthdayDay: 5,
  openingLines: [
    "Four years ago, we were just classmates...",
    "I didn't know we'd make this many memories.",
    "And I definitely didn't know you'd become family.",
  ],
};

const memories = [
  { caption: "The bad days.", note: "we got through them together", src: "/public/images/bad days.png" },
  { caption: "Favorites", note: "some of our favorites", src: "/public/images/favorites.png" },
  { caption: "Random moments.", note: "no context needed", src: "/public/images/random-moments.png" },
  { caption: "School days.", note: "ordinary days that turned out to be everything", src: "/public/images/school-days.png" },
  { caption: "Memories that make no sense.", note: "iykyk", src: "/public/images/memories that does not make sense.png" },
];

const tilts = ["-2.5deg", "1.8deg", "-1.2deg", "2.4deg", "-1.8deg", "1.4deg"];
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function celebrate(mode = "gentle") {
  if (typeof window.confetti !== "function" || prefersReducedMotion) return;

  if (mode === "burst") {
    window.confetti({ particleCount: 90, spread: 70, origin: { y: 0.68 }, colors: ["#c99a3f", "#d9bee7", "#f1cfcb", "#fbf5e8"] });
    window.confetti({ particleCount: 45, angle: 60, spread: 55, origin: { x: 0, y: 0.74 }, colors: ["#c99a3f", "#d9bee7"] });
    window.confetti({ particleCount: 45, angle: 120, spread: 55, origin: { x: 1, y: 0.74 }, colors: ["#c99a3f", "#f1cfcb"] });
    return;
  }

  window.confetti({ particleCount: 38, spread: 52, origin: { y: 0.72 }, colors: ["#c99a3f", "#d9bee7", "#fbf5e8"] });
}

function createSparkles() {
  document.querySelectorAll(".sparkles").forEach((container) => {
    const count = Number(container.dataset.count || 10);
    for (let i = 0; i < count; i += 1) {
      const dot = document.createElement("span");
      dot.className = "sparkle";
      const size = 2 + (i % 3);
      dot.style.width = `${size}px`;
      dot.style.height = `${size}px`;
      dot.style.left = `${(i * 37) % 96}%`;
      dot.style.top = `${(i * 53) % 94}%`;
      dot.style.animationDelay = `${i * 0.7}s`;
      container.appendChild(dot);
    }
  });
}

function setupHeroVideos() {
  const videos = Array.from(document.querySelectorAll(".opening .video-bg"));
  if (!videos.length) return;

  const playVideos = () => {
    videos.forEach((element) => {
      const video = element;
      if (!(video instanceof HTMLVideoElement)) return;
      video.muted = true;
      if (video.paused) {
        video.play().catch(() => {});
      }
    });
  };

  videos.forEach((video) => {
    video.addEventListener("loadeddata", playVideos, { once: true });
    video.addEventListener("canplay", playVideos, { once: true });
  });

  playVideos();
  window.addEventListener("pointerdown", playVideos, { passive: true });
  window.addEventListener("touchstart", playVideos, { passive: true });
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) playVideos();
  });
}

function typeOpening() {
  const holder = document.querySelector("#typewriter");
  const button = document.querySelector("#openStory");
  const name = document.querySelector("#openingName");
  if (!holder || !button || !name) return;

  let lineIndex = 0;

  const showReady = () => {
    button.classList.add("ready");
    name.classList.add("ready");
  };

  const typeLine = () => {
    if (lineIndex >= config.openingLines.length) {
      showReady();
      return;
    }

    const text = config.openingLines[lineIndex];
    const line = document.createElement("p");
    line.className = "type-line";
    holder.appendChild(line);

    if (prefersReducedMotion) {
      line.textContent = text;
      lineIndex += 1;
      setTimeout(typeLine, 500);
      return;
    }

    let cursor = 0;
    const caret = document.createElement("span");
    caret.className = "caret";
    caret.textContent = "|";
    line.appendChild(caret);

    const id = setInterval(() => {
      cursor += 1;
      line.textContent = text.slice(0, cursor);
      if (cursor < text.length) {
        line.appendChild(caret);
      }
      if (cursor >= text.length) {
        clearInterval(id);
        line.textContent = text;
        lineIndex += 1;
        setTimeout(typeLine, 850);
      }
    }, 45);
  };

  typeLine();
}

function setupOpenStory() {
  const button = document.querySelector("#openStory");
  const story = document.querySelector("#story");
  if (!button || !story) return;

  button.addEventListener("click", () => {
    story.classList.remove("hidden");
    celebrate("burst");
    requestAnimationFrame(() => {
      document.querySelector("#hero")?.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth" });
      revealVisible();
    });
  });
}

function nextBirthday(now) {
  const year = now.getFullYear();
  const start = new Date(year, config.birthdayMonth - 1, config.birthdayDay, 0, 0, 0);
  const end = new Date(year, config.birthdayMonth - 1, config.birthdayDay, 23, 59, 59);
  if (now <= end) {
    return { target: start, isToday: now >= start };
  }
  return { target: new Date(year + 1, config.birthdayMonth - 1, config.birthdayDay, 0, 0, 0), isToday: false };
}

function renderCountdown() {
  const el = document.querySelector("#countdown");
  if (!el) return;

  const now = new Date();
  const { target, isToday } = nextBirthday(now);

  if (isToday) {
    el.innerHTML = `<p class="display lead gold">TODAY IS ${config.firstName.toUpperCase()}'S DAY! &#127881;</p>`;
    return;
  }

  const diff = Math.max(0, target.getTime() - now.getTime());
  const units = [
    ["Days", Math.floor(diff / 86400000)],
    ["Hours", Math.floor((diff / 3600000) % 24)],
    ["Minutes", Math.floor((diff / 60000) % 60)],
    ["Seconds", Math.floor((diff / 1000) % 60)],
  ];
  const message = target.getFullYear() > now.getFullYear()
    ? "The celebration may be over, but the memories continue."
    : "Something special is coming...";

  el.innerHTML = `
    <p class="hand lead">${message}</p>
    <div class="countdown-grid">
      ${units.map(([label, value]) => `
        <div class="countdown-card">
          <strong>${String(value).padStart(2, "0")}</strong>
          <span>${label}</span>
        </div>
      `).join("")}
    </div>
  `;
}

function setupCountdown() {
  renderCountdown();
  setInterval(renderCountdown, 1000);
}

function setupReveals() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const delay = Number(entry.target.dataset.delay || 0);
      setTimeout(() => entry.target.classList.add("in"), delay);
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.18 });

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

function revealVisible() {
  document.querySelectorAll(".reveal").forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      const delay = Number(el.dataset.delay || 0);
      setTimeout(() => el.classList.add("in"), delay);
    }
  });
}

function setupGallery() {
  const gallery = document.querySelector("#gallery");
  const lightbox = document.querySelector("#lightbox");
  if (!gallery || !lightbox) return;

  let openIndex = null;

  const memoryMarkup = (memory) => {
    if (memory.src) {
      return `<img src="${memory.src}" alt="${memory.caption}" />`;
    }
    return `<div><span class="camera">&#128247;</span><small class="chapter-label">Photo memory</small><p class="hand">${memory.note}</p></div>`;
  };

  const closeLightbox = () => {
    openIndex = null;
    lightbox.classList.add("hidden");
    lightbox.innerHTML = "";
  };

  const showLightbox = (index) => {
    openIndex = (index + memories.length) % memories.length;
    const memory = memories[openIndex];
    lightbox.innerHTML = `
      <figure class="lightbox-card">
        <div class="lightbox-photo">${memoryMarkup(memory)}</div>
        <figcaption class="lightbox-caption">
          <span>${memory.caption}</span>
          <button type="button" data-close>Close</button>
        </figcaption>
      </figure>
    `;
    lightbox.classList.remove("hidden");
    lightbox.querySelector("[data-close]")?.focus();
  };

  gallery.innerHTML = memories.map((memory, index) => `
    <button class="gallery-button reveal" type="button" style="rotate: ${tilts[index % tilts.length]};" data-index="${index}" aria-label="Open memory: ${memory.caption}">
      <div class="gallery-photo">${memoryMarkup(memory)}</div>
      <p class="gallery-caption">${memory.caption}</p>
    </button>
  `).join("");

  gallery.addEventListener("click", (event) => {
    const button = event.target.closest(".gallery-button");
    if (!button) return;
    showLightbox(Number(button.dataset.index));
  });

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox || event.target.matches("[data-close]")) {
      closeLightbox();
    }
  });

  window.addEventListener("keydown", (event) => {
    if (openIndex === null) return;
    if (event.key === "Escape") closeLightbox();
    if (event.key === "ArrowRight") showLightbox(openIndex + 1);
    if (event.key === "ArrowLeft") showLightbox(openIndex - 1);
  });
}

function setupLetter() {
  const button = document.querySelector("#openLetter");
  const intro = document.querySelector("#letterIntro");
  const letter = document.querySelector("#letter");
  if (!button || !intro || !letter) return;

  button.addEventListener("click", () => {
    intro.classList.add("hidden");
    letter.classList.remove("hidden");
    button.setAttribute("aria-expanded", "true");
    celebrate("gentle");
  });
}

function setupFinale() {
  const finale = document.querySelector("#finale");
  if (!finale) return;

  const icons = finale.querySelector(".floating-icons");
  const symbols = ["&#127880;", "&#10084;", "&#10024;"];
  if (icons) {
    for (let i = 0; i < 16; i += 1) {
      const icon = document.createElement("span");
      icon.className = "float-icon";
      icon.innerHTML = symbols[i % symbols.length];
      icon.style.left = `${(i * 61) % 96}%`;
      icon.style.animationDuration = `${14 + (i % 6) * 3}s`;
      icon.style.animationDelay = `${i * 1.3}s`;
      icons.appendChild(icon);
    }
  }

  let played = false;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting || played) return;
      played = true;
      celebrate("burst");
      setTimeout(() => document.querySelector("#finalOpening")?.classList.add("show"), 900);
      setTimeout(() => document.querySelector("#finalLine")?.classList.add("show"), 3600);
      setTimeout(() => {
        document.querySelector("#finalSignature")?.classList.add("show");
        celebrate("gentle");
      }, 6100);
      observer.unobserve(finale);
    });
  }, { threshold: 0.35 });

  observer.observe(finale);
}

document.addEventListener("DOMContentLoaded", () => {
  createSparkles();
  setupHeroVideos();
  setupGallery();
  setupReveals();
  typeOpening();
  setupOpenStory();
  setupCountdown();
  setupLetter();
  setupFinale();
});
