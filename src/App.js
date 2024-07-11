/**
 * @file App.js
 * @module App
 * @desc Main application component that sets up routing and renders the application. 
 * Also initializes EmailJS for email functionality.
 * 
 * @component App
 * 
 * @requires react
 * @requires react-router-dom
 * @requires emailjs-com
 * @requires ./pages/Home
 * @requires ./pages/Contact
 * @requires ./pages/About
 * @requires ./pages/News
 * @requires ./pages/games/Zeitghast
 * @requires ./pages/games/TempGame
 * @requires ./components/navbarComponents/Navbar
 * @requires ./components/Footer
 * @requires ./components/ScrollToTop
 * @requires ./styles/scrollbar.css
 * 
 * @see {@link https://reactrouter.com/|React Router Documentation}
 * @see {@link https://www.emailjs.com/docs/|EmailJS Documentation}
 * 
 * @returns {JSX.Element} The main application component.
 * 
 * @example
 * // Example usage of App component
 * <App />
 * 
 * @created 2024-07-10
 * @updated 2024-07-12
 * 
 * @function
 * Initializes EmailJS with the user ID from environment variables.
 */
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import News from './pages/News';
import Zeitghast from './pages/games/Zeitghast';
import TempGame from './pages/games/TempGame';
import Navbar from './components/navbarComponents/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// testing component to remove after create responsive design
import TailwindBreakPoints from './testingComponents/TailwindBreakPoints';

// Initialize EmailJS with the user ID from environment variables
import emailjs from 'emailjs-com';
emailjs.init(process.env.REACT_APP_EMAILJS_USER_ID);

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <TailwindBreakPoints />
        <ScrollToTop />
        <div className="flex-grow bg-primary">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<News />} />
            <Route path="/games/Zeitghast" element={<Zeitghast />} />
            <Route path="/games/TempGame" element={<TempGame />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
