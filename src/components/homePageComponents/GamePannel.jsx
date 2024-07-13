/**
 * @file GamePannel.jsx
 * @module GamePannel
 * @desc Renders a game panel component.
 * 
 * @component GamePannel
 * 
 * @param {Object} props - The component props.
 * @param {Object} props.game - The game object containing game details.
 * @param {string} props.game.name - The name of the game.
 * @param {string} props.game.id - The ID of the game.
 * @param {string} props.game.img - The image URL of the game.
 * @param {string} props.game.description - The description of the game.
 * @param {string} props.game.link - The external link to play the game.
 * 
 * @requires react
 * @requires framer-motion
 * @requires Button
 * @requires ../../analytics
 * 
 * @see {@link https://reactjs.org/docs/getting-started.html|React Documentation}
 * @see {@link https://reactrouter.com/|React Router Documentation}
 * @see {@link https://www.framer.com/motion/|Framer Motion Documentation}
 * 
 * @returns {JSX.Element} The game panel component.
 * 
 * @example
 * // Example usage of GamePannel component
 * <GamePannel game={{ name: 'Game Name', id: 'game-id', img: 'image.jpg', description: 'Game Description', link: 'https://example.com' }} />
 * 
 * @created 2024-07-10
 * @updated 2024-07-12
 */

import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Button from '../Button';
import { recordGAEvent } from '../../analytics';

/**
 * Renders a game panel component.
 * 
 * @param {Object} props - The component props.
 * @param {Object} props.game - The game object containing game details.
 * @param {string} props.game.name - The name of the game.
 * @param {string} props.game.id - The ID of the game.
 * @param {string} props.game.img - The image URL of the game.
 * @param {string} props.game.description - The description of the game.
 * @param {string} props.game.link - The external link to play the game.
 * 
 * @returns {JSX.Element} The game panel component.
 */
function GamePannel({ game }) {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonsRef = useRef(null);

  const [titleHasAnimated, setTitleHasAnimated] = useState(false);
  const [descriptionHasAnimated, setDescriptionHasAnimated] = useState(false);
  const [buttonsHaveAnimated, setButtonsHaveAnimated] = useState(false);

  const titleInView = useInView(titleRef, { triggerOnce: true });
  const descriptionInView = useInView(descriptionRef, { triggerOnce: true });
  const buttonsInView = useInView(buttonsRef, { triggerOnce: true });

  // Animation variants for the slide-in effect with delay
  const slideInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.8 } }
  };

  // Set hasAnimated to true when the elements come into view
  if (titleInView && !titleHasAnimated) {
    setTitleHasAnimated(true);
  }
  if (descriptionInView && !descriptionHasAnimated) {
    setDescriptionHasAnimated(true);
  }
  if (buttonsInView && !buttonsHaveAnimated) {
    setButtonsHaveAnimated(true);
  }

  // Google Analytics event tracking for buttons
  const handleFindOutClick = () => {
    recordGAEvent("Clicked 'Find Out' for " + game.title);
  };

  const handlePlayNowClick = () => {
    recordGAEvent("Clicked 'Play Now' for " + game.title);
  };

  return (
    <li key={game.title} className="relative w-full h-64 md:h-104 lg:h-128 2xl:h-176 overflow-hidden">
      <img className="w-full h-full object-cover" src={process.env.PUBLIC_URL + `/gameMedia/${game.id}/${game.pannelImg}`} alt={game.title} />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 bg-black bg-opacity-30">
       
        {/* Animate these elements slide in from the left with delay */}
        <motion.h2
          ref={titleRef}
          className="text-white text-3xl md:text-5xl font-bold mb-2 text-outline-large line-clamp-3 break-words mx-6 md:mx-10 lg:mx-20 xl:mx-28 2xl:mx-40"
          initial="hidden"
          animate={(titleInView || titleHasAnimated) ? 'visible' : 'hidden'}
          variants={slideInLeft}
        >
          {game.title}
        </motion.h2>
        <motion.p
          ref={descriptionRef}
          className="text-white text-sm md:text-lg max-w-2xl mb-2 text-outline-small line-clamp-4 break-words mx-6 md:mx-10 lg:mx-20 xl:mx-28 2xl:mx-40"
          initial="hidden"
          animate={(descriptionInView || descriptionHasAnimated) ? 'visible' : 'hidden'}
          variants={slideInLeft}
        >
          {game.pannelDescription}
        </motion.p>
        <motion.div
          ref={buttonsRef}
          className='flex gap-4 pt-4'
          initial="hidden"
          animate={(buttonsInView || buttonsHaveAnimated) ? 'visible' : 'hidden'}
          variants={slideInLeft}
        >
          {game.id && (
            <Button onClickFunc={handleFindOutClick} type="secondary" as="link" to={`/games/${game.id}`}>Find Out</Button>
          )}

          {game.playLink && game.playLink.url && (
            <Button onClickFunc={handlePlayNowClick} type="accent" as="a" href={game.playLink.url}>Play Now</Button>
          )}
        </motion.div>

      </div>
    </li>
  );
}

export default GamePannel;
