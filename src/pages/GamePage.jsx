/**
 * @file GamePage.jsx
 * @module GamePage
 * @desc Renders a game page component based on the game ID provided in the URL.
 * 
 * the images use the id of the game to get the images from the public folder as the folder within gameMedia will match the id of the game in gameData.js
 * 
 * @component GamePage
 * 
 * @param {Object} props - The component props.
 * 
 * @requires react
 * @requires react-router-dom
 * @requires ../../data/gameData
 * @requires ../../components/Button
 * @requires ../../analytics
 * 
 * @see {@link https://reactjs.org/docs/getting-started.html|React Documentation}
 * @see {@link https://reactrouter.com/|React Router Documentation}
 * 
 * @returns {JSX.Element} The game page component.
 * 
 * @example
 * // Example usage of GamePage component
 * <GamePage />
 * 
 * @created 2024-07-12
 * @updated 2024-07-23
 */

import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';

import GamePageHeader from '../components/gamePageComponents/GamePageHeader';
import ImageCarousel from '../components/gamePageComponents/ImageCarousel';

// game data to find game for this page
import { games } from '../data/gameData';
import GameDetails from '../components/gamePageComponents/GameDetails';
import GameFeatures from '../components/gamePageComponents/GameFeatures';
import GameRequirements from '../components/gamePageComponents/GameRequirements';
import GameTrailer from '../components/gamePageComponents/GameTrailer';
import GameReviews from '../components/gamePageComponents/GameReviews';
import { useNavigate } from 'react-router-dom'; // Import useHistory from react-router-dom
import GameDescription from '../components/gamePageComponents/GameDescription';

function GamePage() {
  const navigate = useNavigate();

  const { gameId } = useParams();
  const game = games.find(g => g.id === gameId);
  
  // make sure the game exists and if not redirect to home
  useEffect(() => {
    if (!game) {
      navigate('/');
    }
  }, [game, navigate]);

  // prevent the html from rendering at all while waiting for the game to be found in the useEffect
  if (!game) {
    return null;
  }

  return (
    <div className="container mx-auto p-4 bg-primary">

      <GamePageHeader game={game} />

      <GameTrailer trailer={game.trailer} title={game.title}/>

      <GameDescription game={game} />

      <GameDetails game={game} />

      <ImageCarousel images={game.images} title={game.title} id={game.id} />

      <div className="flex flex-col lg:flex-row pt-2 mb-6">
        <GameFeatures game={game} />
      </div>

      <GameReviews reviews={game.reviews} />

      <div className="flex flex-col lg:flex-row pt-2 mb-6">
        <GameRequirements game={game} />
      </div>

    </div>
  );
}

export default GamePage;
