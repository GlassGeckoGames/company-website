/**
 * @file GamePannel.jsx
 * @module GamePannel
 * @desc Renders a game panel component.
 * 
 * @component GamePannel
 * 
 * @param {Object} props - The component props.
 * @param {Object} props.game - The game object containing game details.
 * @param {string} props.game.name - The name of the game.
 * @param {string} props.game.id - The ID of the game.
 * @param {string} props.game.img - The image URL of the game.
 * @param {string} props.game.description - The description of the game.
 * @param {string} props.game.link - The external link to play the game.
 * 
 * @requires react
 * @requires Button
 * @requires ../../analytics
 * 
 * @see {@link https://reactjs.org/docs/getting-started.html|React Documentation}
 * @see {@link https://reactrouter.com/|React Router Documentation}
 * 
 * @returns {JSX.Element} The game panel component.
 * 
 * @example
 * // Example usage of GamePannel component
 * <GamePannel game={{ name: 'Game Name', id: 'game-id', img: 'image.jpg', description: 'Game Description', link: 'https://example.com' }} />
 * 
 * @created 2024-07-10
 * @updated 2024-07-12
 */

import React from 'react';
import Button from '../Button';
import { recordGAEvent } from '../../analytics';

/**
 * Renders a game panel component.
 * 
 * @param {Object} props - The component props.
 * @param {Object} props.game - The game object containing game details.
 * @param {string} props.game.name - The name of the game.
 * @param {string} props.game.id - The ID of the game.
 * @param {string} props.game.img - The image URL of the game.
 * @param {string} props.game.description - The description of the game.
 * @param {string} props.game.link - The external link to play the game.
 * 
 * @returns {JSX.Element} The game panel component.
 */
function GamePannel({ game }) {

  // google analytics event tracking for buttons
  const handleFindOutClick = () => {
    recordGAEvent("Clicked 'Find Out' for " +game.title);
  };

  const handlePlayNowClick = () => {
    recordGAEvent("Clicked 'Play Now' for " +game.title);
  };

  return (
    <li key={game.title} className="relative w-full h-64 md:h-104 lg:h-128 2xl:h-176 overflow-hidden">
      <img className="w-full h-full object-cover" src={process.env.PUBLIC_URL + `/gameMedia/${game.id}/${game.pannelImg}`} alt={game.title} />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 bg-black bg-opacity-30">
        <h2 className="text-white text-3xl md:text-5xl font-bold mb-2 text-outline-large line-clamp-3 break-words">{game.title}</h2>
        <p className="text-white text-sm md:text-lg max-w-2xl mb-2 text-outline-small line-clamp-4 break-words">{game.pannelDescription}</p>
        <div className='flex gap-4 pt-4'>
          {game.id && (
            <Button onClickFunc={handleFindOutClick} type="secondary" as="link" to={`/games/${game.id}`}>Find Out</Button>
          )}

          {game.playLink && game.playLink.url && (
            <Button onClickFunc={handlePlayNowClick} type="accent" as="a" href={game.playLink.url}>Play Now</Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default GamePannel;
