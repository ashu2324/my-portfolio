interface ExpItem {
  period: string
  type: string
  company: string
  role: string
  desc: string
  chips: string[]
}

const experiences: ExpItem[] = [
  {
    period: 'Nov 2025 — Present',
    type: 'Full-time · Gandhinagar',
    company: 'Dev Information Technology Ltd.',
    role: 'Software Developer — AEM',
    desc: 'Led AEM development for Gujarat Tourism platform post vendor transition from Cyfuture. Built 12+ reusable HTL components across 25+ pages, reducing content duplication by 30%. Managed clientlibs, templates, policies, and publishing workflows — ensuring zero-downtime delivery throughout the transition.',
    chips: ['AEM 6.x', 'HTL', 'Clientlibs', 'DAM', 'Templates'],
  },
  {
    period: 'Apr 2025 — Oct 2025',
    type: 'Full-time · Gandhinagar',
    company: 'Cyfuture India Pvt. Ltd.',
    role: 'Software Developer — AEM',
    desc: 'Worked on Gujarat Tourism government portal — a high-traffic multi-module platform covering booking and grievance management. Implemented AEM components, ensured consistent content structuring, and resolved production issues maintaining platform stability.',
    chips: ['AEM', 'HTL', 'Content Authoring', 'Production Support'],
  },
  {
    period: 'Jan 2023 — Mar 2025',
    type: 'Full-time · Ahmedabad',
    company: 'Krish Technolabs Pvt. Ltd.',
    role: 'Software Developer (Joined as Junior)',
    desc: 'Built enterprise React applications across fintech, EdTech, and e-commerce platforms. Owned component architecture, managed state with Redux Toolkit, integrated REST APIs, and reduced bundle size by 25% through performance optimisation. Led code reviews in Agile sprints.',
    chips: ['React.js', 'TypeScript', 'Redux', 'Node.js', 'MongoDB'],
  },
]

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="reveal">
        <div className="section-label">Work Experience</div>
        <div className="section-title">Where I've<br />been building.</div>
        <div className="exp-timeline">
          {experiences.map((exp, i) => (
            <div className="exp-item" key={i}>
              <div className="exp-meta">
                <span className="exp-period">{exp.period}</span>
                <span className="exp-type">{exp.type}</span>
              </div>
              <div className="exp-company">{exp.company}</div>
              <div className="exp-role">{exp.role}</div>
              <div className="exp-desc">{exp.desc}</div>
              <div className="exp-chips">
                {exp.chips.map(c => <span className="chip" key={c}>{c}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
