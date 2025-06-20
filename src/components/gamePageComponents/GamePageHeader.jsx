/**
 * @file GamePageHeader.jsx
 * @module GamePageHeader
 * @desc Component to display the header information of a game page, including the title, description, and a link to play the game.
 * 
 * @component GamePageHeader
 * 
 * @requires react
 * @requires ../Button
 * @requires ../../analytics
 * 
 * @param {Object} game - The game object containing information to display.
 * @param {string} game.title - The title of the game.
 * @param {string} game.description - The description of the game.
 * @param {Object} game.playLink - The play link object containing URL and name.
 * @param {string} game.playLink.url - The URL to play the game.
 * @param {string} game.playLink.name - The name of the play link button.
 * 
 * @returns {JSX.Element} The component displaying game page header information.
 * 
 * @example
 * // Example usage of GamePageHeader component
 * const game = {
 *   title: 'Game Title',
 *   description: 'This is a great game.',
 *   playLink: { url: 'http://example.com', name: 'Play Now' }
 * };
 * 
 * <GamePageHeader game={game} />
 * 
 * @created 2024-07-12
 * @updated 2024-07-12
 */
import React from 'react';

function GamePageHeader({ game }) {

  return (
    <div className='mb-6'>
      <h1 className="text-4xl md:text-6xl font-bold text-secondary-dark mb-4 titleFont">{game.title}</h1>
    </div>
  );
}

export default GamePageHeader;

