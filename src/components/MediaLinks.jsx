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

import React, { useState, useEffect } from 'react';
import { FaYoutube, FaInstagram, FaTiktok, FaLinkedin, FaSteam, FaItchIo } from 'react-icons/fa';


const Tooltip = ({ text }) => (
  <div className="absolute z-10 p-1 text-sm text-secondary bg-primary rounded shadow-lg bottom-full mb-2">
    {text}
  </div>
);

function MediaLinks() {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    if (hoveredLink) {
      const timer = setTimeout(() => setShowTooltip(true), 2000);
      return () => clearTimeout(timer);
    }
    setShowTooltip(false);
  }, [hoveredLink]);

  const mediaLinks = [
    { name: "TikTok", icon: FaTiktok, link: "https://www.tiktok.com/@glassgeckogames" },
    { name: "Instagram", icon: FaInstagram, link: "https://www.instagram.com/glassgeckogames/" },
    { name: "YouTube", icon: FaYoutube, link: "https://www.youtube.com/@GlassGeckoGames" },
    { name: "Itch.io", icon: FaItchIo, link: "https://glass-gecko-games.itch.io/" },
    { name: "LinkedIn", icon: FaLinkedin, link: "https://www.linkedin.com/company/glass-gecko-games/" },
    { name: "Steam", icon: FaSteam, link: "https://store.steampowered.com/search/?developer=Glass%20Gecko%20Games" },
  ];

  return (
    <div className="flex justify-center space-x-2 relative">
      {mediaLinks.map((link) => (
        <a
          key={link.name}
          href={link.link}
          className="text-white hover:text-accent relative"
          aria-label={link.name}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHoveredLink(link.name)}
          onMouseLeave={() => setHoveredLink(null)}
        >
          <link.icon size={28} className="text-primary hover:text-accent" />
          {showTooltip && hoveredLink === link.name && (
            <Tooltip text={link.name} />
          )}
        </a>
      ))}
    </div>
  );
}

export default MediaLinks;
