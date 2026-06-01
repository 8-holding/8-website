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
              <h2>A different kind of sales partner.</h2>
            </Reveal>
            <Reveal delay={120}>
              <blockquote className="about__quote">
                &ldquo;We measure success the way our clients do — in customers won,
                revenue grown, and sales teams that keep performing long after we
                arrive.&rdquo;
              </blockquote>
            </Reveal>
          </div>

          <div className="about__body">
            <Reveal>
              <p>
                Eight is a sales services company. We help businesses build, scale,
                and strengthen the way they sell — partnering with companies that
                want to win more customers, enter new markets, and grow revenue with
                confidence. Our model is simple: understand how you grow, then put
                the strategy, people, and execution in place to get you there.
              </p>
            </Reveal>
            <Reveal delay={80}>
              <p>
                We were founded on a conviction that great products deserve great
                sales. Too often, strong businesses stall not because the offering is
                weak, but because the sales engine behind it is. We exist to close
                that gap — bringing structure, discipline, and momentum to how our
                clients reach their market.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <p>
                Our work combines clear strategy with hands-on execution. We bring
                real market expertise, proven sales experience, and a partner&rsquo;s
                accountability to every engagement — always in service of one goal:
                helping the companies we work with grow, sustainably and for the long
                term.
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
