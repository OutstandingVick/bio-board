import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from 'react-scroll-to-top';
import './App.css';
import Home from './Home';
import Navbar from './Navbar';

function App() {
  return (
    <Router>
      {/* <ScrollToTop /> */}
      <div className='min-h-screen bg-main bg-center'>
        <ScrollToTop />
        <Navbar />
        <div className='p-0'>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
