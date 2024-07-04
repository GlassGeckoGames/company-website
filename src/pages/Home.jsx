import React from 'react';
import GameList from '../components/GameList';

function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Welcome to Glass Gecko Games</h1>
      <p className="mt-4">Explore our exciting collection of games!</p>
      <GameList/>
    </div>
  );
}

export default Home;
