import Navbar from './Navbar';
import Works from './Works';
import About from './About';
import Experience from './Experience';
import Contact from './Contact';
import Footer from './Footer';

export default function Home() {
  return <main><a className="skip-link" href="#works">Skip to selected work</a><div className="paper-shell">
    <header className="masthead" id="home">
      <div className="masthead-kicker"><span>Lagos, Nigeria</span><span>The Research Edition</span><span>Est. 2023</span></div>
      <div className="masthead-title">Outstandingvick</div>
      <div className="masthead-subtitle">The Written Record of a Web3 Researcher</div>
      <div className="edition-line"><span>Monday · Ideas onchain</span><span>Vol. III</span><span>Research · Stories · Strategy</span><span>Open access</span></div>
    </header>
    <Navbar />
    <section className="hero section-rule">
      <div className="section-meta"><span>Front Page</span><span>Filed under: Web3 Intelligence</span></div>
      <div className="hero-grid"><div className="hero-copy">
        <p className="eyebrow">Dispatch No. 01 — Clarity Published</p>
        <h1>I turn complex Web3 ideas into stories people <em>understand.</em></h1>
        <p className="standfirst">Research, technical writing and narrative strategy for teams building the next internet.</p>
        <p className="byline">By Outstandingvick · Reporting from the Solana ecosystem</p>
        <div className="button-row"><a className="button dark" href="#works">Read the work →</a><a className="button" href="#contact">Commission a story</a></div>
      </div><figure className="hero-portrait"><img src={`${process.env.PUBLIC_URL}/img/aboutt.jpg`} alt="Outstandingvick, writer and researcher" /><figcaption>Pictured: the writer, somewhere between a protocol deep-dive and a deadline.</figcaption></figure></div>
      <div className="news-ticker"><div><strong>06</strong><span>Selected works</span></div><div><strong>Web3</strong><span>Primary beat</span></div><div><strong>Global</strong><span>Remote-ready</span></div><div><strong>Clear</strong><span>No jargon for jargon’s sake</span></div></div>
    </section>
    <Works /><About /><Experience /><Contact />
  </div><Footer /></main>;
}
