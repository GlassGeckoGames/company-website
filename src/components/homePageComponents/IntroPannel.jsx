/**
 * @file IntroPannel.jsx
 * @module IntroPannel
 * @desc Renders the IntroPannel component. This component displays a video background with a title and description overlay.
 * 
 * @component IntroPannel
 * 
 * @requires react
 * @requires ../../data/homePageData
 * 
 * @see {@link https://reactjs.org/docs/getting-started.html|React Documentation}
 * 
 * @returns {JSX.Element} The rendered IntroPannel component.
 * 
 * @example
 * // Example usage of IntroPannel component
 * <IntroPannel />
 * 
 * @author Chace Nielson
 * @created 2024-07-10
 * @updated 2024-07-11
 */

import React from 'react';
import { title, description } from '../../data/homePageData';

function IntroPannel() {
  return (
    <div className="relative w-full h-80 md:h-112 lg:h-160 2xl:h-208 overflow-hidden">
      <video className="w-full h-full object-cover" src={process.env.PUBLIC_URL + '/gameMedia/introVideo.mp4'} autoPlay loop muted />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 bg-black bg-opacity-20">
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-4 text-outline">{title}</h1>
        <p className="text-white text-lg md:text-xl max-w-2xl text-outline">{description}</p>
      </div>
    </div>
  );
}

export default IntroPannel;
