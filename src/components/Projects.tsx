interface Project {
  num: string
  name: string
  desc: string
  tech: string[]
}

const projects: Project[] = [
  {
    num: '01 / Government',
    name: 'Gujarat Tourism Portal',
    desc: 'High-traffic government platform covering booking, grievance management, and tourism information. Built 12+ reusable AEM components deployed across 25+ pages.',
    tech: ['AEM', 'HTL', 'Clientlibs', 'DAM'],
  },
  {
    num: '02 / E-Commerce',
    name: 'Accelerate Marketplace',
    desc: 'B2B & B2C marketplace with scalable UI architecture. Integrated Commercetools APIs for catalog, cart, and order management with responsive layouts.',
    tech: ['React.js', 'Next.js', 'Commercetools', 'Tailwind'],
  },
  {
    num: '03 / Fintech',
    name: 'Expense Management System',
    desc: 'Financial dashboard with real-time event-driven workflows, authentication flows, and secure payment API integration using RabbitMQ and Redis.',
    tech: ['React.js', 'Node.js', 'RabbitMQ', 'MongoDB'],
  },
  {
    num: '04 / EdTech',
    name: 'Education Technology Platform',
    desc: 'Interactive learning platform with live streaming, real-time chat, multilingual support via i18next, and data visualisation dashboards.',
    tech: ['React.js', 'TypeScript', 'Redux', 'i18next'],
  },
]

export default function Projects() {
  return (
    <section id="projects">
      <div className="reveal">
        <div className="section-label">Projects</div>
        <div className="section-title">Things I've<br />shipped.</div>
        <div className="projects-grid">
          {projects.map(p => (
            <div className="project-card" key={p.num}>
              <div className="project-num">{p.num}</div>
              <div className="project-name">{p.name}</div>
              <div className="project-desc">{p.desc}</div>
              <div className="project-tech">
                {p.tech.map(t => <span className="tag" key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
