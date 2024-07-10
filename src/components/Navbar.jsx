import React from 'react';
import { Link } from 'react-router-dom';
import NavLinkItem from './NavLinkItem';

function Navbar() {
  return (
    <nav className="bg-secondary p-2">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className='flex gap-2 items-center text-primary'>
          <img className="w-6 md:w-14" src={process.env.PUBLIC_URL + '/logos/Glass_Gecko_Games_Icon_clear.png'} alt="Logo" />
          <h1 className="text-xl">Glass Gecko Games</h1>
        </Link>
        <ul className="flex space-x-4 text-primary">
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
    </nav>
  );
}

export default Navbar;
