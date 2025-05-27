/**
 * @file SplashScreen.jsx
 * @module SplashScreen
 * @desc Displays the initial splash screen with the Glass Gecko Games logo.
 *       Supports an animated idle state for the logo and a CSS-based fade-out transition.
 *       Accepts `transitionOut` to trigger blur/fade/scale exit animation and `noAnimation` to disable idle logo motion.
 *
 * @see {@link SplashScreen.styles.css} for animation keyframes
 * 
 * @props {boolean} transitionOut - Whether to apply the fade-out transition
 * @props {boolean} noAnimation - If true, disables idle logo animation
 * 
 * @author Chace Nielson
 * @created May 26, 2025
 * @updated May 27, 2025
 */
import './SplashScreen.styles.css';

export default function SplashScreen({ transitionOut = false, noAnimation=false }) {
  return (
    <div
      className={`
        overflow-hidden fixed top-0 left-0 z-50 
        w-screen h-screen flex items-center justify-center
        bg-gradient-to-tr from-accent to-secondary 
        ${transitionOut && 'splash-exit'}`}
    >
      <div>
        <img
          src="/logos/Glass_Gecko_Games_Icon_clear.png"
          width={350}
          height={350}
          alt="Logo"
          className={!noAnimation && "logo-idle"}
          />
      </div>
    </div>
  );
}
