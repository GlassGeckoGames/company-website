/**
 * @file GameList.jsx
 * @module GameList
 * @desc Displays the list of games by rendering a GamePannel component for each game.
 * 
 * @component GameList
 * 
 * @requires react
 * @requires ../../data/gameListData
 * @requires ./GamePannel
 * 
 * @see {@link https://reactjs.org/docs/getting-started.html|React Documentation}
 * 
 * @returns {JSX.Element} The rendered GameList component.
 * 
 * @example
 * // Example usage of GameList component
 * <GameList />
 * 
 * @author Chace Nielson
 * @created 2024-07-10
 * @updated 2024-07-10
 */

import React from 'react';
import { games } from '../../data/gameListData';
import GamePannel from './GamePannel';

function GameList() {
  return (
    <ul>
      {games.map(game => (
        <GamePannel key={game.id} game={game} />
      ))}
    </ul>
  );
}

export default GameList;
