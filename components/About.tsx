import Reveal from './Reveal';

export default function About() {
  return (
    <section className="section section--ivory" id="about">
      <div className="container">
        <div className="about">
          <div className="about__lead">
            <Reveal>
              <p className="eyebrow">About Eight</p>
            </Reveal>
            <Reveal delay={60}>
              <h2>A different kind of owner.</h2>
            </Reveal>
            <Reveal delay={120}>
              <blockquote className="about__quote">
                &ldquo;We measure success in generations, not quarters — and in the
                lasting strength of the businesses entrusted to us.&rdquo;
              </blockquote>
            </Reveal>
          </div>

          <div className="about__body">
            <Reveal>
              <p>
                Eight is a privately held company based in Miami, Florida. We acquire
                and operate exceptional businesses across a focused set of sectors,
                holding them for the long term and stewarding them with the care of
                a permanent owner. Our model is simple: partner with outstanding
                teams, allocate capital with discipline, and let durable enterprises
                compound over time.
              </p>
            </Reveal>
            <Reveal delay={80}>
              <p>
                We were founded on a conviction that the best businesses are built
                patiently. Where traditional funds are bound by fixed horizons and
                forced exits, Eight is structured for permanence. That freedom lets
                us think clearly, invest behind conviction, and prioritize the
                enduring health of a company over short-term optics.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <p>
                Our work combines the analytical rigor of top-tier advisory with the
                accountability of ownership. We bring deep market expertise,
                operational experience, and a global network to every company we
                hold — always in service of one goal: creating lasting value for the
                businesses, the people, and the communities we serve.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <p className="about__signature">— The Partners, Eight</p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
