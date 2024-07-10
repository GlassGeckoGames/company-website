import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import News from './pages/News';
import Zeitghast from './pages/games/Zeitghast';
import TempGame from './pages/games/TempGame';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow bg-primary">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<News />} />
            <Route path="/games/Zeitghast" element={<Zeitghast />} />
            <Route path="/games/TempGame" element={<TempGame />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
