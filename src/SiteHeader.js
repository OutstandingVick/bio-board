import Navbar from './Navbar';

export default function SiteHeader() {
  const publicationDate = new Intl.DateTimeFormat('en-GB', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  }).format(new Date()).replace(',', '').toUpperCase();

  return <>
    <header className="masthead" id="home">
      <div className="masthead-kicker"><span>Lagos, Nigeria</span><span>The Research Edition</span><span>Est. 2023</span></div>
      <div className="masthead-title">Outstandingvick</div>
      <br/>
      <div className="masthead-subtitle">The Written Record of a Web3 Researcher</div>
      <div className="edition-line"><span>{publicationDate}</span><span>Vol. III</span><span>Research · Stories · Strategy</span><span>Open access</span></div>
    </header>
    <Navbar />
  </>;
}
