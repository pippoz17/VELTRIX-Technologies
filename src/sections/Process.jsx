import { ArrowRight } from 'lucide-react'
import { processSteps } from '../data/siteData'
import { Reveal, SectionHeading } from '../components/UI'

export default function Process() {
  return (
    <section className="section process-section" id="process">
      <div className="container">
        <div className="process-head-row"><SectionHeading eyebrow="HOW WE WORK" title={<>A clear path from<br /><span>idea to impact.</span></>} description="A collaborative delivery model that keeps the problem, people and outcome in view at every stage."/><div className="process-side-note"><span>OUR DELIVERY FRAMEWORK</span><strong>06 steps <ArrowRight size={16}/></strong></div></div>
        <div className="process-timeline">
          <div className="timeline-track" />
          {processSteps.map((step, i) => <Reveal key={step.number} delay={i * .07} className={`process-step process-step-${i + 1}`}>
            <div className="process-step-top"><span>{step.number}</span><div className="timeline-node"><i/></div></div>
            <h3>{step.title}</h3><p>{step.text}</p>
          </Reveal>)}
        </div>
      </div>
    </section>
  )
}
