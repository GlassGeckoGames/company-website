/**
 * @file Home.jsx is a React component that displays the home page.
 * Renders the welcome screen and the list of games.
 *
 * @component
 * @returns {JSX.Element} The rendered Home component
 */
import React from 'react';
import GameList from '../components/homePageComponents/GameList';
import Intro from '../components/homePageComponents/Intro';

function Home() {
  return (
    <div className="container mx-auto p-4">
      <Intro/>
      <GameList/>
    </div>
  );
}

export default Home;
