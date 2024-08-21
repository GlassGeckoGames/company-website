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
 * @requires ../ImageComponent
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
 * @updated 2024-08-21
 */
import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Button from '../Button';
import { recordGAEvent } from '../../googleAnalytics/analytics';
import ImageComponent from '../ImageComponent';

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
function GamePannel({ game, index }) {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonsRef = useRef(null);

  const [titleHasAnimated, setTitleHasAnimated] = useState(false);
  const [descriptionHasAnimated, setDescriptionHasAnimated] = useState(false);
  const [buttonsHaveAnimated, setButtonsHaveAnimated] = useState(false);

  const titleInView = useInView(titleRef, { triggerOnce: true, margin: '0px 0px -15% 0px' });
  const descriptionInView = useInView(descriptionRef, { triggerOnce: true, margin: '0px 0px -15% 0px' });
  const buttonsInView = useInView(buttonsRef, { triggerOnce: true, margin: '0px 0px -15% 0px' });

  // Animation variants for the slide-in effect with delay
  const slideInLeft = {
    hidden: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.3 } }
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
    recordGAEvent({ 
      category: 'Button', 
      action: 'Click', 
      label: `Learn More - ${game.title}` 
    });
  };

  const handlePlayNowClick = () => {
    recordGAEvent({ 
      category: 'Button', 
      action: 'Click', 
      label: `Play Now - ${game.title}` 
    });
  };

  return (
    <li id={`${index}`} key={game.title} className="home-page-container pannel-height border border-secondary-dark">
      
      <ImageComponent
        className="w-full h-full object-cover"
        src={process.env.PUBLIC_URL + `/gameMedia/${game.id}/${game.pannelImg}`}
        alt={game.title}
        blurHash={game.pannelBlurHash}
      />

      <div className="home-page-box">
        {/* Animate these elements slide in from the left with delay */}
        <motion.h2
          ref={titleRef}
          className="home-page-title break-line-clamp text-shadow"
          initial="hidden"
          animate={(titleInView || titleHasAnimated) ? 'visible' : 'hidden'}
          variants={slideInLeft}
        >
          {game.title}
        </motion.h2>
        <motion.p
          ref={descriptionRef}
          className="home-page-description break-line-clamp pb-1.5 text-shadow"
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
          {game.playLink && game.playLink.url && (
            <Button onClickFunc={handlePlayNowClick} type="accent" as="a" href={game.playLink.url}>Play Now</Button>
          )}

          {game.id && (
            <Button onClickFunc={handleFindOutClick} type="secondary" as="link" to={`/games/${game.id}`}>Learn More</Button>
          )}
        </motion.div>

      </div>
    </li>
  );
}

export default GamePannel;
