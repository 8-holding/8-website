const STATS = [
  { num: '$1B+', label: 'Aggregate enterprise value' },
  { num: '12', label: 'Portfolio companies' },
  { num: '8', label: 'Sectors of focus' },
  { num: '20yr', label: 'Investment horizon' },
];

export default function Stats() {
  return (
    <section className="stats" aria-label="Eight by the numbers">
      <div className="container">
        <div className="stats__grid">
          {STATS.map((s) => (
            <div className="stat" key={s.label}>
              <div className="stat__num">{s.num}</div>
              <div className="stat__label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
