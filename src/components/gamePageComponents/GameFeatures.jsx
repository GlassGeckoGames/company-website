/**
 * @file GameFeatures.jsx
 * @module GameFeatures
 * @desc Component to display the features of a game.
 * 
 * @component GameFeatures
 * 
 * @requires react
 * 
 * @param {Object} game - The game object containing features to display.
 * @param {Array<string>} game.features - The features of the game.
 * 
 * @returns {JSX.Element} The component displaying game features.
 * 
 * @example
 * // Example usage of GameFeatures component
 * const game = {
 *   features: ['Multiplayer', 'Single-player', 'High-quality graphics']
 * };
 * 
 * <GameFeatures game={game} />
 * 
 * @created 2024-07-12
 * @updated 2024-07-12
 */

import React from 'react';

function GameFeatures({ game }) {
  return (
    <div className="w-full lg:w-1/3">
      <h2 className="text-3xl font-bold text-secondary mb-4">Features</h2>
      {game.features && game.features.length > 0 ? (
        <ul className="list-disc list-inside text-lg text-black">
          {game.features.map((feature, index) => (
            <li key={index} className="mb-2">{feature}</li>
          ))}
        </ul>
      ) : (
        <p className="text-lg text-black">No features available</p>
      )}
    </div>
  );
}

export default GameFeatures;
