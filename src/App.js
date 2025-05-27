/**
 * @file App.jsx
 * @module App
 * @desc React root component that wraps the entire application with ErrorBoundary and SplashScreen fallback.
 *       It initializes third-party services like EmailJS and Google Analytics.
 *       AppLoading is lazy-loaded to allow for a smooth splash screen experience.
 *
 * @see {@link https://reactjs.org/docs/code-splitting.html | React Suspense Docs}
 * @see {@link https://www.emailjs.com/docs/sdk/installation/ | EmailJS Docs}
 * @see {@link https://support.google.com/analytics/answer/1008015 | GA Setup Docs}
 * 
 * @author Chace Nielson
 * @created Jul 10, 2024
 * @updated May 27, 2025
 */

import { Suspense, lazy, memo } from 'react';

// ─────────────────────────────────────────────────────────────
// 🧱 Core Wrappers for Error Boundary & Splash Fallback
// ─────────────────────────────────────────────────────────────
import SplashScreen from './components/splashScreen/SplashScreen';
import ErrorBoundary from './components/splashScreen/ErrorBoundary';

// ─────────────────────────────────────────────────────────────
// 💌 EmailJS and 📊 Google Analytics Initialization
// ─────────────────────────────────────────────────────────────
import emailjs from 'emailjs-com';
import { initializeGA } from "./googleAnalytics/analytics";
emailjs.init(process.env.REACT_APP_EMAILJS_USER_ID); // Initialize EmailJS with ENV user ID
initializeGA(); // Initialize GA tracking

// ─────────────────────────────────────────────────────────────
// 💤 Lazy Load App Logic with Suspense Fallback
// ─────────────────────────────────────────────────────────────
const AppLoading = memo(lazy(() => import('./routing/AppLoading')));

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<SplashScreen noAnimation />}>
        <AppLoading />
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
