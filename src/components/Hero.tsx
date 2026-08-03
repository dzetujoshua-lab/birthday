import { Sparkles } from "@/components/Sparkles";
import { Countdown } from "@/components/Countdown";

export function Hero() {
  return (
    <section id="hero" className="hero">
      <Sparkles count={10} warm />
      <div className="hero-grid content">
        <figure className="polaroid reveal">
          <img src="/images/mumu.jpeg" alt="Portrait of Muriel Naadu Nartey" />
          <figcaption className="hand">Muriel &#10024;</figcaption>
        </figure>
        <div className="hero-copy reveal" data-delay="150">
          <span className="chapter-label">Chapter 02</span>
          <h1>Happy Birthday, Muriel Naadu Nartey!</h1>
          <p className="date-line">5th August &#127874;</p>
          <span className="gold-rule"></span>
          <p>
            Today isn&apos;t just about celebrating another year of your life. It&apos;s about
            celebrating the beautiful person you are, the memories you&apos;ve created, and the
            friendship we&apos;ve built along the way.
          </p>
        </div>
      </div>
      <div id="countdown" className="countdown content" aria-live="polite">
        <Countdown />
      </div>
    </section>
  );
}
