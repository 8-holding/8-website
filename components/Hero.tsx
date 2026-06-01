import Reveal from './Reveal';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <span className="hero__glyph" aria-hidden="true">
        8
      </span>

      <div className="container hero__inner">
        <Reveal>
          <p className="eyebrow eyebrow--light">Sales Services for Companies</p>
        </Reveal>

        <Reveal delay={80}>
          <h1>
            Sales that move your business <em>forward</em>.
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="hero__sub">
            Eight helps companies build, scale, and strengthen their sales. From
            strategy to execution, we partner with you to win customers, open new
            markets, and grow revenue with discipline.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="hero__actions">
            <a href="#what-we-do" className="btn btn--gold">
              Learn More
              <Arrow />
            </a>
            <a href="#contact" className="btn btn--outline-light">
              Get in Touch
            </a>
          </div>
        </Reveal>
      </div>

      <div className="hero__scroll" aria-hidden="true">
        Scroll
        <span />
      </div>
    </section>
  );
}

function Arrow() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}
