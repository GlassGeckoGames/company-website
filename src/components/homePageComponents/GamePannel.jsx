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
 * @requires react-router-dom
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
 * @author Chace Nielson
 * @created 2024-07-10
 * @updated 2024-07-11
 */

import React from 'react';
import { Link } from 'react-router-dom';

function GamePannel({ game }) {
  return (
    <li key={game.name} className="relative w-full 
    
    h-64 md:h-104 lg:h-128 2xl:h-176
    
    
    overflow-hidden">
      <img className="w-full h-full object-cover" src={process.env.PUBLIC_URL + `/gameMedia/${game.img}`} alt={game.name} />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 bg-black bg-opacity-20">
        <Link to={`/games/${game.id}`} className="hover:cursor-pointer ">
          <h2 className="text-white text-2xl md:text-4xl font-bold mb-2 hover:text-accent">{game.name}</h2>
        </Link>
        <p className="text-white text-sm md:text-lg max-w-2xl mb-4 ">{game.description}</p>
        <a
          href={game.link}
          target="_blank"
          rel="noopener noreferrer"
          className="button-base text-lg font-semibold px-4 py-2 rounded"
        >
          <span className="button-content hover:scale-110">Play Now</span>
        </a>
      </div>
    </li>
  );
}

export default GamePannel;
