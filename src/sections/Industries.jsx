import { ArrowUpRight } from 'lucide-react'
import { industries } from '../data/siteData'
import { Icon, Reveal, SectionHeading } from '../components/UI'

export default function Industries() {
  return (
    <section className="section industries-section" id="industries">
      <div className="container">
        <div className="industries-heading"><SectionHeading eyebrow="INDUSTRIES WE SERVE" title={<>Technology shaped around<br /><span>the realities of your industry.</span></>} description="Different sectors. Different operating models. A shared need for systems that are dependable, connected and easy to use."/><div className="industries-side-note"><span>ADAPTABLE BY DESIGN</span><p>We begin with the context of your business — not a pre-set template.</p></div></div>
        <div className="industry-grid">
          {industries.map((item, i) => <Reveal key={item.title} delay={i * .06} className={`industry-card industry-card-${i + 1}`}>
            <div className="industry-top"><span>0{i + 1}</span><span className="industry-icon"><Icon name={item.icon} size={24}/></span></div>
            <h3>{item.title}</h3><p>{item.detail}</p>
            <a href="/#contact" aria-label={`Discuss ${item.title} solutions`}><ArrowUpRight size={18}/></a>
          </Reveal>)}
        </div>
      </div>
    </section>
  )
}
