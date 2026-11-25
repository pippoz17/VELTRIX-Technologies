import { useState } from 'react'
import { ArrowUpRight, Mail, MapPin, Phone, Send, CheckCircle2, AlertCircle } from 'lucide-react'
import { company, services } from '../data/siteData'
import { Eyebrow, Reveal } from '../components/UI'

const initialForm = { name: '', email: '', phone: '', business: '', service: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [feedback, setFeedback] = useState('')
  const [feedbackType, setFeedbackType] = useState('success')

  const update = (event) => setForm({ ...form, [event.target.name]: event.target.value })
  const submit = (event) => {
    event.preventDefault()
    setFeedback('')
    if (!form.name.trim() || !form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email) || !form.message.trim()) {
      setFeedbackType('error')
      setFeedback('Please add your name, a valid email address and a short project message.')
      return
    }
    const subject = `Website enquiry — ${form.service || 'General discussion'}`
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone || 'Not provided'}`,
      `Company: ${form.business || 'Not provided'}`,
      `Service: ${form.service || 'Not selected'}`,
      '', 'Message:', form.message,
    ].join('\n')
    const mailto = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailto
    setFeedbackType('success')
    setFeedback(`Your email app should open with the enquiry addressed to ${company.email}. This frontend form does not send data to a server. If no email app opens, contact the team directly using the details shown here.`)
  }

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="contact-banner"><div className="contact-banner-glow"/><div><Eyebrow>START A CONVERSATION</Eyebrow><h2>Let’s engineer<br/><span>what’s next.</span></h2><p>Tell us what you’re trying to solve. We’ll start with the business need and work towards the right technology.</p></div><div className="contact-banner-side"><span>HAVE A PROJECT IN MIND?</span><a href={`mailto:${company.email}`}>Talk to our team <ArrowUpRight size={17}/></a><div className="banner-mark">V</div></div></div>
        <div className="contact-content-grid">
          <Reveal className="contact-info">
            <span className="mini-kicker">CONTACT DETAILS</span><h3>We’re one message away.</h3><p>Reach out for product information, project enquiries, partnerships or career questions.</p>
            <a className="contact-detail" href={`mailto:${company.email}`}><span><Mail size={17}/></span><div><small>EMAIL</small><strong>{company.email}</strong></div><ArrowUpRight size={16}/></a>
            <a className="contact-detail" href={`tel:${company.phoneHref}`}><span><Phone size={17}/></span><div><small>PHONE</small><strong>{company.phone}</strong></div><ArrowUpRight size={16}/></a>
            <div className="contact-detail contact-address"><span><MapPin size={17}/></span><div><small>HEAD OFFICE</small><strong>{company.address}</strong></div></div>
            <div className="contact-info-note"><span className="note-dot"/>For project, product, partnership and career enquiries.</div>
          </Reveal>
          <Reveal delay={.12} className="contact-form-wrap">
            <div className="form-heading"><div><span className="mini-kicker">PROJECT ENQUIRY</span><h3>Tell us a little about it.</h3></div><span>01 — 06</span></div>
            <form className="contact-form" onSubmit={submit} noValidate>
              <div className="form-row"><label>Full name <b>*</b><input name="name" value={form.name} onChange={update} placeholder="Your name" autoComplete="name" required /></label><label>Email address <b>*</b><input type="email" name="email" value={form.email} onChange={update} placeholder="you@company.com" autoComplete="email" required /></label></div>
              <div className="form-row"><label>Phone number<input name="phone" value={form.phone} onChange={update} placeholder="+91 98765 43210" autoComplete="tel" /></label><label>Company name<input name="business" value={form.business} onChange={update} placeholder="Your organisation" autoComplete="organization" /></label></div>
              <label>Service interested in<select name="service" value={form.service} onChange={update}><option value="">Select a solution</option>{services.map(service => <option key={service.slug} value={service.title}>{service.title}</option>)}<option value="Product enquiry">Product enquiry</option><option value="Careers">Careers</option><option value="Other">Other</option></select></label>
              <label>Project details <b>*</b><textarea name="message" rows="4" value={form.message} onChange={update} placeholder="What are you looking to build, improve or connect?" required /></label>
              <div className="form-footer"><p><span>*</span> Required fields. Selecting Prepare enquiry opens your email application; this form does not submit to a website server.</p><button className="button button-primary" type="submit">Prepare enquiry <Send size={16}/></button></div>
              {feedback && <div className={`form-feedback ${feedbackType}`} role="status">{feedbackType === 'success' ? <CheckCircle2 size={17}/> : <AlertCircle size={17}/>}<span>{feedback}</span></div>}
            </form>
          </Reveal>
        </div>
        <div className="map-embed-wrap"><div className="map-embed-heading"><span><MapPin size={16}/> FIND OUR HEAD OFFICE</span><a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.mapsQuery)}`} target="_blank" rel="noreferrer">Open in Google Maps <ArrowUpRight size={14}/></a></div><iframe title="Map to VELTRIX head office in Coimbatore" src={`https://www.google.com/maps?q=${encodeURIComponent(company.mapsQuery)}&output=embed`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>
      </div>
    </section>
  )
}
