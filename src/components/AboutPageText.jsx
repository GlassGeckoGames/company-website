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
 * @requires ./Button
 * @requires ../analytics
 * 
 * @see {@link https://reactjs.org/docs/getting-started.html|React Documentation}
 * @see {@link https://reactrouter.com/|React Router Documentation}
 * 
 * @returns {JSX.Element} The rendered AboutPageText component.
 * 
 * @example
 * // Example usage of AboutPageText component
 * <AboutPageText aboutTitle="About Us" aboutDescription="This is the about section description." />
 * 
 * @created 2024-07-10
 * @updated 2024-07-11
 */

import React from 'react';
import Button from './Button';
import { recordGAEvent } from '../analytics';

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

  /**
   * Handles the click event for the "Learn More" button.
   */
  const handleClick = () => {
    recordGAEvent({ category: 'About', action: 'Button Click', label: 'Click Learn More on About Page' });
  };

  return (
    <div className="flex flex-col justify-center items-center col-span-2 bg-primary text-black p-4 h-full text-center order-first lg:order-none">
      <h2 className="text-4xl font-bold mb-2 text-secondary">{aboutTitle}</h2>
      <p className="text-base lg:text-sm xl:text-base pb-4">{aboutDescription}</p>
      <Button onClickFunc={handleClick} type="accent" as="link" to="/contact">Learn More</Button>
    </div>
  );
}

export default AboutPageText;
