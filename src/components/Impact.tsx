const impacts = [
  { num: '25%', label: 'Frontend bundle size reduced via code splitting & lazy loading' },
  { num: '30%', label: 'Content duplication reduced through reusable AEM components' },
  { num: '12+', label: 'Reusable HTL components built across 25+ pages' },
  { num: '0',   label: 'Downtime during live government platform vendor transition' },
]

export default function Impact() {
  return (
    <section className="impact">
      <div className="reveal">
        <div className="section-label">Impact</div>
        <div className="section-title">Numbers that<br />speak.</div>
        <div className="impact-grid">
          {impacts.map(i => (
            <div className="impact-card" key={i.label}>
              <div className="impact-num">{i.num}</div>
              <div className="impact-label">{i.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
