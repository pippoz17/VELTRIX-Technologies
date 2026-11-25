import * as Lucide from 'lucide-react'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'

const toPascal = (value = '') => value.split('-').map(part => part.charAt(0).toUpperCase() + part.slice(1)).join('')

export function Icon({ name = 'sparkles', size = 20, strokeWidth = 1.7, ...props }) {
  const Component = Lucide[toPascal(name)] || Lucide.Sparkles
  return <Component size={size} strokeWidth={strokeWidth} aria-hidden="true" {...props} />
}

export function Reveal({ children, className = '', delay = 0, y = 24, ...props }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.14 }}
      transition={{ duration: 0.65, delay, ease: [0.2, 0.75, 0.25, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function Eyebrow({ children, light = false }) {
  return <div className={`eyebrow ${light ? 'eyebrow-light' : ''}`}><span className="eyebrow-dot" />{children}</div>
}

export function SectionHeading({ eyebrow, title, description, centered = false, light = false, children }) {
  return (
    <div className={`section-heading ${centered ? 'section-heading-centered' : ''} ${light ? 'section-heading-light' : ''}`}>
      {eyebrow && <Eyebrow light={light}>{eyebrow}</Eyebrow>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
      {children}
    </div>
  )
}

export function GoldButton({ to, href, children, variant = 'primary', className = '', ...props }) {
  const classes = `button button-${variant} ${className}`.trim()
  if (to) return <Link to={to} className={classes} {...props}>{children}<Icon name="arrow-up-right" size={16} /></Link>
  if (href) return <a href={href} className={classes} {...props}>{children}<Icon name="arrow-up-right" size={16} /></a>
  return <button className={classes} {...props}>{children}<Icon name="arrow-up-right" size={16} /></button>
}

export function ArrowLink({ to, href, children, className = '' }) {
  if (to) return <Link to={to} className={`arrow-link ${className}`}>{children}<Icon name="arrow-up-right" size={15} /></Link>
  return <a href={href} className={`arrow-link ${className}`}>{children}<Icon name="arrow-up-right" size={15} /></a>
}

export function Logo({ footer = false }) {
  return (
    <Link to="/" className={`brand-lockup ${footer ? 'brand-lockup-footer' : ''}`} aria-label="VELTRIX Technologies home">
      <span className="brand-mark"><img src="/assets/veltrix-monogram.png" alt="" /></span>
      <span className="brand-wordmark"><strong>VELTRIX</strong><small>TECHNOLOGIES</small></span>
    </Link>
  )
}

export function Tag({ children }) { return <span className="tag">{children}</span> }
