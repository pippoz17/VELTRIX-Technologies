import { ArrowUpRight, BookOpen } from 'lucide-react'
import { company, insights } from '../data/siteData'
import { Reveal, SectionHeading } from '../components/UI'

export default function Insights() {
  return (
    <section className="section insights-section" id="insights">
      <div className="container">
        <div className="insights-head"><SectionHeading eyebrow="INSIGHTS & IDEAS" title={<>Ideas for a more<br/><span>intelligent tomorrow.</span></>} description="A future editorial space for practical perspectives on AI, automation, software and digital transformation."/><a href={`mailto:${company.email}?subject=VELTRIX%20Insights%20Enquiry`} className="text-link">Suggest a topic <ArrowUpRight size={16}/></a></div>
        <div className="insights-grid">
          {insights.map((article, i) => <Reveal key={article.title} delay={i * .07} className="insight-card">
            <div className={`insight-art insight-art-${i + 1}`}><div className="insight-art-grid"/><div className="insight-art-symbol"><BookOpen size={30}/></div><span>INSIGHT / 0{i + 1}</span></div>
            <div className="insight-category">{article.category}</div><h3>{article.title}</h3><p>{article.summary}</p><div className="insight-bottom"><span>EDITORIAL CONCEPT</span><span className="insight-arrow"><ArrowUpRight size={17}/></span></div>
          </Reveal>)}
        </div>
        <p className="insights-disclaimer">These are proposed editorial topics, not published articles. Replace with approved posts and working article links when the content library is ready.</p>
      </div>
    </section>
  )
}
