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
 * @requires react-router-dom
 * 
 * @see {@link https://reactjs.org/docs/getting-started.html|React Documentation}
 * @see {@link https://reactrouter.com/|React Router Documentation}
 * 
 * @returns {JSX.Element} The rendered AboutPageText component.
 * 
 * @author Chace Nielson
 * @created 2024-07-10
 * @updated 2024-07-10
 */

import React from 'react';
import { Link } from 'react-router-dom';

function AboutPageText({ aboutTitle, aboutDescription }) {
  return (
    // Split the list and add the description in the middle
    <div className="flex flex-col justify-center items-center col-span-2 bg-primary text-black p-4 h-full text-center order-first lg:order-none">
      <h2 className="text-4xl font-bold mb-2 text-secondary">{aboutTitle}</h2>
      <p className='text-base lg:text-sm xl:text-base'>{aboutDescription}</p>
      <Link
        to="/contact"
        className="button-base mt-4 inline-block"
      >
        <span className="button-content">Learn More by Contacting Us</span>
      </Link>
    </div>
  );
}

export default AboutPageText;
