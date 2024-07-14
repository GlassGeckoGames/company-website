/**
 * @file ImageComponent.jsx
 * @module ImageComponent
 * @desc React component for displaying an image with optional error handling.
 * The image source and alternative text can be customized, and an error handler can be provided.
 * 
 * @component ImageComponent
 * 
 * @requires react
 * 
 * @see {@link https://reactjs.org/docs/getting-started.html|React Documentation}
 * 
 * @param {string} className - The class name for the image element.
 * @param {string} src - The source URL of the image.
 * @param {string} alt - The alternative text for the image.
 * @param {function} onError - Optional error handler function for the image element.
 * 
 * @returns {JSX.Element} The rendered ImageComponent.
 * 
 * @author [Your Name]
 * @created [Creation Date]
 * @updated [Last Updated Date]
 */

import React from 'react';

const ImageComponent = ({ src, alt, className, onError = null }) => {
  return (
    <img className={className} src={src} alt={alt} onError={onError} />
  );
};

export default ImageComponent;
