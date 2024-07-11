/**
 * @file TempGame.jsx
 * @module TempGame
 * @desc React component that displays the page for a specific game - TempGame.
 * Renders the details and information about TempGame.
 * 
 * @component TempGame
 * 
 * @requires react
 * 
 * @see {@link https://reactjs.org/docs/getting-started.html|React Documentation}
 * 
 * @returns {JSX.Element} The rendered TempGame component.
 * 
 * @example
 * // Example usage of TempGame component
 * <TempGame />
 * 
 * @author Chace Nielson
 * @created 2024-07-10
 * @updated 2024-07-10
 */

import React from 'react';

function TempGame() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">TempGame</h1>
      <p className="mt-4">Details about TempGame will be displayed here.</p>
    </div>
  );
}

export default TempGame;
