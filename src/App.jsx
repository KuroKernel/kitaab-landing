import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';
import About from './pages/About';
import Features from './pages/Features';
import HowItWorks from './pages/HowItWorks';
import Contact from './pages/Contact';
import WhyKitaab from './pages/WhyKitaab';
import Signup from './pages/Signup';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/why-kitaab" element={<WhyKitaab />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
