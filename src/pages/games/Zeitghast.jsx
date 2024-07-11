/**
 * @file Zeitghast.jsx
 * @module Zeitghast
 * @desc React component that displays the page for the game Zeitghast.
 * Renders the details and information about Zeitghast, including description, images, features, system requirements, trailer, and reviews.
 * 
 * @component Zeitghast
 * 
 * @requires react
 * @requires ../../data/gameData
 * 
 * @see {@link https://reactjs.org/docs/getting-started.html|React Documentation}
 * 
 * @returns {JSX.Element} The rendered Zeitghast component.
 * 
 * @example
 * // Example usage of Zeitghast component
 * <Zeitghast />
 * 
 * @author Chace Nielson
 * @created 2024-07-10
 * @updated 2024-07-11
 */
import React from 'react';
import { zeitghastInfo } from '../../data/gameData';

function Zeitghast() {
  const getEmbedUrl = (url) => {
    const videoId = url.split('v=')[1];
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <div className="container mx-auto p-4 bg-primary">
      <h1 className="text-4xl font-bold text-secondary mb-4">{zeitghastInfo.title}</h1>
      <div className="mb-6">
        <p className="text-lg text-black mb-2">{zeitghastInfo.description}</p>
        <div className="flex flex-wrap gap-4 mb-4">
          {zeitghastInfo.images.map((image, index) => (
            <img
              key={index}
              src={process.env.PUBLIC_URL + image}
              alt={`${zeitghastInfo.title} screenshot ${index + 1}`}
              className="w-full md:w-1/3 h-auto rounded shadow-lg"
            />
          ))}
        </div>
        <p className="text-lg text-black mb-2"><strong>Genre:</strong> {zeitghastInfo.genre}</p>
        <p className="text-lg text-black mb-2"><strong>Platforms:</strong> {zeitghastInfo.platforms.join(', ')}</p>
        <p className="text-lg text-black mb-2"><strong>Release Date:</strong> {zeitghastInfo.releaseDate}</p>
      </div>
      
      <div className='md:flex gap-10'>

        <div className="mb-6 w-full">
          <h2 className="text-3xl font-bold text-secondary mb-4">Features</h2>
          <ul className="list-disc list-inside text-lg text-black">
            {zeitghastInfo.features.map((feature, index) => (
              <li key={index} className="mb-2">{feature}</li>
            ))}
          </ul>
        </div>
        
        <div className="mb-6 w-full">
          <h2 className="text-3xl font-bold text-secondary mb-4">System Requirements</h2>
          <div className="text-lg text-black mb-2">
            <h3 className="text-2xl font-semibold">Minimum:</h3>
            <ul className="list-disc list-inside">
              {Object.entries(zeitghastInfo.systemRequirements.minimum).map(([key, value], index) => (
                <li key={index} className="mb-1"><strong>{key}:</strong> {value}</li>
              ))}
            </ul>
          </div>
          <div className="text-lg text-black mb-2">
            <h3 className="text-2xl font-semibold">Recommended:</h3>
            <ul className="list-disc list-inside">
              {Object.entries(zeitghastInfo.systemRequirements.recommended).map(([key, value], index) => (
                <li key={index} className="mb-1"><strong>{key}:</strong> {value}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-secondary mb-4">Trailer</h2>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src={getEmbedUrl(zeitghastInfo.trailer)}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Zeitghast Trailer"
            className="w-full h-full rounded-2xl shadow-lg"
          ></iframe>
        </div>
      </div>
      
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-secondary mb-4">Reviews</h2>
        <div className="text-lg text-black">
          {zeitghastInfo.reviews.map((review, index) => (
            <div key={index} className="mb-4">
              <p className="font-semibold">{review.source}: {review.score}</p>
              <p className="italic">"{review.quote}"</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mb-6">
        <a
          href={zeitghastInfo.playLink.url}
          target="_blank"
          rel="noopener noreferrer"
          className="button-base text-lg font-semibold px-4 py-2 rounded bg-accent text-white hover:bg-accent-dark"
        >
          {zeitghastInfo.playLink.name}
        </a>
      </div>
    </div>
  );
}

export default Zeitghast;
