import { ArrowUpRight, Globe, MapPin } from 'lucide-react'
import { company, globalRegions } from '../data/siteData'
import { Reveal, Eyebrow } from '../components/UI'

export default function GlobalPresence() {
  return (
    <section className="section presence-section" id="global-presence">
      <div className="container presence-container">
        <Reveal className="presence-copy">
          <Eyebrow>GLOBAL PRESENCE</Eyebrow>
          <h2>Local understanding.<br/><span>Global perspective.</span></h2>
          <p>VELTRIX lists its head office in Coimbatore, Tamil Nadu. The regional names shown here are market references, not a claim of a staffed office in every location.</p>
          <div className="presence-hq"><span className="presence-pin"><MapPin size={19}/></span><div><small>HEAD OFFICE · INDIA</small><strong>Coimbatore, Tamil Nadu</strong><p>{company.address}</p></div></div>
          <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.mapsQuery)}`} target="_blank" rel="noreferrer" className="text-link">Open head office in Maps <ArrowUpRight size={16}/></a>
        </Reveal>
        <Reveal delay={.12} className="presence-map-panel">
          <div className="map-panel-top"><span><Globe size={15}/> REGIONAL REACH</span><span>REFERENCE COVERAGE</span></div>
          <div className="world-map-graphic" aria-label="Abstract global network illustration">
            <svg viewBox="0 0 720 380" role="img" aria-hidden="true">
              <defs><linearGradient id="land" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#d6aa55" stopOpacity=".22"/><stop offset="1" stopColor="#d6aa55" stopOpacity=".04"/></linearGradient></defs>
              <g fill="url(#land)" stroke="#d6aa55" strokeOpacity=".27" strokeWidth="1.3">
                <path d="M72 90l27-22 39 3 18 16 35 4 18 20-9 19-29 9-15 27-29 8-14 26-22-8-8-27-22-8-8-28 10-18-13-21z"/>
                <path d="M185 213l25 10 22 27-7 32-20 33-12 32-17-11-1-34-16-27 4-31z"/>
                <path d="M322 94l30-13 34 7 25-17 51 4 31 21 42-5 27 18-11 18-33 8-12 26-29 10-15 25-30-4-14-23-31-4-13-25-30-4-19-18-35-2-20-18z"/>
                <path d="M365 197l29-14 34 8 27 23 11 32-21 34-5 38-22 16-15-22-23-18-12-43-21-29z"/>
                <path d="M517 242l41-7 27 13 35-2 27 18-11 22-47 3-24-9-42 8-17-21z"/>
              </g>
              <g stroke="#d6aa55" strokeOpacity=".55" strokeDasharray="3 7" fill="none">
                <path d="M376 178Q263 67 149 127T80 174"/><path d="M376 178Q431 88 525 117T620 196"/><path d="M376 178Q487 233 565 262"/><path d="M376 178Q348 263 213 283"/><path d="M376 178Q516 150 602 130"/>
              </g>
              <g fill="#e8ca88" stroke="#090b0f" strokeWidth="5"><circle cx="376" cy="178" r="8"/><circle cx="149" cy="127" r="5"/><circle cx="525" cy="117" r="5"/><circle cx="620" cy="196" r="5"/><circle cx="565" cy="262" r="5"/><circle cx="213" cy="283" r="5"/></g>
              <circle cx="376" cy="178" r="22" fill="none" stroke="#d6aa55" strokeOpacity=".45"><animate attributeName="r" values="16;31;16" dur="4s" repeatCount="indefinite"/><animate attributeName="opacity" values=".5;0;.5" dur="4s" repeatCount="indefinite"/></circle>
            </svg>
            <div className="map-hq-label"><span/> COIMBATORE HQ</div>
          </div>
          <div className="region-list"><span className="region-heading">REGIONS REFERENCED</span><div>{globalRegions.map(region => <span key={region}>{region}</span>)}</div></div>
          <p className="map-footnote">Regional names are indicative market references. Confirm active offices, clients and operating locations before making a formal location claim.</p>
        </Reveal>
      </div>
    </section>
  )
}
