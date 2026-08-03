import { useState } from "react";
import {
  memories,
  memoryCards,
  timeline,
  traits,
  traitDelays,
  letterText,
  cardGridItems,
} from "@/data/content";
import { celebrate } from "@/utils/confetti";

interface ChaptersProps {
  onImageClick: (index: number) => void;
}

export function Chapters({ onImageClick }: ChaptersProps) {
  const tilts = ["-2.5deg", "1.8deg", "-1.2deg", "2.4deg", "-1.8deg", "1.4deg"];

  return (
    <>
      <section className="chapter content">
        <span className="chapter-label">Chapter 03</span>
        <h2>It Started Here...</h2>
        <span className="gold-rule"></span>
        <div className="split">
          <figure className="photo-frame reveal">
            <img src="/images/school.jpg" alt="Volta Barracks School Complex" />
            <figcaption className="hand">Volta Barracks School Complex</figcaption>
          </figure>
          <div className="copy-block reveal" data-delay="150">
            <p className="display lead">
              Four years ago, we were just classmates. Two people sharing the same school, the same
              classrooms, and the same everyday life.
            </p>
            <p>
              Little did we know that those ordinary school days would become the beginning of a
              friendship filled with some of the funniest, strangest, most random, and unforgettable
              memories.
            </p>
          </div>
        </div>
      </section>

      <section className="chapter surface-dusk">
        <div className="content">
          <span className="chapter-label light">Chapter 04</span>
          <h2>From Classmates to Friends</h2>
          <span className="gold-rule"></span>
          <ol className="card-grid">
            {cardGridItems.map((item) => (
              <li key={item.label} className="dark-card reveal" data-delay={item.delay}>
                <span>{item.icon}</span>
                <small>{item.label}</small>
                <p>{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="chapter content">
        <span className="chapter-label">Chapter 05</span>
        <h2>The Good. The Bad. The Random.</h2>
        <span className="gold-rule"></span>
        <div className="gallery">
          {memories.map((memory, index) => (
            <button
              type="button"
              key={memory.src}
              className="gallery-button reveal"
              data-delay={index * 100}
              style={{ rotate: `${tilts[index % tilts.length]}` }}
              onClick={() => onImageClick(index)}
              aria-label={`Open memory: ${memory.caption}`}
            >
              <div className="gallery-photo">
                <img src={memory.src} alt={memory.caption} />
              </div>
              <p className="gallery-caption">{memory.caption}</p>
            </button>
          ))}
        </div>
      </section>

      <section className="chapter content">
        <span className="chapter-label">Chapter 06</span>
        <h2>The Home Economics Era</h2>
        <span className="gold-rule"></span>
        <p className="display centered lead reveal">
          If there is one thing I know we&apos;ll never forget, it&apos;s those Home Economics
          practicals.
        </p>
        <img
          className="wide-photo reveal"
          data-delay="120"
          src="/images/home-economics.png"
          alt="Home Economics practicals"
        />
        <div className="memory-grid">
          {memoryCards.map((card, index) => (
            <article key={card.title} className="memory-card reveal" data-delay={index * 100}>
              <span>{card.icon}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="chapter surface-dusk">
        <div className="content split">
          <div>
            <span className="chapter-label light">Chapter 07</span>
            <h2>The Person Behind the Memories</h2>
            <span className="gold-rule"></span>
            <ul className="traits">
              {traits.map((trait, i) => (
                <li key={trait} className="reveal" data-delay={traitDelays[i]}>
                  {trait}
                </li>
              ))}
            </ul>
          </div>
          <div className="copy-block reveal" data-delay="150">
            <p>
              You&apos;re the kind of person who doesn&apos;t have to try too hard to make people
              feel comfortable around you.
            </p>
            <p>
              You have a calmness about you, but there&apos;s also a side of you that knows how to
              have fun and make the simplest moments memorable.
            </p>
            <p>
              And perhaps one of the things that makes you special is how friendly you are to
              everyone.
            </p>
            <p className="hand accent">Calm at heart, reserved by nature, friendly to everyone.</p>
          </div>
        </div>
      </section>

      <section className="chapter content">
        <span className="chapter-label">Chapter 08</span>
        <h2>4 Years. Countless Memories.</h2>
        <span className="gold-rule"></span>
        <ol className="timeline">
          {timeline.map((item, index) => (
            <li key={item.title} className="reveal" data-delay={index * 120}>
              <span>{item.icon}</span>
              <small>{item.label}</small>
              <strong>{item.title}</strong>
            </li>
          ))}
        </ol>
        <div className="centered narrow reveal" data-delay="200">
          <p className="display lead">Four years later, here we are.</p>
          <p>
            Still friends. Still making memories. Still finding reasons to laugh at the random
            things life throws at us.
          </p>
        </div>
      </section>

      <section className="chapter content">
        <span className="chapter-label">Chapter 09</span>
        <h2>The Birthday Letter</h2>
        <span className="gold-rule"></span>
        <div className="letter-wrap reveal">
          <Letter />
        </div>
      </section>
    </>
  );
}

function Letter() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <div className="letter-intro">
        <p className="hand">I wrote something for you...</p>
        <button
          id="openLetter"
          className="letter-button"
          type="button"
          aria-expanded={opened}
          onClick={() => {
            setOpened(true);
            celebrate("gentle");
          }}
        >
          <span className="flap" aria-hidden="true"></span>
          <span className="letter-icon">&#128140;</span>
          <span>Open the letter</span>
        </button>
      </div>
      <article id="letter" className={`letter ${opened ? "" : "hidden"}`}>
        <h3>Dear Muriel,</h3>
        <span className="gold-rule"></span>
        <div className="letter-body">
          {letterText.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
        <p className="signature-label">With love and appreciation,</p>
        <p className="hand signature">Your Friend &#10084;</p>
      </article>
    </>
  );
}
