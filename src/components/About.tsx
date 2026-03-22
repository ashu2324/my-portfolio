const cards = [
  { title: 'Current Role', val: 'AEM Developer', sub: 'Dev Information Technology Ltd · Gandhinagar' },
  { title: 'Education', val: 'B.E. Engineering', sub: 'Silver Oak College · Ahmedabad · 2023' },
  { title: 'Location', val: 'Ahmedabad, India', sub: 'Open to remote worldwide' },
]

export default function About() {
  return (
    <section className="about" id="about">
      <div className="reveal">
        <div className="section-label">About Me</div>
        <div className="about-grid">
          <div className="about-text">
            <div className="section-title">
              Crafting digital<br />
              experiences that <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>matter.</em>
            </div>
            <p>
              I'm a Software Developer with <strong>3+ years</strong> of experience building scalable web
              applications. Currently specialised in <strong>Adobe Experience Manager (AEM)</strong> and
              modern frontend ecosystems.
            </p>
            <p>
              From government platforms handling millions of users to fintech dashboards and EdTech
              tools — I've built across industries with a consistent focus on <strong>performance,
              maintainability, and craft</strong>.
            </p>
            <div className="about-quote">"Don't wait for one day — build it now."</div>
          </div>
          <div className="about-visual">
            {cards.map(c => (
              <div className="about-card" key={c.title}>
                <div className="about-card-title">{c.title}</div>
                <div className="about-card-val">{c.val}</div>
                <div className="about-card-sub">{c.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
