import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, ArrowRight } from 'lucide-react'
import { services } from '../data/siteData'
import { Icon, Reveal, SectionHeading } from '../components/UI'

export default function Services() {
  const [featured, ...rest] = services
  return (
    <section className="section services-section" id="services">
      <div className="container">
        <div className="section-topline"><span>02 / CAPABILITIES</span><span>DISCOVER WHAT WE CAN BUILD TOGETHER</span></div>
        <SectionHeading eyebrow="OUR SERVICES" title={<>A complete technology stack.<br /><span>One connected vision.</span></>} description="From foundational enterprise systems to emerging AI workflows, bring the right capabilities together around your business." />
        <div className="services-layout">
          <Reveal className="service-feature-card">
            <div className="feature-card-top"><span className="feature-index">{featured.number} / FEATURED SOLUTION</span><span className="feature-icon"><Icon name={featured.icon} size={27} /></span></div>
            <div className="feature-card-content"><span className="mini-kicker">{featured.category}</span><h3>{featured.title}</h3><p>{featured.short}</p><div className="feature-points">{featured.points.slice(0, 3).map(point => <span key={point}>{point}</span>)}</div><Link to={`/services/${featured.slug}`} className="feature-link">Explore solution <ArrowUpRight size={17} /></Link></div>
            <div className="feature-graphic"><div className="feature-graphic-ring ring-one"/><div className="feature-graphic-ring ring-two"/><div className="feature-graphic-ring ring-three"/><div className="feature-graphic-core"><Icon name="workflow" size={42}/></div><div className="feature-node n1"/><div className="feature-node n2"/><div className="feature-node n3"/></div>
          </Reveal>
          <div className="service-list-grid">
            {rest.map((item, i) => <Reveal key={item.slug} delay={Math.min(i * .035, .24)} className="service-tile">
              <div className="service-tile-head"><span className="service-tile-number">{item.number}</span><span className="service-icon"><Icon name={item.icon} size={20}/></span></div>
              <span className="mini-kicker">{item.category}</span>
              <h3>{item.title}</h3>
              <p>{item.short}</p>
              <Link to={`/services/${item.slug}`} className="service-tile-link" aria-label={`Learn more about ${item.title}`}><ArrowUpRight size={17}/></Link>
            </Reveal>)}
          </div>
        </div>
        <div className="services-bottom"><span>13 CAPABILITIES · ONE DELIVERY PARTNER</span><a href="/#contact">Find the right solution for your business <ArrowRight size={16}/></a></div>
      </div>
    </section>
  )
}
