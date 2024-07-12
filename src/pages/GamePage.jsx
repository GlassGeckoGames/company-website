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
 * @updated 2024-07-12
 */

import React from 'react';
import { useParams } from 'react-router-dom';
import { games } from '../data/gameData';
import Button from '../components/Button';
import { recordGAEvent } from '../analytics';

function GamePage() {
  const { gameId } = useParams();
  const game = games.find(g => g.id === gameId);

  if (!game) {
    return <div className="game-page">Game not found.</div>;
  }

  const getEmbedUrl = (url) => {
    const videoId = url.split('v=')[1];
    return `https://www.youtube.com/embed/${videoId}`;
  };

  const handleClick = () => {
    recordGAEvent(`Clicked Steam Link for ${game.title}`);
  };

  return (
    <div className="container mx-auto p-4 bg-primary">
      <h1 className="text-4xl font-bold text-secondary mb-4">{game.title}</h1>
      <div className="mb-4">
        <p className="text-lg text-black mb-2">{game.description}</p>
        <Button onClickFunc={handleClick} type="accent" as="a" href={game.playLink.url}>
          {game.playLink.name}
        </Button>
      </div>
      <div className="flex flex-wrap gap-4 mb-4">
        {game.images.map((image, index) => (
          <img
            key={index}
            src={process.env.PUBLIC_URL + "/gameMedia/" + game.id + "/"+image}
            alt={`${game.title} screenshot ${index + 1}`}
            className="w-full md:w-1/3 h-auto rounded shadow-lg"
          />
        ))}
      </div>
      <p className="text-lg text-black mb-2">
        <strong>Genre:</strong> {game.genre}
      </p>
      <p className="text-lg text-black mb-2">
        <strong>Platforms:</strong> {game.platforms.join(', ')}
      </p>
      <p className="text-lg text-black mb-2">
        <strong>Release Date:</strong> {game.releaseDate}
      </p>
      <div className="md:flex gap-10">
        <div className="mb-6 w-full">
          <h2 className="text-3xl font-bold text-secondary mb-4">Features</h2>
          <ul className="list-disc list-inside text-lg text-black">
            {game.features.map((feature, index) => (
              <li key={index} className="mb-2">{feature}</li>
            ))}
          </ul>
        </div>
        <div className="mb-6 w-full">
          <h2 className="text-3xl font-bold text-secondary mb-4">System Requirements</h2>
          <div className="text-lg text-black mb-2">
            <h3 className="text-2xl font-semibold">Minimum:</h3>
            <ul className="list-disc list-inside">
              {Object.entries(game.systemRequirements.minimum).map(([key, value], index) => (
                <li key={index} className="mb-1">
                  <strong>{key}:</strong> {value}
                </li>
              ))}
            </ul>
          </div>
          <div className="text-lg text-black mb-2">
            <h3 className="text-2xl font-semibold">Recommended:</h3>
            <ul className="list-disc list-inside">
              {Object.entries(game.systemRequirements.recommended).map(([key, value], index) => (
                <li key={index} className="mb-1">
                  <strong>{key}:</strong> {value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-secondary mb-4">Trailer</h2>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src={getEmbedUrl(game.trailer)}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={`${game.title} Trailer`}
            className="w-full h-full rounded-2xl shadow-lg"
          ></iframe>
        </div>
      </div>
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-secondary mb-4">Reviews</h2>
        <div className="text-lg text-black">
          {game.reviews.map((review, index) => (
            <div key={index} className="mb-4">
              <p className="font-semibold">{review.source}: {review.score}</p>
              <p className="italic">"{review.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GamePage;
