import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { services } from '../data/siteData'
import { Icon, Eyebrow, GoldButton, Reveal } from '../components/UI'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find(item => item.slug === slug)
  if (!service) return <div className="not-found container"><h1>Solution not found</h1><Link to="/">Return home</Link></div>
  const related = services.filter(item => item.slug !== slug).slice(0, 3)
  return (
    <main className="detail-page">
      <div className="detail-hero container">
        <Link to="/#services" className="detail-back"><ArrowLeft size={15}/> All solutions</Link>
        <div className="detail-hero-grid"><div><Eyebrow>{service.category}</Eyebrow><span className="detail-number">SOLUTION / {service.number}</span><h1>{service.title}<span>.</span></h1><p>{service.description}</p><GoldButton href="/#contact">Discuss this solution</GoldButton></div><div className="detail-icon-stage"><div className="detail-icon-orbit orbit-a"/><div className="detail-icon-orbit orbit-b"/><div className="detail-icon-core"><Icon name={service.icon} size={58}/></div><span className="detail-stage-caption">VELTRIX / SYSTEMS</span></div></div>
      </div>
      <section className="section detail-content-section"><div className="container detail-content-grid"><Reveal><span className="mini-kicker">WHAT THIS INCLUDES</span><h2>Designed around<br/><span>the way you work.</span></h2><p className="detail-content-lead">A useful solution starts with a clear understanding of your people, processes and existing technology. The scope is shaped around the requirements discovered together.</p></Reveal><Reveal delay={.1} className="detail-includes">{service.points.map((point, i) => <div key={point}><span>0{i + 1}</span><strong>{point}</strong><CheckCircle2 size={17}/></div>)}</Reveal></div></section>
      <section className="detail-cta"><div className="container"><span className="mini-kicker">READY TO EXPLORE?</span><h2>Let’s shape the right<br/><span>solution together.</span></h2><GoldButton href="/#contact">Start a conversation</GoldButton></div></section>
      <section className="section related-section"><div className="container"><div className="related-header"><span className="mini-kicker">RELATED CAPABILITIES</span><Link to="/#services">View all solutions <ArrowUpRight size={15}/></Link></div><div className="related-grid">{related.map(item => <Link key={item.slug} to={`/services/${item.slug}`}><span><Icon name={item.icon} size={18}/></span><div><strong>{item.title}</strong><small>{item.category}</small></div><ArrowUpRight size={15}/></Link>)}</div></div></section>
    </main>
  )
}
