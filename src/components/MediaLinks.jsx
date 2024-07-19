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
 * @updated 2024-07-19
 */

import React from 'react';
import { FaYoutube, FaInstagram, FaTiktok, FaTwitter, FaLinkedin, FaSteam } from 'react-icons/fa';

function MediaLinks() {

  const MediaLinks=[
    {name:"tiktok" ,icon:FaTiktok, link:"https://www.tiktok.com/@glassgeckogames"},
    {name:"youtube" ,icon:FaYoutube, link:"https://www.youtube.com/@GlassGeckoGames"},
    {name:"instagram" ,icon:FaInstagram, link:"https://www.instagram.com/glassgeckogames/"},
    {name:"x" ,icon:FaTwitter, link:"https://x.com/GlassGeckoGames"},
    {name:"linkedin" ,icon:FaLinkedin, link:"https://www.linkedin.com/company/glass-gecko-games/"},
    {name:"steam" ,icon:FaSteam, link:"https://store.steampowered.com/search/?developer=Glass%20Gecko%20Games"}
  ]

  return (
    <div className="flex justify-center space-x-4 ">
      {MediaLinks.map((link) => (
        <a
          href={link.link}
          className="text-white hover:text-accent "
          aria-label={link.name}
          target="_blank"
          rel="noopener noreferrer"
        >
          <link.icon size={28} className='text-primary hover:text-accent' />
        </a>
      ))}
    </div>
  )
}

export default MediaLinks;
