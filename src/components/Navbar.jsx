import React from 'react';
import { Link } from 'react-router-dom';
import {useState} from 'react';
import NavLinkItem from './NavLinkItem';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../cssStyles/Navbar.css'; // Import the CSS file here

function Navbar() {
  const [isHambugerNavOpen, setIsHamburgerNavOpen] = useState(false);

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

        <button onClick={()=>{setIsHamburgerNavOpen(!isHambugerNavOpen)}} className="text-primary block md:hidden z-20">
          {isHambugerNavOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {isHambugerNavOpen && (
          <div className=" md:hidden  fixed top-0 left-0 z-10 w-full h-full bg-gray-900 bg-opacity-60 flex justify-center items-center">
            <ul className="text-white text-2xl space-y-4 text-center">
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
          </div>  
        )}
      </div>
    </nav>
  );
}

export default Navbar;
