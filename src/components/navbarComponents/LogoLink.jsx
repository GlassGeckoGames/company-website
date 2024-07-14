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
 * @updated 2024-07-14
 */
import React from 'react';
import { Link } from 'react-router-dom';
import ImageComponent from '../ImageComponent';

function LogoLink() {
  return (
    <Link to="/" className='flex gap-1 items-center text-primary h-12 md:h-16'>
      <div className="h-full w-12 md:w-16">
        <ImageComponent
          className="h-full w-full object-contain" 
          src={process.env.PUBLIC_URL + '/logos/Glass_Gecko_Games_Icon_clear.png'} 
          alt="Logo" 
          blurHash='L09*n%tPfQtPx?fQfQfQfQfQfQfQ'
        />
      </div>
      <h1 className="text-sm sm:text-base md:text-lg lg:text-xl whitespace-nowrap">
        Glass Gecko Games
      </h1>
    </Link>
  );
}

export default LogoLink;
