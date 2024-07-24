/**
 * @file AnalyticsTracker.jsx
 * @module AnalyticsTracker
 * @desc Component to track page views when the page changes after the first page load.
 * 
 * This component uses the `useLocation` hook from `react-router-dom` to monitor the URL changes.
 * It ensures that page views are recorded in Google Analytics whenever the URL changes, except on the first page load.
 * 
 * @component AnalyticsTracker
 * 
 * @requires react
 * @requires react-router-dom
 * @requires ./analytics
 * 
 * @see {@link https://reactjs.org/docs/getting-started.html|React Documentation}
 * @see {@link https://reactrouter.com/|React Router Documentation}
 * @see {@link https://developers.google.com/analytics|Google Analytics Documentation}
 * 
 * @returns {null} This component does not render any content.
 * 
 * @example
 * // Example usage of AnalyticsTracker component
 * function App() {
 *   return (
 *     <Router>
 *       <AnalyticsTracker />
 *       // Other components
 *     </Router>
 *   );
 * }
 * 
 * @athour Chace Nielson
 * @created 2024-07-23
 * @updated 2024-07-23
 */

import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { recordGAPage } from './analytics';

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

export default AnalyticsTracker;
