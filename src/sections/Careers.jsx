import { useMemo, useState } from 'react'
import { ArrowUpRight, Briefcase, Search, Workflow, Cpu, Compass, Lightbulb } from 'lucide-react'
import { careers, company } from '../data/siteData'
import { Reveal, SectionHeading } from '../components/UI'

export default function Careers() {
  const [query, setQuery] = useState('')
  const [department, setDepartment] = useState('All departments')
  const [type, setType] = useState('All types')
  const departments = ['All departments', ...new Set(careers.map(job => job.department))]
  const types = ['All types', ...new Set(careers.map(job => job.type))]
  const filtered = useMemo(() => careers.filter(job => {
    const search = `${job.title} ${job.department} ${job.description}`.toLowerCase()
    return search.includes(query.toLowerCase()) && (department === 'All departments' || job.department === department) && (type === 'All types' || job.type === type)
  }), [query, department, type])

  return (
    <section className="section careers-section" id="careers">
      <div className="container">
        <div className="careers-head"><SectionHeading eyebrow="CAREERS & TALENT" title={<>Build what comes next.<br/><span>Grow with us.</span></>} description="Bring your curiosity, craft and ambition to a team working across enterprise software, AI and digital experiences."/><div className="career-mark"><Briefcase size={26}/><span>CAREERS<br/>AT VELTRIX</span></div></div>
        <div className="careers-toolbar">
          <label className="career-search"><Search size={17}/><input value={query} onChange={event => setQuery(event.target.value)} placeholder="Search roles or skills" aria-label="Search roles or skills"/></label>
          <select value={department} onChange={event => setDepartment(event.target.value)} aria-label="Filter by department">{departments.map(value => <option key={value}>{value}</option>)}</select>
          <select value={type} onChange={event => setType(event.target.value)} aria-label="Filter by employment type">{types.map(value => <option key={value}>{value}</option>)}</select>
          <span className="career-results">{filtered.length} ROLE{filtered.length === 1 ? '' : 'S'}</span>
        </div>
        <div className="career-list">
          {filtered.map((job, i) => <Reveal key={job.title} delay={i * .06} className="career-row">
            <div className="career-row-number">0{i + 1}</div><div className="career-role"><h3>{job.title}</h3><p>{job.description}</p></div><div className="career-meta"><span>{job.department}</span><span>{job.location}</span><span>{job.type}</span></div><a href={`mailto:${company.email}?subject=${encodeURIComponent(`Application enquiry — ${job.title}`)}&body=${encodeURIComponent(`Hello VELTRIX team,\n\nI would like to enquire about the ${job.title} opportunity.\n\nPlease share the application process.\n\nRegards,`)}`} aria-label={`Apply for ${job.title}`}><ArrowUpRight size={18}/></a>
          </Reveal>)}
          {filtered.length === 0 && <div className="career-empty">No roles match these filters. Try a different search.</div>}
        </div>
        <div className="talent-track-head"><div><span className="mini-kicker">TALENT DEVELOPMENT</span><h3>Learn by building real capabilities.</h3></div><span>TALENT PATHWAYS</span></div>
        <div className="talent-track-grid">
          <a href={`mailto:${company.email}?subject=${encodeURIComponent('Talent programme enquiry — Automation')}`}><span className="talent-track-icon"><Workflow size={19}/></span><div><strong>Automation</strong><p>Enterprise AI workflows, API and webhook orchestration, CRM and enterprise data sync.</p></div><ArrowUpRight size={16}/></a>
          <a href={`mailto:${company.email}?subject=${encodeURIComponent('Talent programme enquiry — AOS Tech')}`}><span className="talent-track-icon"><Cpu size={19}/></span><div><strong>AOS Tech</strong><p>Agentic AI architecture, cloud infrastructure, telephony and POS hardware sync.</p></div><ArrowUpRight size={16}/></a>
          <a href={`mailto:${company.email}?subject=${encodeURIComponent('Talent programme enquiry — AOS Business')}`}><span className="talent-track-icon"><Compass size={19}/></span><div><strong>AOS Business Edition</strong><p>AI venture strategy, CTO systems, SaaS architecture and monetization.</p></div><ArrowUpRight size={16}/></a>
          <a href={`mailto:${company.email}?subject=${encodeURIComponent('Talent programme enquiry — MMA')}`}><span className="talent-track-icon"><Lightbulb size={19}/></span><div><strong>MMA — Make Money with AI</strong><p>AI funnels, performance marketing, SEO and automated campaign workflows.</p></div><ArrowUpRight size={16}/></a>
        </div>
        <div className="careers-footnote"><span>INTERNSHIPS · LEARNING TRACKS · CAREER OPPORTUNITIES</span><p>Role profiles and talent tracks are indicative. Contact the team to confirm current openings, programme terms and application details.</p></div>
      </div>
    </section>
  )
}
