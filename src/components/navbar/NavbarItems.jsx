/**
 * Component representing a list of navigation buttons for the navbar.
 * @param {Object} props - The component props.
 * @param {Function} props.toggleMenu - Function to toggle the menu for the hamburger menu.
 * @param {string} props.textSize - The size of the text for the navbar items.
 * @returns {JSX.Element} - The rendered component.
 */
import React from 'react';
import LinkItem from './LinkItem';

const NavbarItems = ({ toggleMenu, textSize }) => {
  return (
    <ul className={`text-primary ${textSize} space-y-4 md:space-y-0 md:space-x-4 text-center md:text-left md:flex`}>
      <li>
        <LinkItem to="/" onClick={toggleMenu}>Home</LinkItem>
      </li>
      <li>
        <LinkItem to="/about" onClick={toggleMenu}>About Us</LinkItem>
      </li>
      <li>
        <LinkItem to="/news" onClick={toggleMenu}>News</LinkItem>
      </li>
      <li>
        <LinkItem to="/contact" onClick={toggleMenu}>Contact Us</LinkItem>
      </li>
    </ul>
  );
};

export default NavbarItems;
