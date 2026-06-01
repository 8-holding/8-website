import Reveal from './Reveal';

const PRINCIPLES = [
  {
    title: 'Permanence over exits',
    body: 'We buy to hold. Freed from fund timelines, we make decisions on a horizon measured in decades — investing through cycles instead of around them.',
  },
  {
    title: 'Alignment of interests',
    body: 'We back the operators who know their business best, structure incentives around long-term value, and act as true partners rather than passive shareholders.',
  },
  {
    title: 'Operational depth',
    body: 'Our team has built and run companies. We bring that experience to the boardroom and the floor alike — practical, hands-on, and respectful of what already works.',
  },
  {
    title: 'Disciplined conviction',
    body: 'We say no often and yes rarely. When we commit, it is with full conviction, durable capital, and the patience to let great businesses compound.',
  },
];

export default function Approach() {
  return (
    <section className="section section--navy" id="approach">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <p className="eyebrow eyebrow--light">Our Approach</p>
          </Reveal>
          <Reveal delay={60}>
            <h2>Why Eight.</h2>
          </Reveal>
          <Reveal delay={120}>
            <p>
              Four principles guide every business we hold and every decision we
              make as owners.
            </p>
          </Reveal>
        </div>

        <div className="approach">
          {PRINCIPLES.map((p, i) => (
            <Reveal key={p.title} className="principle" delay={i * 80}>
              <span className="principle__num">0{i + 1}</span>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
