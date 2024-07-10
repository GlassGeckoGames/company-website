
/**
 * Navbar component.
 * 
 * This component represents the navigation bar of the website.
 * It includes a logo, a title, and a hamburger menu for mobile devices.
 * 
 */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavbarItems from './NavbarItems';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../../cssStyles/Navbar.css'; // Import the CSS file here

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
    <nav className="bg-secondary p-2">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className='flex gap-2 items-center text-primary'>
          <img className="w-10 md:w-14" src={process.env.PUBLIC_URL + '/logos/Glass_Gecko_Games_Icon_clear.png'} alt="Logo" />
          <h1 className="text-xl">Glass Gecko Games</h1>
        </Link>

        <div className="hidden md:flex">
          <NavbarItems textSize="text-lg" />
        </div>

        <button onClick={toggleMenu} className="text-primary block md:hidden z-20">
          {isHamburgerNavOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {isHamburgerNavOpen && (
          <div className={`fixed md:hidden top-0 left-0 z-10 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center transition-opacity duration-300 ${animateMenu ? 'opacity-100 fade-in' : 'opacity-0 fade-out'}`}>
            <NavbarItems toggleMenu={toggleMenu} textSize="text-2xl" />
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;