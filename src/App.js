import './App.css';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './Home';
import Works from './Works';
import Experience from './Experience';
import Developer from './Developer';
import Contact from './Contact';
import SectionPage from './SectionPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  return null;
}

export default function App() { return <BrowserRouter><ScrollToTop/><Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/works" element={<SectionPage><Works/></SectionPage>}/>
  <Route path="/experience" element={<SectionPage><Experience/></SectionPage>}/>
  <Route path="/developer" element={<SectionPage><Developer/></SectionPage>}/>
  <Route path="/contact" element={<SectionPage><Contact/></SectionPage>}/>
  <Route path="*" element={<Navigate to="/" replace/>}/>
</Routes></BrowserRouter>; }
