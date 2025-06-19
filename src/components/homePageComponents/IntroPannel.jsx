/**
 * @file IntroPannel.jsx
 * @module IntroPannel
 * @desc Renders the IntroPannel component. This component displays a video background with a title and description overlay.
 * 
 * backgrouds here : https://www.cleanpng.com/png-scratch-vector-scratch-to-do-the-old-texture-free-97920/
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
 * @updated 2024-08-21
 */
import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
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

  const slideInLeft = {
    hidden: { opacity: 0, y:300 }, // smaller offset
    visible: {
      opacity: 1,
     
      y: 0,
      transition: {
        duration: 3,
        delay: 3.5,
        ease: [0.25, 0.1, 0.25, 1] // easeInOut
      }
    }
  };

  const slideUp = {
  hidden: { opacity: 0, y: 300 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 3,
      delay: 3.5,
      ease: 'easeOut'
    }
  }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 2,
      ease: 'easeOut'
    }
  }
};

  return (
    <div className="home-page-container h-screen" ref={ref}>
      <VideoComponent
        className="w-full h-full object-cover pointer-events-none"
        src={videoData.src}
        blurHash={videoData.blurHash}
        useBlurFade={true}
      />

      <ScrollWheel />

      <motion.div
        className="home-page-box z-50"
        initial="hidden"
        animate={hasAnimated ? 'visible' : 'hidden'}
        variants={slideUp}
      >
        <motion.h1
          className="home-page-title text-shadow-lg"
          variants={fadeIn}
        >
          <span className="text-accent-light">{title}</span>
        </motion.h1>

        <motion.p
          className="home-page-description text-shadow"
          variants={fadeIn}
        >
          {description}
        </motion.p>
      </motion.div>
    </div>
  );
}

export default IntroPannel;
