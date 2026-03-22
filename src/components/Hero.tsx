import { useTyping } from '../hooks/useTyping'

const stats = [
  { num: '3+', label: 'Years Exp' },
  { num: '12+', label: 'AEM Components' },
  { num: '25%', label: 'Perf Boost' },
]

function StatBlock() {
  return (
    <>
      {stats.map(s => (
        <div className="stat" key={s.label}>
          <div className="stat-num">{s.num}</div>
          <div className="stat-label">{s.label}</div>
        </div>
      ))}
    </>
  )
}

export default function Hero() {
  const typedText = useTyping(1300)

  return (
    <section className="hero" id="home">
      <div className="hero-bg" />
      <div className="hero-grid" />
      <div className="hero-content">
        <div className="hero-tag">Available for new opportunities</div>
        <h1>
          <span className="name">Ayushi Parmar</span>
          <span className="typing-line">
            <span id="typing-text">{typedText}</span>
            <span className="typing-cursor" />
          </span>
        </h1>
        <p className="hero-desc">
          Software Developer crafting scalable, high-performance web experiences.
          Specialised in <strong>React.js</strong>, <strong>AEM</strong>, and modern frontend ecosystems.
          Based in Ahmedabad, open to remote opportunities worldwide.
        </p>
        <div className="hero-ctas">
          <a href="#contact" className="btn-primary">Let's Connect →</a>
          <a href="#projects" className="btn-secondary">View Work</a>
          <a
            href="Ayushi_Parmar_Frontend_Developer_Resume.pdf"
            download
            className="btn-secondary"
            style={{ borderColor: 'rgba(232,197,71,0.4)' }}
          >
            ↓ Download Resume
          </a>
        </div>

        {/* Inline stats — tablet/mobile only */}
        <div className="hero-stats hero-stats--inline">
          <StatBlock />
        </div>
      </div>

      {/* Desktop stats — absolute bottom-right */}
      <div className="hero-stats hero-stats--desktop">
        <StatBlock />
      </div>
    </section>
  )
}
