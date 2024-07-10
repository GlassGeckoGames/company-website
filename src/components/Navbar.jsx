import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavLinkItem from './NavLinkItem';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../cssStyles/Navbar.css'; // Import the CSS file here

function Navbar() {
  const [isHamburgerNavOpen, setIsHamburgerNavOpen] = useState(false);
  const [animateMenu, setAnimateMenu] = useState(false);

  const toggleMenu = () => {
    if (!isHamburgerNavOpen) {
      setIsHamburgerNavOpen(true);
      setAnimateMenu(true);
    } else {
      setAnimateMenu(false);
      setTimeout(() => setIsHamburgerNavOpen(false), 300); // Match this duration to your CSS animation duration
    }
  };

  return (
    <nav className="bg-secondary p-2">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className='flex gap-2 items-center text-primary'>
          <img className="w-10 md:w-14" src={process.env.PUBLIC_URL + '/logos/Glass_Gecko_Games_Icon_clear.png'} alt="Logo" />
          <h1 className="text-xl">Glass Gecko Games</h1>
        </Link>

        <ul className="hidden space-x-4 text-primary md:flex">
          <li>
            <NavLinkItem to="/">Home</NavLinkItem>
          </li>
          <li>
            <NavLinkItem to="/about">About Us</NavLinkItem>
          </li>
          <li>
            <NavLinkItem to="/news">News</NavLinkItem>
          </li>
          <li>
            <NavLinkItem to="/contact">Contact Us</NavLinkItem>
          </li>
        </ul>

        <button onClick={toggleMenu} className="text-primary block md:hidden z-20">
          {isHamburgerNavOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {isHamburgerNavOpen && (
          <div className={`fixed md:hidden top-0 left-0 z-10 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center transition-opacity duration-300 ${animateMenu ? 'opacity-100 fade-in' : 'opacity-0 fade-out'}`}>
            <ul className="text-white text-2xl space-y-4 text-center">
              <li>
                <NavLinkItem to="/" onClick={toggleMenu}>Home</NavLinkItem>
              </li>
              <li>
                <NavLinkItem to="/about" onClick={toggleMenu}>About Us</NavLinkItem>
              </li>
              <li>
                <NavLinkItem to="/news" onClick={toggleMenu}>News</NavLinkItem>
              </li>
              <li>
                <NavLinkItem to="/contact" onClick={toggleMenu}>Contact Us</NavLinkItem>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
