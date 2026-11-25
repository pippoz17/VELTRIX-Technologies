import { ArrowUpRight, Layers3 } from 'lucide-react'
import { projects } from '../data/siteData'
import { Reveal, SectionHeading, Tag } from '../components/UI'

export default function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <div className="projects-head"><SectionHeading eyebrow="ILLUSTRATIVE CAPABILITIES" title={<>Where ideas become<br /><span>working systems.</span></>} description="Illustrative scenarios showing how connected software, customer workflows and infrastructure can solve business problems."/><span className="project-placeholder-note">CAPABILITY CONCEPTS<br/>NOT CLIENT CASE STUDIES</span></div>
        <div className="projects-grid">
          {projects.map((project, i) => <Reveal key={project.title} delay={i * .08} className={`project-card project-card-${i + 1}`}>
            <div className="project-art"><div className="project-art-grid"/><div className={`project-art-shape project-art-shape-${i + 1}`}><Layers3 size={44}/></div><span className="project-art-index">CONCEPT / 0{i + 1}</span><span className="project-art-caption">ILLUSTRATIVE<br/>CONCEPT</span></div>
            <div className="project-meta"><span>{project.category}</span><span>CAPABILITY EXAMPLE 0{i + 1}</span></div>
            <h3>{project.title}</h3><p>{project.summary}</p>
            <div className="project-tags">{project.tags.map(tag => <Tag key={tag}>{tag}</Tag>)}</div>
            <a className="project-link" href="/#contact">Discuss a similar project <ArrowUpRight size={16}/></a>
          </Reveal>)}
        </div>
        <p className="projects-disclaimer">These cards are illustrative capability examples, not claims of completed client projects or measured outcomes.</p>
      </div>
    </section>
  )
}
