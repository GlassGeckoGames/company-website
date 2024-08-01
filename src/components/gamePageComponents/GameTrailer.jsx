/**
 * @file GameTrailer.jsx
 * @module GameTrailer
 * @desc Component to display a YouTube trailer for a game.
 * 
 * @component GameTrailer
 * 
 * @requires react
 * 
 * @param {string} trailer - The URL of the trailer video.
 * @param {string} title - The title of the game for which the trailer is shown.
 * 
 * @returns {JSX.Element|null} The component displaying the game trailer, or null if no trailer URL is provided.
 * 
 * @example
 * // Example usage of GameTrailer component
 * const trailer = 'https://www.youtube.com/watch?v=exampleVideoId';
 * const title = 'Game Title';
 * 
 * <GameTrailer trailer={trailer} title={title} />
 * 
 * @created 2024-07-12
 * @updated 2024-07-12
 */

import React from 'react';

function GameTrailer({ trailer, title }) {

  if (!trailer) {
    return null;
  }

  const getEmbedUrl = (url) => {
    const videoId = url.split('v=')[1];
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <div className="mb-6">
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          src={getEmbedUrl(trailer)}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={`${title} Trailer`}
          className="w-full h-full rounded-2xl shadow-lg"
        ></iframe>
      </div>
    </div>
  );
}

export default GameTrailer;
