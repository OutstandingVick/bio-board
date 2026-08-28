import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [['Work','/works'],['Experience','/experience'],['Developer','/developer'],['Contact','/contact']];
  return <nav className="nav-bar" aria-label="Main navigation"><Link className="nav-brand" to="/">Outstandingvick</Link><button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="portfolio-navigation">Menu</button><div id="portfolio-navigation" className={`nav-links ${open ? 'open' : ''}`}>{links.map(([label,path]) => <NavLink key={path} to={path} onClick={() => setOpen(false)}>{label}</NavLink>)}<a className="nav-cta" href="mailto:victor.ogbonna@hotmail.com">Hire me</a></div></nav>;
}
