import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { team } from '../data/siteData'
import { Reveal, SectionHeading } from '../components/UI'

export default function Team() {
  const [failed, setFailed] = useState([])
  return (
    <section className="section team-section" id="team">
      <div className="container">
        <div className="team-heading-row"><SectionHeading eyebrow="LEADERSHIP" title={<>People behind the<br/><span>technology.</span></>} description="Meet the leadership team."/><div className="team-side-note">LEADERSHIP<br/>01 — 03</div></div>
        <div className="team-grid">
          {team.map((person, i) => <Reveal key={person.name} delay={i * .08} className="team-card">
            <div className="team-photo-wrap">
              {person.image && !failed.includes(person.name) ? <img src={person.image} alt={`${person.name} — ${person.role}`} loading="lazy" onError={() => setFailed(current => [...current, person.name])}/> : <div className="team-fallback">{person.initials}</div>}
              <span className="team-photo-label">VELTRIX / LEADERSHIP</span>
            </div>
            <div className="team-person-row"><div><h3>{person.name}</h3><p>{person.role}</p></div><span className="team-arrow"><ArrowUpRight size={17}/></span></div>
          </Reveal>)}
        </div>
        <p className="team-disclaimer">Leadership names and roles are retained from the existing company reference. Add approved portraits and biographies when they are available.</p>
      </div>
    </section>
  )
}
