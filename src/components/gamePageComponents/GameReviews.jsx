/**
 * @file GameReviews.jsx
 * @module GameReviews
 * @desc Component to display reviews of a game, including the review source, score, and a quote.
 * 
 * @component GameReviews
 * 
 * @requires react
 * 
 * @param {Array<Object>} reviews - The array of review objects to display.
 * @param {string} reviews.source - The source of the review.
 * @param {number} reviews.score - The score given by the review.
 * @param {string} reviews.quote - A quote from the review.
 * 
 * @returns {JSX.Element} The component displaying game reviews.
 * 
 * @example
 * // Example usage of GameReviews component
 * const reviews = [
 *   { source: 'IGN', score: 9, quote: 'An amazing experience!' },
 *   { source: 'Gamespot', score: 8, quote: 'Highly enjoyable and immersive.' }
 * ];
 * 
 * <GameReviews reviews={reviews} />
 * 
 * @created 2024-07-12
 * @updated 2024-07-12
 */

import React from 'react';

function GameReviews({ reviews }) {
  return (
    <div className="mb-6">
      {reviews && reviews.length > 0 ? (
        <>
          <h2 className="text-3xl font-bold text-secondary mb-4">Reviews</h2>
          <div className="text-lg text-black">
            {reviews.map((review, index) => (
              <div key={index} className="mb-4">
                <p className="font-semibold">{review.source}: {review.score}</p>
                <p className="italic">"{review.quote}"</p>
              </div>
            ))}
          </div>
        </>
      ) : (
        null
      )}
    </div>
  );
}

export default GameReviews;
