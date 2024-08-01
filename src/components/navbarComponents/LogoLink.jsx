/**
 * @file LogoLink.jsx
 * @module LogoLink
 * @desc Renders a logo link component. Main logo in left of navbar and footer.
 * 
 * @component LogoLink
 * 
 * @example
 * // Example usage of LogoLink component
 * return (
 *   <LogoLink />
 * )
 * 
 * @requires react
 * @requires react-router-dom
 * @requires ../ImageComponent
 * 
 * @see {@link https://reactjs.org/docs/getting-started.html|React Documentation}
 * @see {@link https://reactrouter.com/|React Router Documentation}
 * 
 * @returns {JSX.Element} The rendered LogoLink component.
 * 
 * @author Chace Nielson
 * @created 2024-07-10
 * @updated 2024-07-19
 */
/**
 * @file LogoLink.jsx
 * @module LogoLink
 * @desc Renders a logo link component. Main logo in left of navbar and footer.
 * 
 * @component LogoLink
 * 
 * @example
 * // Example usage of LogoLink component
 * return (
 *   <LogoLink size="small" />
 * )
 * 
 * @requires react
 * @requires react-router-dom
 * @requires ../ImageComponent
 * 
 * @see {@link https://reactjs.org/docs/getting-started.html|React Documentation}
 * @see {@link https://reactrouter.com/|React Router Documentation}
 * 
 * @returns {JSX.Element} The rendered LogoLink component.
 * 
 * @author Chace Nielson
 * @created 2024-07-10
 * @updated 2024-07-23
 */
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ImageComponent from '../ImageComponent';
import '../../styles/LogoLink.css';

function LogoLink({ size = "large" }) {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const sizes = {
    large: {
      container: { width: '48px', height: '48px' },
      logoClass: "max-w-12 max-h-12 md:max-w-16 md:max-h-16",
      textClass: "text-4xl"
    },
    small: {
      container: { width: '24px', height: '24px' },
      logoClass: "max-w-6 max-h-6 md:max-w-8 md:max-h-8",
      textClass: "text-2xl"
    }
  };

  const currentSize = sizes[size];

  return (
    <Link to="/" className='logo-link flex gap-0 items-center text-primary'>
      <div 
        className={`w-full h-full flex-shrink-0 ${currentSize.logoClass}`} 
        style={currentSize.container} // Set a constant height and width for the logo container
      >
        <ImageComponent 
          className="w-full h-full object-contain" 
          src={process.env.PUBLIC_URL + '/logos/Glass_Gecko_Games_Icon_clear.png'} 
          alt="Logo" 
          style={{ visibility: 'hidden' }} // Hide the image if it's not loaded yet
          lowResSrc={process.env.PUBLIC_URL + '/logos/Glass_Gecko_Games_Icon_clear_small.png'} 
        />
      </div>
      <h1 className={`text-nowrap titleFont underline-effect pl-1 ${currentSize.textClass}`}> GLASS GECKO GAMES </h1>
    </Link>
  );
}

export default LogoLink;

