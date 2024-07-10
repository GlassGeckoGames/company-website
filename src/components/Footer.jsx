/**
 * Represents the footer component of the website.
 * @returns {JSX.Element} The rendered footer component.
 */
import React from 'react';
import MediaLinks from './MediaLinks';
import LogoLink from './navbarComponents/LogoLink';

function Footer() {
  return (
    <footer className="bg-secondary p-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-primary">
      <LogoLink/>
        <MediaLinks small={true}/>
        <p className="mt-4 md:mt-0">&copy; 2024 Glass Gecko Games</p>
      </div>
    </footer>
  );
}

export default Footer;
