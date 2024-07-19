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
import React from 'react';
import { Link } from 'react-router-dom';
import ImageComponent from '../ImageComponent';

function LogoLink() {
  return (
    <Link to="/" className='flex gap-2 items-center text-primary'>
      <div 
        className="max-w-12 max-h-12 min-md:max-w-16 md:max-h-16 w-full h-full flex-shrink-0" 
        style={{ width: '48px', height: '48px' }} // Set a constant height and width for the logo container
      >
        <ImageComponent 
          className="w-full h-full object-contain" 
          src={process.env.PUBLIC_URL + '/logos/Glass_Gecko_Games_Icon_clear.png'} 
          alt="Logo" 
          style={{ visibility: 'hidden' }} // Hide the image if it's not loaded yet
          lowResSrc={process.env.PUBLIC_URL + '/logos/Glass_Gecko_Games_Icon_clear_small.png'} 
        />
      </div>
      <h1 className="text-xl text-nowrap">GLASS GECKO GAMES</h1>
    </Link>
  )
}

export default LogoLink;
