import { ArrowUpRight, Check } from 'lucide-react'
import { Reveal, Eyebrow } from '../components/UI'

const differentiators = [
  ['End-to-end delivery', 'From discovery and architecture to release and ongoing improvement.'],
  ['AI with a purpose', 'Automation selected for practical value, not added for appearance.'],
  ['Built around your business', 'Custom workflows and interfaces shaped around real operating needs.'],
  ['Scalable foundations', 'Architecture and integration designed to evolve with the organization.'],
  ['Connected hardware & software', 'Bring devices, platforms and operational information together.'],
  ['Long-term partnership', 'A delivery mindset that includes support, learning and iteration.'],
]

export default function WhyChooseUs() {
  return (
    <section className="section why-section" id="why-us">
      <div className="container why-grid">
        <Reveal className="why-left">
          <Eyebrow>WHY VELTRIX</Eyebrow>
          <h2>Not another vendor.<br/><span>A technology partner.</span></h2>
          <p className="why-lead">The best technology decisions happen when business context and engineering discipline meet. We bring both into the same conversation.</p>
          <a href="/#contact" className="text-link">Let’s build something meaningful <ArrowUpRight size={16}/></a>
          <div className="why-visual"><div className="why-visual-lines"/><div className="why-visual-core">V</div><div className="why-visual-label label-one">STRATEGY</div><div className="why-visual-label label-two">ENGINEERING</div><div className="why-visual-label label-three">INTEGRATION</div></div>
        </Reveal>
        <div className="why-list">
          {differentiators.map(([title, text], i) => <Reveal key={title} delay={i * .045} className="why-item"><span className="why-item-index">0{i + 1}</span><div><h3>{title}</h3><p>{text}</p></div><span className="why-check"><Check size={15}/></span></Reveal>)}
        </div>
      </div>
    </section>
  )
}
