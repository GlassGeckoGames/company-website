import React from 'react';
import { games } from '../../data/gameListData';
import GamePannel from './GamePannel';

function GameList() {
  return (
    <div className="mt-4">
      <ul>
        {games.map(game => (
          <GamePannel game={game} />
        ))}
      </ul>
    </div>
  );
}

export default GameList;
