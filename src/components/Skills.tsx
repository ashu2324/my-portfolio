interface SkillCard {
  cat: string
  icon: string
  name: string
  tags: string[]
}

const skills: SkillCard[] = [
  { cat: 'aem',      icon: '⚡', name: 'AEM & CMS',            tags: ['AEM 6.x', 'HTL', 'Sightly', 'Clientlibs', 'DAM', 'Strapi'] },
  { cat: 'frontend', icon: '⚛️', name: 'Frontend Engineering', tags: ['React.js', 'Next.js', 'TypeScript', 'Redux', 'Vite', 'Tailwind'] },
  { cat: 'langs',    icon: '🔧', name: 'Core Languages',       tags: ['JavaScript ES6+', 'TypeScript', 'HTML5', 'CSS3'] },
  { cat: 'backend',  icon: '🔌', name: 'Backend & APIs',       tags: ['Node.js', 'Express.js', 'REST APIs', 'RabbitMQ', 'Redis'] },
  { cat: 'db',       icon: '🗄️', name: 'Databases',            tags: ['MongoDB', 'Redis', 'MySQL', 'PostgreSQL', 'GraphQL'] },
  { cat: 'tools',    icon: '🛠️', name: 'Tools & Workflow',     tags: ['Git', 'GitHub', 'Jira', 'Figma', 'Adobe XD'] },
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="reveal">
        <div className="section-label">Technical Skills</div>
        <div className="section-title">What I<br />work with.</div>
        <div className="skills-grid">
          {skills.map(s => (
            <div className="skill-card" data-cat={s.cat} key={s.cat}>
              <div className="skill-icon">{s.icon}</div>
              <div className="skill-name">{s.name}</div>
              <div className="skill-tags">
                {s.tags.map(t => <span className="tag" key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
