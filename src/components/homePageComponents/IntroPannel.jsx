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
 * @requires ../VideoComponent
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
 * @updated 2024-07-16
 */

import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { title, description, videoData } from '../../data/homePageData';
import VideoComponent from '../VideoComponent';
import ScrollWheel from './ScrollWheel';

function IntroPannel() {
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const inView = useInView(ref, { triggerOnce: true });

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);

  // Animation variants for the slide-in effect
  const slideInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 1 } }
  };

  return (
    <div className="home-page-container intro-height" ref={ref}>

      <VideoComponent
        className="w-full h-full object-cover pointer-events-none"
        src={videoData.src}
        blurHash={videoData.blurHash}
      />
      <ScrollWheel />
      
      <div className="home-page-box ">
        <motion.h1
          className="home-page-title"
          initial="hidden"
          animate={hasAnimated ? 'visible' : 'hidden'}
          variants={slideInLeft}
        >
          {title}
        </motion.h1>
        <motion.p
          className="home-page-description "
          initial="hidden"
          animate={hasAnimated ? 'visible' : 'hidden'}
          variants={slideInLeft}
        >
          {description}
        </motion.p>
        
      </div>
    </div>
  );
}

export default IntroPannel;
