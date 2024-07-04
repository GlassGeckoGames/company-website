import React from 'react';
import { Link } from 'react-router-dom';

const games = [
  { id: 'Zeitghast', name: 'Zeitghast', description: 'An epic adventure through time.' },
  { id: 'TempGame', name: 'TempGame', description: 'A temporary game with endless fun.' },
];

function GameList() {
  return (
    <div className="mt-4">
      <h2 className="text-2xl font-bold mb-4">Our Games</h2>
      <ul>
        {games.map(game => (
          <li key={game.id} className="mb-4">
            <Link to={`/games/${game.id}`} className="text-blue-500 text-xl font-semibold">{game.name}</Link>
            <p className="text-gray-700">{game.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GameList;
