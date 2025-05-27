/**
 * @file AppRoutes.jsx
 * @module AppRoutes
 * @desc Wraps the entire application with routing, analytics, background visuals, and layout structure.
 *       Includes navigation, footer, scroll behavior, and responsive testing overlays.
 * 
 * @see {@link https://reactrouter.com/ | React Router Documentation}
 * @see {@link BackgroundWrapper} for background image scaling and layout effects
 * @see {@link RoutesWithAnimation} for animated page transitions
 * 
 * @author Chace Nielson
 * @created Jul 10, 2024
 * @updated May 27, 2025
 */
// src/routing/AppRoutes.jsx
import { BrowserRouter as Router } from 'react-router-dom';
import AnalyticsTracker from '../googleAnalytics/AnalyticsTracker';
import TailwindBreakPoints from '../testingComponents/TailwindBreakPoints';
import BackgroundWrapper from '../components/BackgroundWrapper';
import Navbar from '../components/navbarComponents/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import RoutesWithAnimation from './RoutesWithAnimation';

export default function AppRoutes() {
  return (
    <Router>
      <AnalyticsTracker />
      <TailwindBreakPoints />
      <BackgroundWrapper 
        className="flex flex-col min-h-screen bg-white bg-opacity-20 overflow-hidden"
        src={process.env.PUBLIC_URL + "/art/rainforest-bg.png"}
        lowResSrc={process.env.PUBLIC_URL + "/art/rainforest-bg-small.png"}
        scale={1}
        bgOpacity={80}
        backgroundAttachment="fixed"
      >
        <Navbar />
        <ScrollToTop />
        <div className="flex-grow">
          <RoutesWithAnimation />
        </div>
        <Footer />
      </BackgroundWrapper>
    </Router>
  );
}
