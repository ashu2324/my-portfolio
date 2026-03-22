const items = [
  'React.js', 'Next.js', 'TypeScript', 'Adobe AEM', 'Redux Toolkit',
  'Node.js', 'Tailwind CSS', 'REST APIs', 'HTL/Sightly', 'MongoDB',
  'GraphQL', 'Agile/Scrum',
]

export default function Marquee() {
  // Duplicate for seamless loop
  const doubled = [...items, ...items]

  return (
    <div className="marquee-section">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span className="marquee-item" key={i}>{item}</span>
        ))}
      </div>
    </div>
  )
}
