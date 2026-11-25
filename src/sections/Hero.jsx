import { motion } from 'motion/react'
import { ArrowDownRight, ArrowUpRight, CircleDot, Command, Database, Orbit, Workflow } from 'lucide-react'
import { GoldButton, Eyebrow } from '../components/UI'

const OrbitNode = ({ className, label, icon: Icon }) => (
  <motion.div className={`orbit-node ${className}`} animate={{ y: [0, -8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}>
    <span><Icon size={18} /></span><small>{label}</small>
  </motion.div>
)

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-grid-bg" />
      <div className="hero-hex hero-hex-one" /><div className="hero-hex hero-hex-two" /><div className="hero-hex hero-hex-three" />
      <div className="hero-noise" />
      <div className="container hero-inner">
        <div className="hero-copy">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
            <Eyebrow>TECHNOLOGY · INTELLIGENCE · TRANSFORMATION</Eyebrow>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .85, delay: .08 }}>
            Intelligent technology.<br /><span>Limitless possibilities.</span>
          </motion.h1>
          <motion.p className="hero-lead" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .2 }}>
            Transforming businesses through enterprise software, intelligent automation, connected systems and AI-powered innovation.
          </motion.p>
          <motion.div className="hero-actions" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .32 }}>
            <GoldButton href="/#services">Explore our solutions</GoldButton>
            <a href="/#contact" className="button button-quiet">Let’s discuss your project <ArrowUpRight size={16} /></a>
          </motion.div>
          <motion.div className="hero-trust-row" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .9, delay: .55 }}>
            <div className="trust-separator" />
            <span>One connected partner</span><span className="trust-dot" />
            <span>Software, systems & AI</span><span className="trust-dot" />
            <span>Built around your business</span>
          </motion.div>
        </div>

        <motion.div className="hero-art" initial={{ opacity: 0, scale: .92, x: 24 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 1, delay: .18, ease: 'easeOut' }}>
          <div className="hero-art-glow" />
          <div className="hero-orbit orbit-outer" /><div className="hero-orbit orbit-middle" /><div className="hero-orbit orbit-inner" />
          <div className="hero-core">
            <div className="core-halo" />
            <img src="/assets/veltrix-monogram.png" alt="VELTRIX monogram" />
            <span className="core-caption">INTELLIGENCE ENGINE</span>
          </div>
          <div className="hero-connector connector-one" /><div className="hero-connector connector-two" /><div className="hero-connector connector-three" />
          <OrbitNode className="node-ai" label="AI & automation" icon={Orbit} />
          <OrbitNode className="node-data" label="Connected data" icon={Database} />
          <OrbitNode className="node-systems" label="Enterprise systems" icon={Workflow} />
          <div className="hero-coordinate coordinate-one"><CircleDot size={12} /> SYSTEMS / 01</div>
          <div className="hero-coordinate coordinate-two"><Command size={12} /> BUILT TO CONNECT</div>
          <div className="hero-bottom-note"><span className="status-pulse" /> DIGITAL ECOSYSTEM <b>01 — 06</b></div>
        </motion.div>
      </div>
      <a className="hero-scroll" href="/#about"><span>Scroll to explore</span><ArrowDownRight size={17} /></a>
      <div className="hero-index">01 / 08 <span /></div>
    </section>
  )
}
