/**
 * @file IntroPannel.jsx
 * @module IntroPannel
 * @desc Renders the IntroPannel component. This component displays a video background with a title and description overlay.
 * 
 * @component IntroPannel
 * 
 * @requires react
 * @requires framer-motion
 * @requires ../../data/homePageData
 * 
 * @see {@link https://reactjs.org/docs/getting-started.html|React Documentation}
 * 
 * @returns {JSX.Element} The rendered IntroPannel component.
 * 
 * @example
 * // Example usage of IntroPannel component
 * <IntroPannel />
 * 
 * @author Chace Nielson
 * @created 2024-07-10
 * @updated 2024-07-12
 */

import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { title, description } from '../../data/homePageData';

function IntroPannel() {
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const inView = useInView(ref, { triggerOnce: true });

  // Animation variants for the slide-in effect
  const slideInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 1 } }
  };

  // Set hasAnimated to true when the element comes into view
  if (inView && !hasAnimated) {
    setHasAnimated(true);
  }

  return (
    <div className="relative w-full h-80 md:h-112 lg:h-160 2xl:h-208 overflow-hidden" ref={ref}>
      <video className="w-full h-full object-cover" src={process.env.PUBLIC_URL + '/videos/homeBackdropVideo.mp4'} autoPlay loop muted />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 bg-black bg-opacity-20">

        {/* Animate these two items slide in from the left after a 2 second delay */}
        <motion.h1
          className="text-white text-4xl md:text-6xl font-bold mb-4 text-outline-large mx-6 md:mx-10"
          initial="hidden"
          animate={(inView || hasAnimated) ? 'visible' : 'hidden'}
          variants={slideInLeft}
        >
          {title}
        </motion.h1>
        <motion.p
          className="text-white text-lg md:text-xl max-w-2xl text-outline-small mx-6 md:mx-10"
          initial="hidden"
          animate={(inView || hasAnimated) ? 'visible' : 'hidden'}
          variants={slideInLeft}
        >
          {description}
        </motion.p>
        
      </div>
    </div>
  );
}

export default IntroPannel;
