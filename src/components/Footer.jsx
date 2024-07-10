
/**
 * Represents the footer component of the website.
 * @returns {JSX.Element} The rendered footer component.
 */
import React from 'react';
import MediaLinks from './MediaLinks';

function Footer() {
  return (
    <footer className="bg-secondary p-4">
      <div className="container mx-auto text-center text-white">
        <p>&copy; 2024 Glass Gecko Games</p>
        <MediaLinks />
      </div>
    </footer>
  );
}

export default Footer;
