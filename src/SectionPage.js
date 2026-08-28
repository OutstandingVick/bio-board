import SiteHeader from './SiteHeader';
import Footer from './Footer';

export default function SectionPage({ children }) {
  return <main>
    <div className="paper-shell">
      <SiteHeader />
      {children}
    </div>
    <Footer />
  </main>;
}
