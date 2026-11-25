import { useState } from 'react'
import { ArrowUpRight, Compass, Eye, Layers3, Search, Sparkles, Target } from 'lucide-react'
import { company } from '../data/siteData'
import { Eyebrow, Reveal, SectionHeading } from '../components/UI'

const panels = {
  mission: {
    label: 'Our mission', title: 'Unifying intelligence, automation and scale.',
    body: 'Catalyzing operational transformation through intelligent workflows, custom software engineering and connected growth systems — reducing friction for ambitious organizations.',
    icon: Target, points: ['Frictionless technology adoption', 'Mission-critical business workflows', 'One connected digital ecosystem'],
  },
  vision: {
    label: 'Our vision', title: 'A future where enterprise technology moves with intent.',
    body: 'Pioneering a future where intelligent, self-optimizing digital infrastructure helps organizations operate with greater clarity, adaptability and velocity.',
    icon: Eye, points: ['Responsible intelligent automation', 'Systems designed for global scale', 'Useful technology at every layer'],
  },
  approach: {
    label: 'Our approach', title: 'Start with the problem. Engineer the right system.',
    body: 'We bring discovery, design, engineering and integration into one delivery journey — so the solution is shaped around the people and processes it needs to serve.',
    icon: Compass, points: ['Understand before building', 'Connect people, platforms and data', 'Improve continuously after launch'],
  },
}

export default function About() {
  const [active, setActive] = useState('mission')
  const panel = panels[active]
  const PanelIcon = panel.icon

  return (
    <section className="section about-section" id="about">
      <div className="container">
        <div className="about-intro-grid">
          <Reveal><div className="about-intro-label"><Eyebrow>WHO WE ARE</Eyebrow><span>01 / COMPANY</span></div></Reveal>
          <Reveal delay={.08}>
            <h2 className="about-statement">We make technology <span>work as one.</span></h2>
            <p className="about-intro-copy">{company.name} brings enterprise software, digital products, AI-led automation and connected systems into a cohesive technology partner — from the first idea to the way it works every day.</p>
          </Reveal>
        </div>

        <div className="about-feature-grid">
          <Reveal className="about-feature-visual">
            <div className="about-visual-card">
              <div className="visual-grid" />
              <div className="visual-orbit visual-orbit-a" /><div className="visual-orbit visual-orbit-b" />
              <div className="visual-center"><img src="/assets/veltrix-monogram.png" alt="VELTRIX gold monogram" /></div>
              <div className="visual-label visual-label-a"><Sparkles size={14} /> Intelligence</div>
              <div className="visual-label visual-label-b"><Layers3 size={14} /> Integration</div>
              <div className="visual-label visual-label-c"><Search size={14} /> Insight</div>
              <div className="visual-corner-note">SYSTEMS IN SYNC<br /><strong>V / 01</strong></div>
            </div>
          </Reveal>
          <Reveal delay={.1} className="about-values-panel">
            <div className="tab-row" role="tablist" aria-label="Company principles">
              {Object.entries(panels).map(([key, value]) => <button key={key} role="tab" aria-selected={active === key} className={active === key ? 'active' : ''} onClick={() => setActive(key)}>{value.label}</button>)}
            </div>
            <div className="about-tab-content" key={active}>
              <div className="about-tab-icon"><PanelIcon size={22} /></div>
              <span className="mini-kicker">{panel.label.toUpperCase()}</span>
              <h3>{panel.title}</h3>
              <p>{panel.body}</p>
              <ul>{panel.points.map(point => <li key={point}><span className="list-check">↗</span>{point}</li>)}</ul>
              <a href="/#contact" className="text-link">Talk to our team <ArrowUpRight size={15} /></a>
            </div>
          </Reveal>
        </div>

        <div className="about-principles">
          <div><span>01</span><strong>Business-first thinking</strong><p>Technology is selected and shaped around a real business need.</p></div>
          <div><span>02</span><strong>Connected disciplines</strong><p>Strategy, design, software and integration work together.</p></div>
          <div><span>03</span><strong>Built for evolution</strong><p>Foundations that can adapt as products, teams and markets grow.</p></div>
        </div>
      </div>
    </section>
  )
}
