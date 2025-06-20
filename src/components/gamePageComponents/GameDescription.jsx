/**
 * @file GameDescription.jsx
 * @module GameDescription
 * @desc Component to display the header information of a game page, including the title, description, and a link to play the game.
 * 
 * @component GameDescription
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
 * // Example usage of GameDescription component
 * const game = {
 *   title: 'Game Title',
 *   description: 'This is a great game.',
 *   playLink: { url: 'http://example.com', name: 'Play Now' }
 * };
 * 
 * <GameDescription game={game} />
 * 
 * @created 2024-07-12
 * @updated 2024-07-12
 */
import React from 'react';
import Button from '../Button';
import { recordGAEvent } from '../../googleAnalytics/analytics';

function GameDescription({ game }) {

  const handleClick = () => {
    recordGAEvent({ 
      category: 'Link', 
      action: 'Click', 
      label: `Play Game - ${game.title}` 
    });
  };

  return (
    <div className='mb-6'>
      <div className="mb-4">
        <p className="text-lg mb-2 pb-4">{game.description}</p>
          {Array.isArray(game.playLinks) && game.playLinks.length > 0 && (
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4">
              {game.playLinks.map((link, index) => (
                <Button
                  key={index}
                  onClickFunc={() => handleClick(link.name)}
                  type="accent"
                  as="a"
                  href={link.url}
                >
                  {link.name}
                </Button>
              ))}
            </div>
          )}
      </div>
    </div>
  );
}

export default GameDescription;
