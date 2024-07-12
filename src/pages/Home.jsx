/**
 * @file Home.jsx
 * @module Home
 * @desc React component that displays the home page.
 * Renders the welcome screen and the list of games.
 * 
 * @component Home
 * 
 * @requires react
 * @requires ../components/homePageComponents/GamePannel
 * @requires ../components/homePageComponents/IntroPannel
 * 
 * @see {@link https://reactjs.org/docs/getting-started.html|React Documentation}
 * 
 * @author Chace Nielson
 * @created 2024-07-10
 * @updated 2024-07-12
 */
import React from 'react';
import IntroPannel from '../components/homePageComponents/IntroPannel';
import GamePannel from '../components/homePageComponents/GamePannel';

// list of games to display in panels
import { games } from '../data/gameListData';

function Home() {
  return (
    <div className="mx-auto">
      <IntroPannel />
      <ul>
        {games.map(game => (
          <GamePannel key={game.id} game={game} />
        ))}
      </ul>
    </div>
  );
}

export default Home;
