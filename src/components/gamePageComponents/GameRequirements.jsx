/**
 * @file GameRequirements.jsx
 * @module GameRequirements
 * @desc Component to display the system requirements of a game, including minimum and recommended specifications.
 * 
 * @component GameRequirements
 * 
 * @requires react
 * 
 * @param {Object} game - The game object containing system requirements to display.
 * @param {Object} game.systemRequirements - The system requirements object.
 * @param {Object} game.systemRequirements.minimum - The minimum system requirements.
 * @param {Object} game.systemRequirements.recommended - The recommended system requirements.
 * 
 * @returns {JSX.Element} The component displaying game system requirements.
 * 
 * @example
 * // Example usage of GameRequirements component
 * const game = {
 *   systemRequirements: {
 *     minimum: {
 *       OS: 'Windows 10',
 *       Processor: '2 GHz Processor',
 *       Memory: '4 GB RAM',
 *       Graphics: 'Integrated graphics',
 *       Storage: '2 GB available space'
 *     },
 *     recommended: {
 *       OS: 'Windows 10 or 11',
 *       Processor: '3.5 GHz Processor',
 *       Memory: '8 GB RAM',
 *       Graphics: 'Any modern graphics card',
 *       Storage: '2 GB available space'
 *     }
 *   }
 * };
 * 
 * <GameRequirements game={game} />
 * 
 * @created 2024-07-12
 * @updated 2024-07-12
 */

import React from 'react';

function GameRequirements({ game }) {
  return (
    <div className="w-full lg:w-2/3">
      <h2 className="text-3xl font-bold text-secondary mb-4">System Requirements</h2>
      <div className='md:flex justify-stretch gap-14 '>
        {game.systemRequirements && (
          <>
            {game.systemRequirements.minimum && (
              <div className="text-lg text-black mb-2 ">
                <h3 className="text-2xl font-semibold">Minimum:</h3>
                <ul className="list-disc list-inside">
                  {Object.entries(game.systemRequirements.minimum).map(([key, value], index) => (
                    <li key={index} className="mb-1">
                      <strong>{key}:</strong> {value}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {game.systemRequirements.recommended && (
              <div className="text-lg text-black mb-2 ">
                <h3 className="text-2xl font-semibold">Recommended:</h3>
                <ul className="list-disc list-inside">
                  {Object.entries(game.systemRequirements.recommended).map(([key, value], index) => (
                    <li key={index} className="mb-1">
                      <strong>{key}:</strong> {value}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </>
        )}
      </div>
      {!game.systemRequirements && (
        <p className="text-lg text-black">No system requirements available</p>
      )}
    </div>
  );
}

export default GameRequirements;
