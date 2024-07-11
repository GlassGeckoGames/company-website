/**
 * @file Home.jsx
 * @module Home
 * @desc React component that displays the home page.
 * Renders the welcome screen and the list of games.
 * 
 * @component Home
 * 
 * @requires react
 * @requires ../components/homePageComponents/GameList
 * @requires ../components/homePageComponents/IntroPannel
 * 
 * @see {@link https://reactjs.org/docs/getting-started.html|React Documentation}
 * 
 * @author Chace Nielson
 * @created 2024-07-10
 * @updated 2024-07-10
 */

import React from 'react';
import GameList from '../components/homePageComponents/GameList';
import IntroPannel from '../components/homePageComponents/IntroPannel';

function Home() {
  return (
    <div className="mx-auto">
      <IntroPannel />
      <GameList />
    </div>
  );
}

export default Home;
