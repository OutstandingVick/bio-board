import Navbar from './Navbar';
import Works from './Works';
import Experience from './Experience';
import Contact from './Contact';
import Footer from './Footer';

export default function Home() {
  const publicationDate = new Intl.DateTimeFormat('en-GB', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  }).format(new Date()).replace(',', '').toUpperCase();

  return <main><a className="skip-link" href="#works">Skip to selected work</a><div className="paper-shell">
    <header className="masthead" id="home">
      <div className="masthead-kicker"><span>Lagos, Nigeria</span><span>The Research Edition</span><span>Est. 2023</span></div>
      <div className="masthead-title">Outstandingvick</div>
      <br/>
      <div className="masthead-subtitle">The Written Record of a Web3 Researcher</div>
      <div className="edition-line"><span>{publicationDate}</span><span>Vol. III</span><span>Research · Stories · Strategy</span><span>Open access</span></div>
    </header>
    <Navbar />
    <section className="hero section-rule">
      <div className="section-meta"><span>Front Page</span><span>Filed under: Web3 Intelligence</span></div>
      <div className="hero-grid"><div className="hero-copy">
        <p className="eyebrow">Case No. 22 — Clarity Published</p>
        <h1>A Web3 storyteller making complex ideas simple — <em>protocol to people.</em></h1>
        <p className="standfirst">Three years in: Outstandingvick writes about Innovations in Solana, turning complex protocols into clear stories — making technical ideas easier to understand.</p>
        <p className="byline">By The Research Edition · Reporting from the Solana ecosystem</p>
        <div className="button-row"><a className="button dark" href="#works">Read the work →</a><a className="button" href="#contact">Commission a story</a></div>
        <div className="news-ticker"><div><strong>10</strong><span>Selected works</span></div><div><strong>Web3</strong><span>Primary beat</span></div><div><strong>Global</strong><span>Remote-ready</span></div><div><strong>Clear</strong><span>No jargon for jargon’s sake</span></div></div>
      </div><div className="hero-profile"><figure className="hero-portrait"><img src={`${process.env.PUBLIC_URL}/img/outstandingvick-laptop-amber.png`} alt="Outstandingvick, writer and researcher" decoding="async" /><figcaption>PICTURED: the writer, somewhere in his natural habitat</figcaption></figure><div className="portrait-notes"><p>He enjoys the whole process — going from a complex idea to a story people can actually understand. His work focuses on researching Web3, crypto, fintech, and emerging technology, then turning what he finds into clear, engaging writing.</p><p>When a topic calls for it, he goes deeper — reading documentation, analysing protocols, comparing products, and following market developments. The goal is always the same: find the important story underneath the complexity and explain why it matters.</p></div></div></div>
    </section>
    <Works /><Experience /><Contact />
  </div><Footer /></main>;
}
