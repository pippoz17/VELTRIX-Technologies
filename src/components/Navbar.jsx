import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronDown, Menu, X } from 'lucide-react'
import { Logo, Icon, GoldButton } from './UI'
import { services, products } from '../data/siteData'

const mainLinks = [
  { label: 'About', href: '/#about' },
  { label: 'Industries', href: '/#industries' },
  { label: 'Careers', href: '/#careers' },
  { label: 'Contact', href: '/#contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState('')
  const location = useLocation()

  useEffect(() => {
    setMobileOpen(false)
    setActiveMenu('')
  }, [location.pathname, location.hash])

  useEffect(() => {
    document.body.classList.toggle('menu-open', mobileOpen)
    return () => document.body.classList.remove('menu-open')
  }, [mobileOpen])

  const close = () => { setMobileOpen(false); setActiveMenu('') }

  return (
    <header className="site-header">
      <div className="nav-shell container">
        <Logo />
        <nav className="desktop-nav" aria-label="Main navigation">
          <Link to="/">Home</Link>
          <button className={`nav-dropdown-trigger ${activeMenu === 'services' ? 'is-active' : ''}`} onClick={() => setActiveMenu('services')} onMouseEnter={() => setActiveMenu('services')} aria-expanded={activeMenu === 'services'}>
            Solutions <ChevronDown size={14} />
          </button>
          <button className={`nav-dropdown-trigger ${activeMenu === 'products' ? 'is-active' : ''}`} onClick={() => setActiveMenu('products')} onMouseEnter={() => setActiveMenu('products')} aria-expanded={activeMenu === 'products'}>
            Products <ChevronDown size={14} />
          </button>
          {mainLinks.map(link => <a key={link.label} href={link.href}>{link.label}</a>)}
        </nav>
        <div className="nav-actions">
          <GoldButton href="/#contact" className="nav-cta">Get in Touch</GoldButton>
          <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={mobileOpen}>
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {activeMenu && (
        <div className="mega-backdrop" onMouseLeave={() => setActiveMenu('')}>
          <div className="mega-menu container" onMouseLeave={() => setActiveMenu('')}>
            {activeMenu === 'services' ? <>
              <div className="mega-intro"><span className="mega-kicker">WHAT WE DO</span><h3>Technology that works together.</h3><p>Explore the capabilities that connect business processes, people and platforms.</p><Link to="/#services" onClick={close}>All solutions <Icon name="arrow-up-right" size={15} /></Link></div>
              <div className="mega-links">
                {services.slice(0, 8).map(item => <Link key={item.slug} to={`/services/${item.slug}`} onClick={close}><span className="mega-icon"><Icon name={item.icon} size={17} /></span><span>{item.title}<small>{item.category}</small></span><Icon name="arrow-up-right" size={14} /></Link>)}
              </div>
            </> : <>
              <div className="mega-intro"><span className="mega-kicker">OUR PLATFORMS</span><h3>Purpose-built products.</h3><p>Discover platforms for AI, communications, customer experience and operations.</p><Link to="/#products" onClick={close}>Explore portfolio <Icon name="arrow-up-right" size={15} /></Link></div>
              <div className="mega-products">
                {products.slice(0, 8).map(item => <Link key={item.slug} to={`/products/${item.slug}`} onClick={close}><span className="product-mini-mark">{item.mark}</span><span>{item.name}<small>{item.descriptor}</small></span><Icon name="arrow-up-right" size={14} /></Link>)}
              </div>
            </>}
          </div>
        </div>
      )}

      {mobileOpen && <div className="mobile-menu">
        <div className="mobile-menu-inner">
          <Link to="/" onClick={close}>Home <Icon name="arrow-up-right" /></Link>
          <a href="/#about" onClick={close}>About Us <Icon name="arrow-up-right" /></a>
          <button onClick={() => setActiveMenu(activeMenu === 'mobile-services' ? '' : 'mobile-services')}>Services <ChevronDown size={16} /></button>
          {activeMenu === 'mobile-services' && <div className="mobile-submenu">{services.map(item => <Link key={item.slug} to={`/services/${item.slug}`} onClick={close}>{item.title}</Link>)}</div>}
          <button onClick={() => setActiveMenu(activeMenu === 'mobile-products' ? '' : 'mobile-products')}>Products <ChevronDown size={16} /></button>
          {activeMenu === 'mobile-products' && <div className="mobile-submenu">{products.map(item => <Link key={item.slug} to={`/products/${item.slug}`} onClick={close}>{item.name}</Link>)}</div>}
          <a href="/#industries" onClick={close}>Industries <Icon name="arrow-up-right" /></a>
          <a href="/#careers" onClick={close}>Careers <Icon name="arrow-up-right" /></a>
          <a href="/#contact" onClick={close}>Contact Us <Icon name="arrow-up-right" /></a>
          <GoldButton href="/#contact" className="mobile-cta" onClick={close}>Start a conversation</GoldButton>
        </div>
      </div>}
    </header>
  )
}
