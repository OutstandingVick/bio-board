import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import ScrollToTop from './ScrollToTop';
import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import ScanPage from './ScanPage';

function App() {
  return (
    <Router>
      {/* <ScrollToTop /> */}
      <div className='min-h-screen bg-gradient-to-r from-indigo-950 to-blue-950 bg-center'>
        <Navbar />
        <div className='p-0'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/scanpage' element={<ScanPage />} />
          </Routes>
        </div>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
