import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight, ExternalLink, CheckCircle2 } from 'lucide-react'
import { products } from '../data/siteData'
import { Icon, Eyebrow, GoldButton, Reveal } from '../components/UI'

export default function ProductDetail() {
  const { slug } = useParams()
  const product = products.find(item => item.slug === slug)
  if (!product) return <div className="not-found container"><h1>Product not found</h1><Link to="/">Return home</Link></div>
  return (
    <main className="detail-page product-detail-page">
      <div className="detail-hero container">
        <Link to="/#products" className="detail-back"><ArrowLeft size={15}/> All products</Link>
        <div className="detail-hero-grid"><div><Eyebrow>{product.category}</Eyebrow><span className="detail-number">PRODUCT / VELTRIX PORTFOLIO</span><h1>{product.name}<span>.</span></h1><h2 className="product-detail-descriptor">{product.descriptor}</h2><p>{product.description}</p><div className="product-detail-actions">{product.externalUrl ? <a href={product.externalUrl} target="_blank" rel="noreferrer" className="button button-primary">Visit product <ExternalLink size={16}/></a> : <span className="unverified-destination">Contact the team for product information</span>}<GoldButton href="/#contact" variant="secondary">Enquire about this product</GoldButton></div></div><div className="detail-icon-stage product-stage"><div className="detail-icon-orbit orbit-a"/><div className="detail-icon-orbit orbit-b"/><div className="product-detail-mark">{product.mark}</div><div className="product-detail-icon"><Icon name={product.icon} size={38}/></div><span className="detail-stage-caption">{product.name.toUpperCase()} / PLATFORM</span></div></div>
      </div>
      <section className="section detail-content-section"><div className="container detail-content-grid"><Reveal><span className="mini-kicker">PLATFORM OVERVIEW</span><h2>Technology with<br/><span>a clear purpose.</span></h2><p className="detail-content-lead">{product.detail} Explore the areas below as a starting point for a product conversation and confirm detailed capabilities with the product team.</p></Reveal><Reveal delay={.1} className="detail-includes">{product.features.map((feature, i) => <div key={feature}><span>0{i + 1}</span><strong>{feature}</strong><CheckCircle2 size={17}/></div>)}</Reveal></div></section>
      <section className="detail-cta"><div className="container"><span className="mini-kicker">PRODUCT ENQUIRY</span><h2>See how {product.name}<br/><span>could fit your workflow.</span></h2><GoldButton href="/#contact">Talk to our team</GoldButton></div></section>
    </main>
  )
}
