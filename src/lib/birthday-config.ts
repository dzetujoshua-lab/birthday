/**
 * ─────────────────────────────────────────────────────────────
 *  EDIT EVERYTHING HERE
 *  Names, dates, photos, music and all personal messages live in
 *  this single file. Replace the images in src/assets/images/ with
 *  real photos (keep the same file names) and they appear instantly.
 * ─────────────────────────────────────────────────────────────
 */
import heroPhoto from "@/assets/images/muriel-hero.jpg";
import schoolPhoto from "@/assets/images/school.jpg";
import homeEcPhoto from "@/assets/images/home-economics-01.jpg";

export const config = {
  name: "Muriel Naadu Nartey",
  firstName: "Muriel",
  birthdayLabel: "5th August",
  birthdayMonth: 8, // 1-12
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
    hero: heroPhoto,
    school: schoolPhoto,
    homeEconomics: homeEcPhoto,
  },
};

export const memories = [
  { caption: "The bad days.", note: "we got through them together", src: "/public/images/bad days.png" },
  { caption: "Favorites", note: "some of our favorites", src: "/public/images/favorites.png" },
  { caption: "Random moments.", note: "no context needed", src: "/public/images/random-moments.png" },
  { caption: "School days.", note: "ordinary days that turned out to be everything", src: "/public/images/school-days.png" },
  {
    caption: "Memories that make no sense.",
    note: "iykyk",
    src: "/public/images/memories that does not make sense.png",
  },
];

export const letter = {
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
    "Happy Birthday, Muriel.",
  ],
  signature: "With love and appreciation,",
  signatureName: "Your Friend ❤️",
};
