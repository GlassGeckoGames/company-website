
/**
 * Renders a logo link component.
 * main logo in left of navbar and footer
 *
 * @component
 * @example
 * return (
 *   <LogoLink />
 * )
 */
import React from 'react'
import { Link } from 'react-router-dom';

function LogoLink() {
  return (
    <Link to="/" className='flex gap-2 items-center text-primary'>
      <img className="w-12 md:w-16" src={process.env.PUBLIC_URL + '/logos/Glass_Gecko_Games_Icon_clear.png'} alt="Logo" />
      <h1 className="text-xl">Glass Gecko Games</h1>
    </Link>
  )
}

export default LogoLink