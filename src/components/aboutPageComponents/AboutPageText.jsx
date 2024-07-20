/**
 * @file AboutPageText.jsx
 * @module AboutPageText
 * @desc A functional React component that renders the text section for the About page.
 * Displays the about title, description, and a link to the contact page.
 * 
 * @component AboutPageText
 * 
 * @param {Object} props - The component props.
 * @param {string} props.aboutTitle - The title for the about section.
 * @param {string} props.aboutDescription - The description for the about section.
 * 
 * @requires react
 * @requires framer-motion
 * @requires ./Button
 * @requires ../analytics
 * 
 * @see {@link https://reactjs.org/docs/getting-started.html|React Documentation}
 * @see {@link https://reactrouter.com/|React Router Documentation}
 * @see {@link https://www.framer.com/motion/|Framer Motion Documentation}
 * 
 * @returns {JSX.Element} The rendered AboutPageText component.
 * 
 * @example
 * // Example usage of AboutPageText component
 * <AboutPageText aboutTitle="About Us" aboutDescription="This is the about section description." />
 * 
 * @created 2024-07-10
 * @updated 2024-07-19
 */

import React from 'react';
import { motion } from 'framer-motion';
import Button from '../Button';
import { recordGAEvent } from '../../analytics';

/**
 * A functional React component that renders the text section for the About page.
 * Displays the about title, description, and a link to the contact page.
 * 
 * @param {Object} props - The component props.
 * @param {string} props.aboutTitle - The title for the about section.
 * @param {string} props.aboutDescription - The description for the about section.
 * 
 * @returns {JSX.Element} The rendered AboutPageText component.
 */
function AboutPageText({ aboutTitle, aboutDescription }) {

  //Handles the click event for the "Learn More" button.
  const handleClick = () => {
    recordGAEvent('Click learn more on About Page');
  };

  // Animation variants for the title and description
  const slideInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="flex flex-col justify-center items-center col-span-2 text-primary bg-secondary p-2 lg:px-2 xl:px-20 h-full text-center order-first lg:order-none rounded-xl">

      <motion.h2
        className="text-2xl xl:text-4xl font-bold mb-2 text-accent titleFont container mx-auto"
        initial="hidden"
        animate="visible"
        variants={slideInLeft}
      >
        {aboutTitle}
      </motion.h2>
      <motion.p
        className="text-base lg:text-sm xl:text-base pb-4"
        initial="hidden"
        animate="visible"
        variants={slideInLeft}
      >
        {aboutDescription}
      </motion.p>
      <motion.div
        className="text-base lg:text-sm xl:text-base pb-4"
        initial="hidden"
        animate="visible"
        variants={slideInLeft}
      >
        <Button onClickFunc={handleClick} type="accent" as="link" to="/contact">
          Connect With Us
        </Button>
      </motion.div>
    </div>
  );
}

export default AboutPageText;
