import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import Hero from './sections/Hero'
import About from './sections/About'
import Services from './sections/Services'
import Products from './sections/Products'
import Industries from './sections/Industries'
import WhyChooseUs from './sections/WhyChooseUs'
import Process from './sections/Process'
import Projects from './sections/Projects'
import GlobalPresence from './sections/GlobalPresence'
import Team from './sections/Team'
import Careers from './sections/Careers'
import Insights from './sections/Insights'
import FAQ from './sections/FAQ'
import Contact from './sections/Contact'
import ServiceDetail from './pages/ServiceDetail'
import ProductDetail from './pages/ProductDetail'
import LegalPage from './pages/LegalPage'

function ScrollManager() {
  const location = useLocation()
  useEffect(() => {
    if (location.hash) {
      const target = document.getElementById(location.hash.slice(1))
      if (target) setTimeout(() => target.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80)
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' })
    }
  }, [location.pathname, location.hash])
  return null
}

function HomePage() {
  return <main>
    <Hero />
    <About />
    <Services />
    <Products />
    <Industries />
    <WhyChooseUs />
    <Process />
    <Projects />
    <GlobalPresence />
    <Team />
    <Careers />
    <Insights />
    <FAQ />
    <Contact />
  </main>
}

function AppShell() {
  return <>
    <ScrollManager />
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services/:slug" element={<ServiceDetail />} />
      <Route path="/products/:slug" element={<ProductDetail />} />
      <Route path="/privacy" element={<LegalPage />} />
      <Route path="/terms" element={<LegalPage />} />
      <Route path="*" element={<div className="not-found container"><h1>Page not found.</h1><a href="/">Back to home ↗</a></div>} />
    </Routes>
    <Footer />
    <BackToTop />
  </>
}

export default function App() {
  return <BrowserRouter><AppShell /></BrowserRouter>
}
