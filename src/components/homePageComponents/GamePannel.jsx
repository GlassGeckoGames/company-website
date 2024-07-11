import React from 'react';
import { Link } from 'react-router-dom';

function GamePannel({ game }) {
  return (
    <li key={game.name} className="relative w-full h-72 md:h-96 overflow-hidden">
      <img className="w-full h-full object-cover" src={process.env.PUBLIC_URL + `/gameMedia/${game.img}`} alt={game.name} />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 bg-black bg-opacity-50">
        <h2 className="text-white text-2xl md:text-4xl font-bold mb-2">{game.name}</h2>
        <p className="text-white text-sm md:text-lg max-w-2xl mb-4">{game.description}</p>
        <Link to={`/games/${game.id}`} className="text-blue-500 text-lg font-semibold mb-2">Learn More</Link>
        <a href={game.link} target="_blank" rel="noopener noreferrer" className="text-white bg-accent hover:bg-accent-dark text-lg font-semibold px-4 py-2 rounded">
          Play Game
        </a>
      </div>
    </li>
  );
}

export default GamePannel;
