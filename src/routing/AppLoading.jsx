/**
 * @file AppLoading.jsx
 * @module AppLoading
 * @desc Manages the splash screen lifecycle and disables scrolling during initial load.
 *       After a short delay, triggers a fade-out animation and then removes the splash screen from the DOM.
 *
 * @see {@link SplashScreen} for the animated component
 * @see {@link AppRoutes} for the main routing tree
 * 
 * @author Chace Nielson
 * @created May 26, 2025
 * @updated May 27, 2025
 */

// src/routing/AppLoading.jsx
import { useEffect, useState } from 'react';
import SplashScreen from '../components/splashScreen/SplashScreen';
import AppRoutes from './AppRoutes';

export default function AppLoading() {
  const [showSplash, setShowSplash] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Add body class to lock scroll
    document.body.classList.add('no-scroll');

    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 100);

    const noScrollTimer = setTimeout(() => {
      document.body.classList.remove('no-scroll');
    }, 500);

    const removeTimer = setTimeout(() => {
      setShowSplash(false);
      
    }, 2000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
      clearTimeout(noScrollTimer);
      document.body.classList.remove('no-scroll');
    };
  }, []);


  return (
    <>
      {showSplash && <SplashScreen transitionOut={fadeOut} />}
      <AppRoutes />
    </>
  );
}
