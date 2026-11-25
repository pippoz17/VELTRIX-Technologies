import { Link, useLocation } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { company } from '../data/siteData'

export default function LegalPage() {
  const { pathname } = useLocation()
  const privacy = pathname === '/privacy'
  return (
    <main className="legal-page container">
      <span className="mini-kicker">VELTRIX TECHNOLOGIES · LEGAL</span>
      <h1>{privacy ? 'Privacy notice' : 'Terms of use'}<span>.</span></h1>
      <p className="legal-lead">{privacy ? 'The VELTRIX privacy notice is being prepared and should be published here once approved by the company.' : 'The VELTRIX terms of use are being prepared and should be published here once approved by the company.'}</p>
      <div className="legal-review-note"><strong>Content required before launch</strong><p>{privacy ? 'Add the company-approved details covering data collected, purposes, retention, processors, user rights, cookies and a privacy contact.' : 'Add the company-approved terms covering website use, services, intellectual property, disclaimers, liability, governing law and contact details.'}</p><p>Do not publish this placeholder as a final legal policy.</p></div>
      <Link className="text-link" to="/">Return to homepage <ArrowUpRight size={15}/></Link>
      <small>For enquiries: {company.email}. Confirm the appropriate legal contact before launch.</small>
    </main>
  )
}
