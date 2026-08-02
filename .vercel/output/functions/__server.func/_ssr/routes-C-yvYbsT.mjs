import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-C-yvYbsT.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* ─────────────────────────────────────────────────────────────
*  EDIT EVERYTHING HERE
*  Names, dates, photos, music and all personal messages live in
*  this single file. Replace the images in src/assets/images/ with
*  real photos (keep the same file names) and they appear instantly.
* ─────────────────────────────────────────────────────────────
*/
var config = {
	name: "Muriel Naadu Nartey",
	firstName: "Muriel",
	birthdayLabel: "5th August",
	birthdayMonth: 8,
	birthdayDay: 5,
	school: "Volta Barracks School Complex",
	yearsOfFriendship: 4,
	/** Opening line — must stay first. */
	openingLine: "Four years ago, we were just classmates...",
	/** Final line — must stay last. */
	finalLine: "...and somehow, along the way, we became family.",
	/** Drop an mp3 in /public and set the path, e.g. "/music/soundtrack.mp3".
	*  Leave empty to hide the player entirely. */
	musicSrc: "",
	musicTitle: "Our Birthday Soundtrack",
	photos: {
		hero: "/assets/muriel-hero-D8oUV2xU.jpg",
		school: "/assets/school-DfX-XT9l.jpg",
		homeEconomics: "/assets/home-economics-01-B42z8Z8Y.jpg"
	}
};
var memories = [
	{
		caption: "The bad days.",
		note: "we got through them together",
		src: "/public/images/bad days.png"
	},
	{
		caption: "Favorites",
		note: "some of our favorites",
		src: "/public/images/favorites.png"
	},
	{
		caption: "Random moments.",
		note: "no context needed",
		src: "/public/images/random-moments.png"
	},
	{
		caption: "School days.",
		note: "ordinary days that turned out to be everything",
		src: "/public/images/school-days.png"
	},
	{
		caption: "Memories that make no sense.",
		note: "iykyk",
		src: "/public/images/memories that does not make sense.png"
	}
];
var letter = {
	intro: "I wrote something for you...",
	greeting: "Dear Muriel,",
	paragraphs: [
		"Four years ago, we were just classmates at Volta Barracks School Complex. At the time, I don't think either of us knew that those school days would eventually lead to a friendship like this.",
		"Somewhere along the way, we became more than just classmates. We became good friends, shared countless funny, bad, random, and unforgettable moments, and somehow, our friendship became something that felt more like family.",
		"From the everyday school moments to our Home Economics practicals, we've collected memories that I know I'll always look back on and smile.",
		"You've always been someone who is calm and reserved, but at the same time sociable, friendly to everyone, and genuinely fun to be around. You have a way of making ordinary moments memorable.",
		"On your birthday, I just want you to know how much I appreciate the friendship we've built over these four years.",
		"I'm grateful for every conversation, every laugh, every random moment, and every memory we've shared.",
		"As you begin another year of your life, I hope it brings you happiness, growth, success, peace, and many more beautiful memories.",
		"Here's to everything we've already experienced, and to all the memories still waiting for us.",
		"Happy Birthday, Muriel."
	],
	signature: "With love and appreciation,",
	signatureName: "Your Friend ❤️"
};
/** Reveals an element once it scrolls into view. Respects reduced motion. */
function useReveal(threshold = .2) {
	const ref = (0, import_react.useRef)(null);
	const [shown, setShown] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const node = ref.current;
		if (!node) return;
		if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			setShown(true);
			return;
		}
		const io = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting) {
				setShown(true);
				io.disconnect();
			}
		}, {
			threshold,
			rootMargin: "0px 0px -8% 0px"
		});
		io.observe(node);
		return () => io.disconnect();
	}, [threshold]);
	return {
		ref,
		shown
	};
}
function prefersReducedMotion() {
	if (typeof window === "undefined") return false;
	return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
var COLORS = [
	"#e9d8a6",
	"#c9a84c",
	"#cbbfe6",
	"#f6e7d8",
	"#2b2f5a"
];
async function celebrate(intensity = "burst") {
	if (typeof window === "undefined" || prefersReducedMotion()) return;
	const { default: confetti } = await import("../_libs/canvas-confetti.mjs").then((n) => n.t);
	if (intensity === "gentle") {
		confetti({
			particleCount: 40,
			spread: 90,
			startVelocity: 22,
			gravity: .5,
			scalar: .8,
			ticks: 260,
			origin: { y: .4 },
			colors: COLORS
		});
		return;
	}
	const end = Date.now() + 1400;
	confetti({
		particleCount: 120,
		spread: 80,
		origin: { y: .6 },
		colors: COLORS
	});
	const frame = () => {
		confetti({
			particleCount: 4,
			angle: 60,
			spread: 60,
			origin: {
				x: 0,
				y: .7
			},
			colors: COLORS
		});
		confetti({
			particleCount: 4,
			angle: 120,
			spread: 60,
			origin: {
				x: 1,
				y: .7
			},
			colors: COLORS
		});
		if (Date.now() < end) requestAnimationFrame(frame);
	};
	frame();
}
var hero_default = "/assets/hero-C5IPTaSh.mp4";
var LINES = [
	config.openingLine,
	"I didn't know we'd make this many memories.",
	"And I definitely didn't know you'd become family."
];
function TypeLine({ text, active, onDone }) {
	const [n, setN] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (!active) return;
		if (prefersReducedMotion()) {
			setN(text.length);
			const t = setTimeout(onDone, 900);
			return () => clearTimeout(t);
		}
		let i = 0;
		const id = setInterval(() => {
			i += 1;
			setN(i);
			if (i >= text.length) {
				clearInterval(id);
				setTimeout(onDone, 1100);
			}
		}, 45);
		return () => clearInterval(id);
	}, [
		active,
		text,
		onDone
	]);
	if (!active && n === 0) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: "display text-balance text-2xl leading-snug text-cream sm:text-4xl md:text-5xl",
		children: [text.slice(0, n), n < text.length && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "caret text-gold",
			children: "|"
		})]
	});
}
function Opening({ onOpen }) {
	const [step, setStep] = (0, import_react.useState)(0);
	const videoRef = (0, import_react.useRef)(null);
	const done = step >= LINES.length;
	const playHeroVideo = (0, import_react.useCallback)(() => {
		const video = videoRef.current;
		if (!video || !video.paused) return;
		video.play().catch(() => void 0);
	}, []);
	(0, import_react.useEffect)(() => {
		const timer = window.setTimeout(playHeroVideo, 180);
		const handleInteraction = () => playHeroVideo();
		const handleVisibility = () => {
			if (!document.hidden) playHeroVideo();
		};
		window.addEventListener("pointerdown", handleInteraction, { passive: true });
		window.addEventListener("touchstart", handleInteraction, { passive: true });
		document.addEventListener("visibilitychange", handleVisibility);
		return () => {
			clearTimeout(timer);
			window.removeEventListener("pointerdown", handleInteraction);
			window.removeEventListener("touchstart", handleInteraction);
			document.removeEventListener("visibilitychange", handleVisibility);
		};
	}, [playHeroVideo]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		"aria-label": "Opening",
		className: "relative flex min-h-[100svh] items-center justify-center overflow-hidden px-6 py-24 text-cream",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
				ref: videoRef,
				className: "video-bg pointer-events-none",
				src: hero_default,
				autoPlay: true,
				loop: true,
				muted: true,
				playsInline: true,
				disablePictureInPicture: true,
				preload: "auto",
				onCanPlay: playHeroVideo,
				onLoadedData: playHeroVideo,
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute inset-0 z-10 bg-ink/10"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute inset-0 z-20",
				children: [...Array(14)].map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "float-soft absolute rounded-full bg-gold/40",
					style: {
						left: `${i * 37 % 100}%`,
						top: `${i * 53 % 100}%`,
						width: `${2 + i % 3}px`,
						height: `${2 + i % 3}px`,
						animationDelay: `${i * .7}s`
					}
				}, i))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-30 mx-auto flex w-full max-w-3xl flex-col items-center gap-6 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "chapter-label text-lavender/80",
						children: "Chapter 01"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex min-h-[9rem] flex-col justify-center gap-5 sm:min-h-[13rem]",
						children: LINES.map((line, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TypeLine, {
							text: line,
							active: step >= i,
							onDone: () => setStep((s) => s === i ? s + 1 : s)
						}, line))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onOpen,
						className: `mt-6 rounded-full border border-gold/60 bg-gold/10 px-8 py-4 font-sans text-sm tracking-[0.18em] text-cream uppercase transition-all duration-700 hover:bg-gold/25 focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none ${done ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"}`,
						children: "Open Your Birthday Story ✨"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: `hand text-lg text-lavender/70 transition-opacity duration-1000 ${done ? "opacity-100" : "opacity-0"}`,
						children: ["for ", config.firstName]
					})
				]
			})
		]
	});
}
function Reveal({ children, delay = 0, className = "", as: Tag = "div" }) {
	const { ref, shown } = useReveal();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
		ref,
		style: { transitionDelay: `${delay}ms` },
		className: `reveal ${shown ? "reveal-in" : ""} ${className}`,
		children
	});
}
function Chapter({ number, title, children, dark = false, id }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id,
		className: `relative overflow-hidden px-6 py-24 sm:py-32 ${dark ? "surface-dusk" : ""}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-full max-w-5xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "flex flex-col items-center gap-4 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: `chapter-label ${dark ? "text-lavender/80" : ""}`,
						children: ["Chapter ", number]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: `display text-3xl text-balance sm:text-5xl ${dark ? "text-cream" : "text-foreground"}`,
						children: title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule" })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 sm:mt-16",
				children
			})]
		})
	});
}
function nextBirthday(now) {
	const y = now.getFullYear();
	const thisYear = new Date(y, config.birthdayMonth - 1, config.birthdayDay, 0, 0, 0);
	if (now <= new Date(y, config.birthdayMonth - 1, config.birthdayDay, 23, 59, 59)) return {
		target: thisYear,
		isToday: now >= thisYear
	};
	return {
		target: new Date(y + 1, config.birthdayMonth - 1, config.birthdayDay),
		isToday: false
	};
}
function Countdown() {
	const [now, setNow] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		setNow(/* @__PURE__ */ new Date());
		const id = setInterval(() => setNow(/* @__PURE__ */ new Date()), 1e3);
		return () => clearInterval(id);
	}, []);
	if (!now) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-[9rem]",
		"aria-hidden": true
	});
	const { target, isToday } = nextBirthday(now);
	const diff = Math.max(0, target.getTime() - now.getTime());
	const days = Math.floor(diff / 864e5);
	const hours = Math.floor(diff / 36e5 % 24);
	const minutes = Math.floor(diff / 6e4 % 60);
	const seconds = Math.floor(diff / 1e3 % 60);
	const passedThisYear = !isToday && target.getFullYear() > now.getFullYear() ? "The celebration may be over, but the memories continue." : "Something special is coming...";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto w-full max-w-2xl text-center",
		"aria-live": "polite",
		children: isToday ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "display text-3xl text-gold sm:text-4xl",
			children: [
				"TODAY IS ",
				config.firstName.toUpperCase(),
				"'S DAY! 🎉"
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "hand text-2xl text-muted-foreground",
			children: passedThisYear
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6 grid grid-cols-4 gap-2 sm:gap-4",
			children: [
				{
					label: "Days",
					value: days
				},
				{
					label: "Hours",
					value: hours
				},
				{
					label: "Minutes",
					value: minutes
				},
				{
					label: "Seconds",
					value: seconds
				}
			].map((u) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-border bg-card px-2 py-5 shadow-[var(--shadow-card)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "display text-2xl tabular-nums sm:text-4xl",
					children: String(u.value).padStart(2, "0")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "chapter-label mt-1 text-[0.6rem]",
					children: u.label
				})]
			}, u.label))
		})] })
	});
}
var TILT = [
	"-2.5deg",
	"1.8deg",
	"-1.2deg",
	"2.4deg",
	"-1.8deg",
	"1.4deg"
];
function Gallery() {
	const [open, setOpen] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (open === null) return;
		const onKey = (e) => {
			if (e.key === "Escape") setOpen(null);
			if (e.key === "ArrowRight") setOpen((i) => ((i ?? 0) + 1) % memories.length);
			if (e.key === "ArrowLeft") setOpen((i) => ((i ?? 0) - 1 + memories.length) % memories.length);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3",
		children: memories.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
			delay: i * 90,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => setOpen(i),
				style: { rotate: TILT[i % TILT.length] },
				className: "polaroid group block w-full rounded-sm text-left focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
				"aria-label": `Open memory: ${m.caption}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative aspect-4/5 w-full overflow-hidden bg-secondary",
					children: m.src ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: m.src,
						alt: m.caption,
						loading: "lazy",
						className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex h-full w-full flex-col items-center justify-center gap-2 bg-[image:var(--gradient-warm)] px-4 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-3xl",
								children: "📷"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "chapter-label text-[0.58rem]",
								children: ["Photo ", i + 1]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hand text-base text-muted-foreground",
								children: m.note
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "hand mt-3 px-1 text-xl leading-tight text-foreground",
					children: m.caption
				})]
			})
		}, m.caption))
	}), open !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		role: "dialog",
		"aria-modal": "true",
		"aria-label": memories[open].caption,
		className: "fixed inset-0 z-50 flex items-center justify-center bg-primary/85 p-5 backdrop-blur-sm",
		onClick: () => setOpen(null),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
			className: "w-full max-w-lg rounded-2xl bg-card p-4 shadow-[var(--shadow-soft)]",
			onClick: (e) => e.stopPropagation(),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "aspect-4/5 w-full overflow-hidden rounded-xl bg-secondary",
				children: memories[open].src ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: memories[open].src,
					alt: memories[open].caption,
					className: "h-full w-full object-cover"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex h-full w-full items-center justify-center bg-[image:var(--gradient-warm)]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "hand text-2xl text-muted-foreground",
						children: memories[open].note
					})
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
				className: "mt-4 flex items-center justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "hand text-xl",
					children: memories[open].caption
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setOpen(null),
					className: "rounded-full border border-border px-4 py-2 text-xs tracking-widest uppercase hover:bg-muted",
					children: "Close"
				})]
			})]
		})
	})] });
}
function Letter() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-2xl",
		children: !open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-center gap-6 text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "hand text-2xl text-muted-foreground",
				children: letter.intro
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => setOpen(true),
				"aria-expanded": open,
				className: "group relative w-full max-w-sm rounded-xl border border-gold/50 bg-card px-8 py-14 shadow-[var(--shadow-card)] transition-transform duration-500 hover:-translate-y-2 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": true,
						className: "absolute inset-x-0 top-0 h-1/2 origin-top rounded-t-xl border-b border-gold/40 bg-[image:var(--gradient-warm)] transition-transform duration-700 group-hover:[transform:rotateX(-28deg)]"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "relative text-4xl",
						children: "💌"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "relative mt-4 block text-xs tracking-[0.24em] uppercase",
						children: "Open the letter"
					})
				]
			})]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "animate-fade-in rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-soft)] sm:p-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "display text-3xl",
					children: letter.greeting
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule mt-4 block" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 space-y-5 text-[0.98rem] leading-relaxed text-muted-foreground",
					children: letter.paragraphs.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: p }, p.slice(0, 24)))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 text-sm text-muted-foreground",
					children: letter.signature
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "hand mt-1 text-3xl text-foreground",
					children: letter.signatureName
				})
			]
		})
	});
}
var WISHES = [
	"Here's to another year of life.",
	"Another year of growth.",
	"Another year of laughter.",
	"Another year of memories."
];
function Finale() {
	const { ref, shown } = useReveal(.35);
	const [stage, setStage] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (!shown) return;
		celebrate("burst");
		const t1 = setTimeout(() => setStage(1), 1400);
		const t2 = setTimeout(() => setStage(2), 5200);
		const t3 = setTimeout(() => {
			setStage(3);
			celebrate("gentle");
		}, 8200);
		return () => [
			t1,
			t2,
			t3
		].forEach(clearTimeout);
	}, [shown]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref,
		"aria-label": "Final celebration",
		className: "surface-dusk relative overflow-hidden px-6 py-28 sm:py-36",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"aria-hidden": true,
			className: "pointer-events-none absolute inset-0",
			children: [...Array(16)].map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "drift-up absolute text-lg opacity-0",
				style: {
					left: `${i * 61 % 96}%`,
					bottom: "-6vh",
					animationDuration: `${14 + i % 6 * 3}s`,
					animationDelay: `${i * 1.3}s`
				},
				children: i % 3 === 0 ? "🎈" : i % 3 === 1 ? "❤️" : "✨"
			}, i))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-10 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "display text-4xl text-cream text-balance sm:text-6xl",
					children: [
						"HAPPY BIRTHDAY, ",
						config.firstName.toUpperCase(),
						"!"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 text-sm tracking-[0.3em] text-gold uppercase",
					children: [config.birthdayLabel, " 🎂"]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-2",
					children: WISHES.map((w, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						as: "li",
						delay: i * 200,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "display text-xl text-lavender sm:text-2xl",
							children: w
						})
					}, w))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 200,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-xl text-base leading-relaxed text-cream/75",
						children: "May the years ahead be even more beautiful than the four years we've already shared."
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 flex min-h-[16rem] w-full flex-col items-center justify-center gap-10 sm:min-h-[20rem]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: `display text-2xl text-cream/70 text-balance transition-all duration-[2500ms] sm:text-3xl ${stage >= 1 ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`,
						children: config.openingLine
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: `glow-pulse display text-3xl text-balance text-gold transition-all duration-[3000ms] sm:text-6xl ${stage >= 2 ? "translate-y-0 opacity-100 blur-0" : "translate-y-6 opacity-0 blur-sm"}`,
						children: config.finalLine
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: `hand text-2xl text-cream/80 transition-opacity duration-[2000ms] sm:text-3xl ${stage >= 3 ? "opacity-100" : "opacity-0"}`,
					children: [
						"Happy Birthday, ",
						config.firstName,
						" ❤️"
					]
				})
			]
		})]
	});
}
function MusicPlayer({ autoStart }) {
	const audioRef = (0, import_react.useRef)(null);
	const [playing, setPlaying] = (0, import_react.useState)(false);
	const [volume, setVolume] = (0, import_react.useState)(.5);
	const [muted, setMuted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const a = audioRef.current;
		if (!a) return;
		a.volume = volume;
		a.muted = muted;
	}, [volume, muted]);
	(0, import_react.useEffect)(() => {
		if (!autoStart) return;
		const a = audioRef.current;
		if (!a) return;
		a.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
	}, [autoStart]);
	if (!config.musicSrc) return null;
	const toggle = () => {
		const a = audioRef.current;
		if (!a) return;
		if (a.paused) a.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
		else {
			a.pause();
			setPlaying(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed right-4 bottom-4 z-40 flex items-center gap-3 rounded-full border border-border bg-card/90 px-4 py-2 shadow-[var(--shadow-card)] backdrop-blur",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("audio", {
				ref: audioRef,
				src: config.musicSrc,
				loop: true,
				preload: "none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: toggle,
				"aria-label": playing ? "Pause music" : "Play music",
				className: "text-lg",
				children: playing ? "⏸" : "▶️"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setMuted((m) => !m),
				"aria-label": muted ? "Unmute" : "Mute",
				className: "text-lg",
				children: muted ? "🔇" : "🔊"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				className: "sr-only",
				htmlFor: "volume",
				children: "Volume"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				id: "volume",
				type: "range",
				min: 0,
				max: 1,
				step: .05,
				value: volume,
				onChange: (e) => setVolume(Number(e.target.value)),
				className: "h-1 w-20 accent-[var(--gold)]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "hidden text-xs tracking-widest uppercase sm:inline",
				children: ["🎵 ", config.musicTitle]
			})
		]
	});
}
var STAGES = [
	{
		icon: "🏫",
		label: "Classmates",
		line: "Some people enter your life as classmates."
	},
	{
		icon: "🤝",
		label: "Friends",
		line: "Somewhere along the way, they become friends."
	},
	{
		icon: "🫂",
		label: "Family",
		line: "And eventually, that friendship becomes something that feels like family."
	}
];
var HOME_EC = [
	{
		icon: "🍳",
		title: "The Cooking",
		text: "We came to cook... somehow, we also created memories."
	},
	{
		icon: "😂",
		title: "The Chaos",
		text: "Not everything went according to plan."
	},
	{
		icon: "🤦🏽",
		title: "The Mistakes",
		text: "Let's just say... some practicals were more practical than others."
	},
	{
		icon: "❤️",
		title: "The Memories",
		text: "But looking back, those were some of the moments that made our friendship special."
	}
];
var TRAITS = [
	"Calm.",
	"Reserved.",
	"Sociable.",
	"Friendly.",
	"Fun to be around."
];
var YEARS = [
	{
		year: "Year 01",
		icon: "🏫",
		label: "Classmates"
	},
	{
		year: "Year 02",
		icon: "🤝",
		label: "Becoming Friends"
	},
	{
		year: "Year 03",
		icon: "😂",
		label: "Making Memories"
	},
	{
		year: "Year 04",
		icon: "🫂",
		label: "Becoming Family"
	}
];
function BirthdayStory() {
	const [opened, setOpened] = (0, import_react.useState)(false);
	const open = () => {
		setOpened(true);
		celebrate("burst");
		requestAnimationFrame(() => {
			document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Opening, { onOpen: open }),
			opened && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "hero",
					className: "surface-warm relative overflow-hidden px-6 py-24 sm:py-32",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							"aria-hidden": true,
							className: "pointer-events-none absolute inset-0",
							children: [...Array(10)].map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "float-soft absolute h-2 w-2 rounded-full bg-gold/35",
								style: {
									left: `${i * 41 % 95}%`,
									top: `${i * 29 % 90}%`,
									animationDelay: `${i * .9}s`
								}
							}, i))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative mx-auto grid w-full max-w-5xl items-center gap-12 md:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
								className: "polaroid mx-auto max-w-sm rounded-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: config.photos.hero,
									alt: `Portrait of ${config.name}`,
									width: 1e3,
									height: 1250,
									className: "aspect-4/5 w-full object-cover"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
									className: "hand mt-3 text-xl",
									children: [config.firstName, " ✨"]
								})]
							}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
								delay: 150,
								className: "text-center md:text-left",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "chapter-label",
										children: "Chapter 02"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
										className: "display mt-3 text-4xl text-balance sm:text-6xl",
										children: [
											"Happy Birthday, ",
											config.name,
											"!"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-4 text-sm tracking-[0.3em] uppercase",
										children: [config.birthdayLabel, " 🎂"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule mt-6 inline-block" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-6 leading-relaxed text-muted-foreground",
										children: "Today isn't just about celebrating another year of your life. It's about celebrating the beautiful person you are, the memories you've created, and the friendship we've built along the way."
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative mx-auto mt-16 max-w-5xl",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Countdown, {})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chapter, {
					number: "03",
					title: "It Started Here...",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid items-center gap-10 md:grid-cols-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							className: "md:col-span-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
								className: "overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-card)]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: config.photos.school,
									alt: config.school,
									loading: "lazy",
									width: 1400,
									height: 900,
									className: "w-full object-cover"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
									className: "hand bg-card px-4 py-3 text-lg",
									children: config.school
								})]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
							delay: 150,
							className: "space-y-5 md:col-span-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "display text-2xl leading-snug",
								children: "Four years ago, we were just classmates. Two people sharing the same school, the same classrooms, and the same everyday life."
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "leading-relaxed text-muted-foreground",
								children: "Little did we know that those ordinary school days would become the beginning of a friendship filled with some of the funniest, strangest, most random, and unforgettable memories."
							})]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chapter, {
					number: "04",
					title: "From Classmates to Friends",
					dark: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "grid gap-6 sm:grid-cols-3",
						children: STAGES.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							as: "li",
							delay: i * 220,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex h-full flex-col items-center gap-4 rounded-2xl border border-gold/25 bg-cream/5 px-6 py-10 text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-4xl",
										children: s.icon
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "chapter-label text-gold",
										children: s.label
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "display text-xl text-cream/90",
										children: s.line
									})
								]
							})
						}, s.label))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chapter, {
					number: "05",
					title: "The Good. The Bad. The Random.",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gallery, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Chapter, {
					number: "06",
					title: "The Home Economics Era",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							className: "mx-auto max-w-2xl text-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "display text-2xl leading-snug",
								children: "If there is one thing I know we'll never forget, it's those Home Economics practicals."
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 120,
							className: "mt-10",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: config.photos.homeEconomics,
								alt: "Home Economics practicals",
								loading: "lazy",
								width: 1200,
								height: 900,
								className: "aspect-16/9 w-full rounded-2xl border border-border object-cover shadow-[var(--shadow-card)]"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10 grid gap-6 sm:grid-cols-2",
							children: HOME_EC.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: i * 130,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "h-full rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)] transition-transform duration-500 hover:-translate-y-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-3xl",
											children: c.icon
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "display mt-3 text-2xl",
											children: c.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 leading-relaxed text-muted-foreground",
											children: c.text
										})
									]
								})
							}, c.title))
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chapter, {
					number: "07",
					title: "The Person Behind the Memories",
					dark: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid items-center gap-12 md:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-4",
							children: TRAITS.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								as: "li",
								delay: i * 180,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "display text-3xl text-gold sm:text-4xl",
									children: t
								})
							}, t))
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
							delay: 150,
							className: "space-y-5 text-cream/80",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "leading-relaxed",
									children: "You're the kind of person who doesn't have to try too hard to make people feel comfortable around you."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "leading-relaxed",
									children: "You have a calmness about you, but there's also a side of you that knows how to have fun and make the simplest moments memorable."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "leading-relaxed",
									children: "And perhaps one of the things that makes you special is how friendly you are to everyone."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "hand text-2xl text-lavender",
									children: "Calm at heart, reserved by nature, friendly to everyone."
								})
							]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Chapter, {
					number: "08",
					title: "4 Years. Countless Memories.",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
						className: "relative grid gap-8 sm:grid-cols-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": true,
							className: "absolute top-8 right-4 left-4 hidden h-px bg-gold/40 sm:block"
						}), YEARS.map((y, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							as: "li",
							delay: i * 180,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative flex flex-col items-center gap-3 text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "flex h-16 w-16 items-center justify-center rounded-full border border-gold/50 bg-card text-2xl shadow-[var(--shadow-card)]",
										children: y.icon
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "chapter-label",
										children: y.year
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "display text-xl",
										children: y.label
									})
								]
							})
						}, y.year))]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: 200,
						className: "mx-auto mt-14 max-w-xl space-y-3 text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "display text-2xl",
							children: "Four years later, here we are."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "leading-relaxed text-muted-foreground",
							children: "Still friends. Still making memories. Still finding reasons to laugh at the random things life throws at us."
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chapter, {
					number: "09",
					title: "The Birthday Letter",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Letter, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Finale, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MusicPlayer, { autoStart: opened })
		]
	});
}
//#endregion
export { BirthdayStory as component };
