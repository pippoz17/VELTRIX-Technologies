import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { faqs } from '../data/siteData'
import { Reveal, SectionHeading } from '../components/UI'

export default function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section className="section faq-section" id="faq">
      <div className="container faq-layout">
        <Reveal><SectionHeading eyebrow="FREQUENTLY ASKED QUESTIONS" title={<>A few things<br/><span>worth knowing.</span></>} description="Need a more specific answer? Start a conversation with the team."/><a href="/#contact" className="text-link">Ask us directly <span>↗</span></a></Reveal>
        <div className="faq-list">
          {faqs.map((faq, i) => <Reveal key={faq.q} delay={i * .045} className={`faq-item ${open === i ? 'faq-open' : ''}`}>
            <button className="faq-question" aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}><span className="faq-number">0{i + 1}</span><strong>{faq.q}</strong><span className="faq-toggle">{open === i ? <Minus size={17}/> : <Plus size={17}/>}</span></button>
            {open === i && <div className="faq-answer"><p>{faq.a}</p></div>}
          </Reveal>)}
        </div>
      </div>
    </section>
  )
}
