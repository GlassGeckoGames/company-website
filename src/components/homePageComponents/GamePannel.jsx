import React from 'react'
import { Link } from 'react-router-dom';


function GamePannel({game}) {
  return (
    <li key={game.name} className="mb-4 bg-red-100">
    <Link to={`/games/${game.id}`} className="text-blue-500 text-xl font-semibold">{game.name}</Link>
    <p>{game.description}</p>
    <a href={game.link} target="_blank" rel="noopener noreferrer" className='hover:text-accent'>Play Game</a>
  </li>
  )
}

export default GamePannel