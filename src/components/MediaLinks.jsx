/**
 * @file MediaLinks.jsx
 * @module MediaLinks
 * @desc React component that renders a list of social media links.
 * 
 * @component MediaLinks
 * 
 * @requires react
 * @requires react-icons/fa
 * 
 * @see {@link https://reactjs.org/docs/getting-started.html|React Documentation}
 * @see {@link https://react-icons.github.io/react-icons/|React Icons Documentation}
 * 
 * @returns {JSX.Element} The rendered MediaLinks component
 * 
 * @author Chace Nielson
 * @created 2024-07-10
 * @updated 2024-07-10
 */

import React from 'react';
import { FaYoutube, FaInstagram, FaTiktok, FaLinkedin, FaSteam } from 'react-icons/fa';

function MediaLinks() {
  return (
    <div className="flex justify-center space-x-4 ">
      <a
        href="https://www.youtube.com/channel/UCltO0yRkVFmApfzuTGgKczg"
        className="text-white hover:text-accent "
        aria-label="YouTube"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaYoutube size={32} className='text-primary hover:text-accent' />
      </a>
      <a
        href="https://www.instagram.com/glassgeckogames/reels/"
        className="text-white hover:text-accent className='text-primary' "
        aria-label="Instagram"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram size={30} className='text-primary hover:text-accent' />
      </a>
      <a
        href="https://www.tiktok.com/@glassgeckogames"
        className="text-white hover:text-accent"
        aria-label="TikTok"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTiktok size={26} className='text-primary hover:text-accent' />
      </a>
      <a
        href="https://linkedin.com"
        className="text-white hover:text-accent"
        aria-label="LinkedIn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={28} className='text-primary hover:text-accent' />
      </a>
      <a
        href="https://store.steampowered.com/search/?developer=Glass%20Gecko%20Games"
        className="text-white hover:text-accent"
        aria-label="Steam"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaSteam size={28} className='text-primary hover:text-accent' />
      </a>
    </div>
  );
}

export default MediaLinks;
