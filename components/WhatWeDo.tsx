import Reveal from './Reveal';

const SERVICES = [
  {
    title: 'Sales Strategy',
    body: 'We define your go-to-market approach — positioning, target segments, pricing, and the clearest path to revenue — so every sales effort is aimed where it matters most.',
    icon: <IconAdvisory />,
  },
  {
    title: 'Sales Team Building',
    body: 'We help you recruit, train, and develop high-performing sales teams, and put the structure, coaching, and incentives in place to keep them performing.',
    icon: <IconOperate />,
  },
  {
    title: 'Lead Generation & Pipeline',
    body: 'We build a reliable pipeline — generating qualified leads, opening doors, and creating a steady flow of opportunities for your business to convert.',
    icon: <IconCapital />,
  },
  {
    title: 'Sales Execution',
    body: 'We manage the sales process end to end — from first contact to close — and bring the discipline and follow-through that turn prospects into long-term customers.',
    icon: <IconAcquire />,
  },
];

export default function WhatWeDo() {
  return (
    <section className="section" id="what-we-do">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <p className="eyebrow">What We Do</p>
          </Reveal>
          <Reveal delay={60}>
            <h2>Sales services built around your business.</h2>
          </Reveal>
          <Reveal delay={120}>
            <p>
              We work as an extension of your team — covering the full sales journey,
              from shaping the strategy to closing the deal, and tailoring our
              approach to how your business actually grows.
            </p>
          </Reveal>
        </div>

        <div className="cards">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <article className="card">
                <span className="card__index">0{i + 1}</span>
                <div className="card__icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Icons (inline SVG, stroke = currentColor) ───────────────────────────── */
const svgProps = {
  width: 26,
  height: 26,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
};

function IconAcquire() {
  return (
    <svg {...svgProps}>
      <path d="M3 21h18" />
      <path d="M5 21V7l7-4 7 4v14" />
      <path d="M9 21v-6h6v6" />
    </svg>
  );
}

function IconOperate() {
  return (
    <svg {...svgProps}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2" />
    </svg>
  );
}

function IconCapital() {
  return (
    <svg {...svgProps}>
      <path d="M3 17l5-5 4 4 8-8" />
      <path d="M16 8h5v5" />
    </svg>
  );
}

function IconAdvisory() {
  return (
    <svg {...svgProps}>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      <path d="M8 10h8M8 13h5" />
    </svg>
  );
}
