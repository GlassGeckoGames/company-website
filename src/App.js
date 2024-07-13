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
 * @requires framer-motion
 * @requires emailjs-com
 * @requires ./pages/Home
 * @requires ./pages/Contact
 * @requires ./pages/About
 * @requires ./pages/News
 * @requires ./pages/GamePage
 * @requires ./components/navbarComponents/Navbar
 * @requires ./components/Footer
 * @requires ./components/ScrollToTop
 * @requires ./testingComponents/TailwindBreakPoints
 * @requires ./analytics
 * 
 * @see {@link https://reactjs.org/docs/getting-started.html|React Documentation}
 * @see {@link https://reactrouter.com/|React Router Documentation}
 * @see {@link https://www.framer.com/motion/|Framer Motion Documentation}
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
import TailwindBreakPoints from './testingComponents/TailwindBreakPoints'; // only for development
import { initializeGA, recordGAPage } from "./analytics";
import emailjs from 'emailjs-com';
import { AnimatePresence, motion } from 'framer-motion';

// Initialize EmailJS with the user ID from environment variables
emailjs.init(process.env.REACT_APP_EMAILJS_USER_ID);

// Initialize Google Analytics
initializeGA();

// Define animation variants for route transitions
const routeVariants = {
  initial: { opacity: 0 },
  final: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.5 } }
};

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

  return null;
}

// LocationProvider Component to wrap children with AnimatePresence
function LocationProvider({ children }) {
  return <AnimatePresence mode='wait'>{children}</AnimatePresence>;
}

// RoutesWithAnimation Component to handle route animations
function RoutesWithAnimation() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
      <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
      <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
      <Route path="/news" element={<PageWrapper><News /></PageWrapper>} />
      <Route path="/games/:gameId" element={<PageWrapper><GamePage /></PageWrapper>} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

// PageWrapper Component for route animations
function PageWrapper({ children }) {
  return (
    <motion.div
      variants={routeVariants}
      initial="initial"
      animate="final"
      exit="exit"
    >
      {children}
    </motion.div>
  );
}

function App() {
  return (
    <Router>
      <AnalyticsTracker />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <ScrollToTop />
        <div className="flex-grow">
          <LocationProvider>
            <RoutesWithAnimation />
          </LocationProvider>
        </div>
        <Footer />
        <TailwindBreakPoints />
      </div>
    </Router>
  );
}

export default App;
