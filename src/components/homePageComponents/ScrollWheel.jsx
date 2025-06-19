/**
 * @file ScrollWheel.jsx
 * @module ScrollWheel
 * @desc Renders a bouncing scroll wheel icon that triggers smooth scrolling to the top of the page.
 * 
 * @component ScrollWheel
 * 
 * @requires react
 * @requires framer-motion
 * @requires react-scroll
 * @requires ImageComponent
 * 
 * @see {@link https://reactjs.org/docs/getting-started.html|React Documentation}
 * @see {@link https://www.framer.com/motion/|Framer Motion Documentation}
 * @see {@link https://www.npmjs.com/package/react-scroll|React Scroll Documentation}
 * 
 * @returns {JSX.Element} The ScrollWheel component.
 * 
 * @example
 * // Example usage of ScrollWheel component
 * <ScrollWheel />
 * 
 * @au
 * @created 2024-07-16
 * @updated 2024-07-19
 */
import React from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import ImageComponent from '../ImageComponent';

function ScrollWheel() {
  const bounceProps = {
    initial: { y: 0 }, // Initial position in the middle of the screen
    animate: { y: [0, -20, 0] }, // Keyframes for the bouncing effect
    transition: {
      duration: 2, // Duration of the animation
      times: [0, 0.5, 1], // Timing for each keyframe
      repeat: Infinity, // Repeat the animation indefinitely
      repeatDelay: 1, // Delay before repeating the animation
      ease: 'easeInOut', // Easing function
    },
  };

  return (
    <div className="w-full h-full flex justify-center items-end absolute inset-0 z-[60]">
      <motion.div className="mb-4" {...bounceProps}>
        <ScrollLink
          className="hover:cursor-pointer opacity-40 hover:opacity-80 "
          to="0" // ID of the target element
          spy={true}
          smooth={true}
          offset={-70}
          duration={1000} // Duration of the scroll in milliseconds
        >
          <ImageComponent
            src={`${process.env.PUBLIC_URL}/logos/scroll.png`}
            alt="Scroll"
            className="h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 hover:scale-110"
          />
        </ScrollLink>
      </motion.div>
    </div>
  );
}

export default ScrollWheel;
