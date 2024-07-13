/**
 * @file GameDetails.jsx
 * @module GameDetails
 * @desc Component to display the details of a game, such as genre, platforms, and release date.
 * 
 * @component GameDetails
 * 
 * @requires react
 * 
 * @param {Object} game - The game object containing details to display.
 * @param {string} game.genre - The genre of the game.
 * @param {Array<string>} game.platforms - The platforms the game is available on.
 * @param {string} game.releaseDate - The release date of the game.
 * 
 * @returns {JSX.Element} The component displaying game details.
 * 
 * @example
 * // Example usage of GameDetails component
 * const game = {
 *   genre: 'Action',
 *   platforms: ['PC', 'Xbox', 'PlayStation'],
 *   releaseDate: '2024-07-12'
 * };
 * 
 * <GameDetails game={game} />
 * 
 * @created 2024-07-12
 * @updated 2024-07-12
 */

import React from 'react';

function GameDetails({ game }) {
  return (
    <div className='mb-6'>
      {game.genre && (
        <p className="text-lg text-black mb-2">
          <strong>Genre:</strong> {game.genre}
        </p>
      )}
      {game.platforms && game.platforms.length > 0 && (
        <p className="text-lg text-black mb-2">
          <strong>Platforms:</strong> {game.platforms.join(', ')}
        </p>
      )}
      {game.releaseDate && (
        <p className="text-lg text-black mb-2">
          <strong>Release Date:</strong> {game.releaseDate}
        </p>
      )}
      {game.price && (
        <p className="text-lg text-black mb-2">
          <strong>Price:</strong> {game.price}
        </p>
      )}
    </div>
  );
}

export default GameDetails;
