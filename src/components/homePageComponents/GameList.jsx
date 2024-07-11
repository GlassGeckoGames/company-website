/**
 * @file GameList.jsx
 * @desc Displays the list of games by rendering a GamePanel component for each game.
 */
import React from 'react';
import { games } from '../../data/gameListData';
import GamePannel from './GamePannel';

function GameList() {
  return (
    <ul>
      {games.map(game => (
        <GamePannel game={game} />
      ))}
    </ul>
  );
}

export default GameList;
