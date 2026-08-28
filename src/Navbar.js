import { useState } from 'react';
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [['Work','#works'],['Experience','#experience'],['Developer','#developer'],['Contact','#contact']];
  return <nav className="nav-bar" aria-label="Main navigation"><a className="nav-brand" href="#home">Outstandingvick</a><button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="portfolio-navigation">Menu</button><div id="portfolio-navigation" className={`nav-links ${open ? 'open' : ''}`}>{links.map(([label,href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}<a className="nav-cta" href="mailto:victor.ogbonna@hotmail.com">Hire me</a></div></nav>;
}
