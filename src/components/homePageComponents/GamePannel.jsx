/**
 * Renders a game panel component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Object} props.game - The game object containing game details.
 * @param {string} props.game.name - The name of the game.
 * @param {string} props.game.id - The ID of the game.
 * @param {string} props.game.img - The image URL of the game.
 * @param {string} props.game.description - The description of the game.
 * @param {string} props.game.link - The external link to play the game.
 * @returns {JSX.Element} The game panel component.
 */
import React from 'react';
import { Link } from 'react-router-dom';

function GamePannel({ game }) {
  return (
    <li key={game.name} className="relative w-full h-72 md:h-96 overflow-hidden">
      <Link to={`/games/${game.id}`} className=" hover:cursor-pointer hover:opacity-90 ">

        <img className="w-full h-full object-cover" src={process.env.PUBLIC_URL + `/gameMedia/${game.img}`} alt={game.name} />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 bg-black bg-opacity-50">
          <h2 className="text-white text-2xl md:text-4xl font-bold mb-2">{game.name}</h2>
          <p className="text-white text-sm md:text-lg max-w-2xl mb-4">{game.description}</p>
          
          <a
            href={game.link}
            target="_blank"
            rel="noopener noreferrer"
            className="button-base text-lg font-semibold px-4 py-2 rounded"
          >
            <span className="button-content hover:scale-110">Play Now</span>
          </a>

        </div>
      </Link>
    </li>
  );
}

export default GamePannel;
