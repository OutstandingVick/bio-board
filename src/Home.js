import { Link } from 'react-router-dom';
import SiteHeader from './SiteHeader';
import Works from './Works';
import Experience from './Experience';
import Contact from './Contact';
import Developer from './Developer';
import Footer from './Footer';

export default function Home() {
  return <main><Link className="skip-link" to="/works">Skip to selected work</Link><div className="paper-shell">
    <SiteHeader />
    <section className="hero section-rule">
      <div className="section-meta"><span>Front Page</span><span>Filed under: Web3 Intelligence</span></div>
      <div className="hero-grid"><div className="hero-copy">
        <p className="eyebrow">Case No. 22 — Clarity Published</p>
        <h1>A Web3 storyteller making complex ideas simple — <em>protocol to people.</em></h1>
        <p className="standfirst">Three years in: Outstandingvick writes about Innovations in Solana, turning complex protocols into clear stories — making technical ideas easier to understand.</p>
        <p className="byline">By The Research Edition · Reporting from the Solana ecosystem</p>
        <div className="button-row"><Link className="button dark" to="/works">Read the work →</Link><Link className="button" to="/contact">Commission a story</Link></div>
        <div className="news-ticker"><div><strong>10</strong><span>Selected works</span></div><div><strong>Web3</strong><span>Primary beat</span></div><div><strong>Global</strong><span>Remote-ready</span></div><div><strong>Clear</strong><span>No jargon for jargon’s sake</span></div></div>
      </div><div className="hero-profile"><figure className="hero-portrait"><img src={`${process.env.PUBLIC_URL}/img/outstandingvick-laptop-amber.png`} alt="Outstandingvick, writer and researcher" decoding="async" /><figcaption>PICTURED: the writer, somewhere in his natural habitat</figcaption></figure><div className="portrait-notes"><p>He enjoys the whole process — going from a complex idea to a story people can actually understand. His work focuses on researching Web3, crypto, fintech, and emerging technology, then turning what he finds into clear, engaging writing.</p><p>When a topic calls for it, he goes deeper — reading documentation, analysing protocols, comparing products, and following market developments. The goal is always the same: find the important story underneath the complexity and explain why it matters.</p></div></div></div>
    </section>
    <Works /><Experience /><Contact /><Developer />
  </div><Footer /></main>;
}
