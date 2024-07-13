/**
 * @file App.js
 * @module App
 * @desc Main application component that sets up routing and renders the application. 
 * Also initializes EmailJS for email functionality and Google Analytics for tracking.
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
 * @requires ./pages/GamePage
 * @requires ./components/navbarComponents/Navbar
 * @requires ./components/Footer
 * @requires ./components/ScrollToTop
 * @requires ./styles/scrollbar.css
 * @requires ./testingComponents/TailwindBreakPoints
 * @requires ./analytics
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

import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import News from './pages/News';
import GamePage from './pages/GamePage';
import Navbar from './components/navbarComponents/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// animation 
import { addVisibilityClassOnScroll } from './animations';
import './styles/FadeAnimation.css';

// testing component to remove after create responsive design - will be commented out until needed for development
import TailwindBreakPoints from './testingComponents/TailwindBreakPoints';

// Google Analytics
import { initializeGA, recordGAPage } from "./analytics";

// Initialize EmailJS with the user ID from environment variables
import emailjs from 'emailjs-com';
emailjs.init(process.env.REACT_APP_EMAILJS_USER_ID);

// Initialize Google Analytics
initializeGA();

// Component to track page views when the page changes after the first page load
function AnalyticsTracker() {
  const location = useLocation();
  const isFirstLoad = useRef(true);

  useEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
    } else {
      recordGAPage(location.pathname + location.search);
    }
  }, [location]);


  useEffect(() => {
    addVisibilityClassOnScroll();
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <AnalyticsTracker />
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
            <Route path="/games/:gameId" element={<GamePage />} /> {/* Use GamePage component with dynamic gameId */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;