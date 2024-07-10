import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-secondary p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl">Glass Gecko Games</h1>
        <ul className="flex space-x-4 text-white">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/about" className="hover:text-gray-300">About Us</Link> 
          <Link to="/news" className="hover:text-gray-300">News</Link>
          <Link to="/contact" className="hover:text-gray-300">Contact</Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
