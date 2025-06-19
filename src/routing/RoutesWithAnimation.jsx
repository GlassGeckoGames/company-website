/**
 * @file RoutesWithAnimation.jsx
 * @module RoutesWithAnimation
 * @desc Defines all animated routes using Framer Motion. Includes blur, scale, and directional slide transitions.
 *       The PageTransition wrapper handles enter/exit animations synced with route changes.
 * 
 * @see {@link https://reactrouter.com/en/main/hooks/use-location | useLocation}
 * @see {@link https://www.framer.com/motion/ | Framer Motion Documentation}
 * 
 * @author Chace Nielson
 * @created May 25, 2025
 * @updated May 27, 2025
 */
import { useEffect, useRef, useState } from 'react';
import { useLocation, Routes, Route, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Page components
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import About from '../pages/About';
import News from '../pages/News';
import GamePage from '../pages/GamePage';
import { useLayoutEffect } from 'react';

const transitionDuration = 0.6;

// 🔁 Must be defined before it's used
const PageTransition = ({ children }) => {
  const { pathname } = useLocation();
  const [fadeOut, setFadeOut] = useState(false);
  const initialRenderRef = useRef(true);

  useEffect(() => {
    setFadeOut(false);
    initialRenderRef.current = false;
  }, [pathname]);

// Custom hook to detect mobile viewport

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < breakpoint);

  useLayoutEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < breakpoint);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);

  return isMobile;
}

const isMobile = useIsMobile();

  // ❌ Skip animation on mobile — just return the children
  if (isMobile) return <>{children}</>;


  return (

    <>
      <motion.div
        key={pathname + "-overlay"}
        initial={{ opacity: 0.5 }}
        animate={{ opacity: fadeOut ? 0 : 0.4 }}
        exit={{ opacity: 0.5 }}
        transition={{
          opacity: { duration: fadeOut ? 0.4 : 0, delay: fadeOut ? 0 : 0.2, ease: "easeInOut" }
        }}
        onAnimationComplete={() => {
          if (!fadeOut) setFadeOut(true);
        }}
        className="fixed inset-0 bg-black pointer-events-none z-[5]"
      />

      <motion.div
        key={pathname}
        initial={{ opacity: 0,scale:2, filter: "blur(40px)", x: 100 }}
        animate={{ opacity: 1,scale:1, filter: "blur(0px)", x: 0 }}
        exit={{ opacity: 0,scale:2, filter: "blur(20px)", x: -100 }}
        transition={{ duration: transitionDuration, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </>
  );
};

// ✅ Main routes component
export default function RoutesWithAnimation() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/news" element={<PageTransition><News /></PageTransition>} />
        <Route path="/games/:gameId" element={<PageTransition><GamePage /></PageTransition>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
}
