import { Link } from 'react-router-dom'
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react'
import { company, products, services, socialLinks } from '../data/siteData'
import { Logo } from './UI'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top container">
        <div className="footer-brand-col">
          <Logo footer />
          <p>Intelligent technology for connected businesses. We bring software, automation and digital experiences together.</p>
          <div className="footer-social-status"><span>CONNECT</span>{socialLinks.length ? socialLinks.map(item => <a key={item.label} href={item.url} target="_blank" rel="noreferrer">{item.label}</a>) : <small>Official social links to be confirmed</small>}</div>
        </div>
        <div className="footer-col"><h4>Company</h4><a href="/#about">About us</a><a href="/#industries">Industries</a><a href="/#process">Our process</a><a href="/#careers">Careers</a><a href="/#insights">Insights</a></div>
        <div className="footer-col"><h4>Solutions</h4>{services.slice(0, 5).map(item => <Link key={item.slug} to={`/services/${item.slug}`}>{item.title}</Link>)}<a href="/#services">All services <ArrowRight size={13} /></a></div>
        <div className="footer-col"><h4>Products</h4>{products.slice(0, 5).map(item => <Link key={item.slug} to={`/products/${item.slug}`}>{item.name}</Link>)}<a href="/#products">All products <ArrowRight size={13} /></a></div>
        <div className="footer-contact-col"><h4>Get in touch</h4><a href={`mailto:${company.email}`}><Mail size={15} />{company.email}</a><a href={`tel:${company.phoneHref}`}><Phone size={15} />{company.phone}</a><span><MapPin size={15} />{company.address}</span></div>
      </div>
      <div className="footer-bottom container">
        <span>© {new Date().getFullYear()} VELTRIX Technologies. All rights reserved.</span>
        <div><Link to="/privacy">Privacy notice</Link><Link to="/terms">Terms of use</Link></div>
        <span className="footer-credit">Built for what’s next <span>✦</span></span>
      </div>
    </footer>
  )
}
