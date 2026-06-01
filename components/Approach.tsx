import Reveal from './Reveal';

const PRINCIPLES = [
  {
    title: 'Revenue, not activity',
    body: 'We measure ourselves by the results that matter to you — customers won and revenue grown — not by busywork. Every effort ties back to outcomes.',
  },
  {
    title: 'Tailored to your business',
    body: 'No two companies sell the same way. We learn how your market, product, and buyers work, then shape an approach that fits rather than forcing a template.',
  },
  {
    title: 'Hands-on execution',
    body: 'We do not just advise from the sidelines. We roll up our sleeves and work the pipeline alongside your team — practical, accountable, and in the room.',
  },
  {
    title: 'A genuine partnership',
    body: 'We act as an extension of your team, sharing your goals and your incentives, and building sales capability that stays with you for the long run.',
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
              A few principles guide how we work with every company we partner with.
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
