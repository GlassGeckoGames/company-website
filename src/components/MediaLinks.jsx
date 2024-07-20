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
import { FaYoutube, FaInstagram, FaTiktok, FaLinkedin, FaSteam } from 'react-icons/fa';

// Create a React component for the Twitter SVG
const TwitterIcon = () => (
  <svg
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
    width="28px"
    height="28px"
  >
    <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"/>
  </svg>
);

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
    { name: "YouTube", icon: FaYoutube, link: "https://www.youtube.com/@GlassGeckoGames" },
    { name: "Instagram", icon: FaInstagram, link: "https://www.instagram.com/glassgeckogames/" },
    { name: "Twitter", icon: TwitterIcon, link: "https://x.com/GlassGeckoGames" }, // Custom handling for Twitter
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
