/**
 * @file Navbar.jsx
 * @module Navbar
 * @desc Component that represents the navigation bar of the website.
 * It includes a logo, a title, and a hamburger menu for mobile devices.
 * 
 * @component Navbar
 * 
 * @requires react
 * @requires react-icons/fa
 * @requires ./NavbarItems
 * @requires ./LogoLink
 * @requires ../../styles/Navbar.css
 * 
 * @see {@link https://reactjs.org/docs/getting-started.html|React Documentation}
 * @see {@link https://react-icons.github.io/react-icons/|React Icons Documentation}
 * 
 * @returns {JSX.Element} The rendered Navbar component.
 * 
 * @author Chace Nielson
 * @created 2024-07-10
 * @updated 2024-07-10
 */
import React, { useState } from 'react';
import NavbarItems from './NavbarItems';
import LogoLink from './LogoLink';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../../styles/Navbar.css'; // Import the CSS file here

function Navbar() {
  const [isHamburgerNavOpen, setIsHamburgerNavOpen] = useState(false);
  const [animateMenu, setAnimateMenu] = useState(false);

  const toggleMenu = () => {
    if (!isHamburgerNavOpen) {
      setIsHamburgerNavOpen(true);
      setAnimateMenu(true);
    } else {
      setAnimateMenu(false);
      setTimeout(() => setIsHamburgerNavOpen(false), 150); // slight delay to allow animation to finish to better match fade out of menu
    }
  };

  return (
    <nav className="bg-secondary bg-opacity-20 p-2 sticky top-0 z-[100]">
      <div className="container mx-auto flex justify-between items-center">
        <LogoLink />

        <div className="hidden md:flex">
          <NavbarItems textSize="text-lg" />
        </div>

        <button onClick={toggleMenu} className="text-primary block md:hidden z-50 hover:text-accent">
          {isHamburgerNavOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {isHamburgerNavOpen && (
          <div className={`fixed md:hidden top-0 left-0 z-40 w-full h-full bg-secondary bg-opacity-85 flex  justify-center items-center transition-opacity duration-300 ${animateMenu ? 'opacity-100 fade-in' : 'opacity-0 fade-out'}`}>
            <NavbarItems toggleMenu={toggleMenu} textSize="text-2xl" />
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
