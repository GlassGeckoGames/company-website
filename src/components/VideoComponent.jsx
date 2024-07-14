/**
 * @file VideoComponent.jsx
 * @module VideoComponent
 * @desc React component for displaying a video element with specified attributes.
 * The video auto-plays, loops, and is muted by default, with inline playback controls.
 * 
 * @component VideoComponent
 * 
 * @requires react
 * 
 * @see {@link https://reactjs.org/docs/getting-started.html|React Documentation}
 * 
 * @param {string} className - The class name for the video element.
 * @param {string} src - The source URL of the video.
 * 
 * @returns {JSX.Element} The rendered VideoComponent.
 * 
 * @author [Your Name]
 * @created [Creation Date]
 * @updated [Last Updated Date]
 */

import React from 'react';

function VideoComponent({ className, src }) {
  return (
    <video
      className={className}
      src={src}
      autoPlay
      loop
      muted
      playsInline
      controlsList="nodownload nofullscreen noremoteplayback"
    />
  );
}

export default VideoComponent;
