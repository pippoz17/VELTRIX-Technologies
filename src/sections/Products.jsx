import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, ArrowRight, ExternalLink } from 'lucide-react'
import { products } from '../data/siteData'
import { Icon, Reveal, SectionHeading } from '../components/UI'

const categories = ['All products', 'AI & automation', 'Communication', 'Business platforms', 'Learning technology']
const categoryFor = (product) => {
  if (['zenxai'].includes(product.slug)) return 'AI & automation'
  if (['zenvoice', 'zenchat'].includes(product.slug)) return 'Communication'
  if (['zenxai-crm', 'zenhealth', 'zenfinance'].includes(product.slug)) return 'Business platforms'
  return 'Learning technology'
}

export default function Products() {
  const [active, setActive] = useState('All products')
  const filtered = useMemo(() => active === 'All products' ? products : products.filter(product => categoryFor(product) === active), [active])
  return (
    <section className="section products-section" id="products">
      <div className="container">
        <div className="products-heading-row">
          <SectionHeading eyebrow="PRODUCTS & PLATFORMS" title={<>Purpose-built platforms.<br /><span>Designed to move business forward.</span></>} description="Explore the ZenXAI product ecosystem across AI automation, voice, customer conversations, healthcare, finance and learning." />
          <div className="products-heading-aside"><span className="product-count">{String(products.length).padStart(2, '0')}</span><span>PLATFORMS IN THE<br/>PORTFOLIO</span></div>
        </div>
        <div className="product-filter-row" role="tablist" aria-label="Filter products">
          {categories.map(category => <button key={category} className={active === category ? 'active' : ''} onClick={() => setActive(category)} role="tab" aria-selected={active === category}>{category}</button>)}
        </div>
        <div className="products-grid">
          {filtered.map((product, i) => <Reveal key={product.slug} delay={Math.min(i * .035, .25)} className="product-card">
            <div className="product-card-top"><span className="product-brand-mark">{product.mark}</span><span className="product-open-icon"><ArrowUpRight size={17}/></span></div>
            <span className="mini-kicker">{product.category}</span>
            <h3>{product.name}</h3>
            <h4>{product.descriptor}</h4>
            <p>{product.description}</p>
            <div className="product-card-bottom"><Link to={`/products/${product.slug}`}>Explore product <ArrowRight size={15}/></Link>{product.externalUrl && <a href={product.externalUrl} target="_blank" rel="noreferrer" aria-label={`Open ${product.name} external site`}><ExternalLink size={14}/></a>}</div>
          </Reveal>)}
        </div>
        <div className="products-note"><span className="note-symbol">i</span><p>Product information is summarized from the public ZenXAI product site. Items without a verified public product destination open an on-site overview; confirm current availability and specifications with the product team.</p><a href="/#contact">Ask about a platform <ArrowUpRight size={15}/></a></div>
      </div>
    </section>
  )
}
