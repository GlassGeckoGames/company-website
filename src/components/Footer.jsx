/**
 * @file Footer.jsx
 * @module Footer
 * @desc Represents the footer component of the website.
 * Renders the logo, social media links, and copyright information.
 * 
 * @component Footer
 * 
 * @requires react
 * @requires ./MediaLinks
 * @requires ./navbarComponents/LogoLink
 * 
 * @see {@link https://reactjs.org/docs/getting-started.html|React Documentation}
 * 
 * @returns {JSX.Element} The rendered footer component.
 * 
 * @author Chace Nielson
 * @created 2024-07-10
 * @updated 2024-07-23
 */

import React from 'react';
import MediaLinks from './MediaLinks';
import LogoLink from './navbarComponents/LogoLink';

function Footer() {
  return (
    <footer className="bg-secondary p-8">
      <div className="container mx-auto flex flex-col md:flex-row md:flex-wrap items-center justify-between text-primary gap-2">
        <div className="flex-1 flex justify-start ">
          <LogoLink size="small"/>
        </div>
        <div className="flex-1 flex justify-center order-first md:order-none mb-2 md:mb-0 mt-2 md:mt-0">
          <MediaLinks small={true} />
        </div>
        <div className="flex-1 flex justify-end text-center md:text-right mt-1 md:mt-0">
          <p>&copy; {new Date().getFullYear()} Glass Gecko Games</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
