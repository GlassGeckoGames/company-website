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
 * @updated 2024-07-10
 */

import React from 'react';
import MediaLinks from './MediaLinks';
import LogoLink from './navbarComponents/LogoLink';

function Footer() {
  return (
    <footer className="bg-secondary p-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-primary">
        <LogoLink />
        <MediaLinks small={true} />
        <p className="mt-4 md:mt-0">&copy; 2024 Glass Gecko Games</p>
      </div>
    </footer>
  );
}

export default Footer;
