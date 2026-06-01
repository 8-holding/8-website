import Reveal from './Reveal';

const SERVICES = [
  {
    title: 'Acquisitions',
    body: 'We acquire established, profitable businesses with durable advantages and capable teams — partnering with founders and owners seeking a permanent home for what they have built.',
    icon: <IconAcquire />,
  },
  {
    title: 'Operating Stewardship',
    body: 'As long-term owners, we work alongside management to strengthen operations, sharpen strategy, and invest behind growth — without the pressure of a forced exit.',
    icon: <IconOperate />,
  },
  {
    title: 'Capital Allocation',
    body: 'We deploy patient, permanent capital across the portfolio, reinvesting cash flows where returns are highest and compounding value over decades, not quarters.',
    icon: <IconCapital />,
  },
  {
    title: 'Strategic Advisory',
    body: 'Our team brings institutional rigor to the businesses we hold — guiding M&A, market expansion, and transformation with the perspective of a committed owner.',
    icon: <IconAdvisory />,
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
            <h2>A holding company built for the long term.</h2>
          </Reveal>
          <Reveal delay={120}>
            <p>
              Eight is not a fund with a clock. We own the businesses we acquire
              indefinitely, aligning our interests with the people who run them and
              the customers they serve.
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
