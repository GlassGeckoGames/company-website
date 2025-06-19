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
import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

import Button from '../Button';
import { recordGAEvent } from '../../googleAnalytics/analytics';
import ImageComponent from '../ImageComponent';

function GamePannel({ game, index }) {
  const sectionRef = useRef(null);

  // Track scroll relative to this component
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'], // top hits bottom, bottom hits top
  });

  const centeredScroll = useTransform(scrollYProgress, [0, 0.5, 1], [-1, 0, 1]);

  // Scroll thresholds
  const enterDis = -0.3;
  const exitDis = 0.4;

  // Transform styles for each animated layer
  const titleX = useTransform(centeredScroll, [-1, enterDis, 0, exitDis, 1], ['-100%', '0%', '0%', '0%', '100%']);
  const titleOpacity = useTransform(centeredScroll, [-1, enterDis, 0, exitDis, 1], [0, 1, 1, 1, 0]);

  const descX = useTransform(centeredScroll, [-1, enterDis+0.05, 0, exitDis+0.05, 1], ['-100%', '0%', '0%', '0%', '100%']);
  const descOpacity = useTransform(centeredScroll, [-1, enterDis+0.05, 0, exitDis+0.05, 1], [0, 1, 1, 1, 0]);

  const buttonsX = useTransform(centeredScroll, [-1, enterDis+0.1, 0, exitDis+0.1, 1], ['-100%', '0%', '0%', '0%', '100%']);
  const buttonsOpacity = useTransform(centeredScroll, [-1, enterDis+0.1, 0, exitDis+0.1, 1], [0, 1, 1, 1, 0]);

  // Google Analytics event tracking
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
    <li
      ref={sectionRef}
      id={`${index}`}
      className="home-page-container pannel-height  border-secondary-dark border-t-4"
    >
      <ImageComponent
        className="w-full h-full object-cover brightness-90"
        src={process.env.PUBLIC_URL + `/gameMedia/${game.id}/${game.pannelImg}`}
        alt={game.title}
        blurHash={game.pannelBlurHash}
      />

          <img 
      src={process.env.PUBLIC_URL + '/art/LCD_background_1.png'} 
      alt=""
      className={`
        absolute top-0 left-0 w-full h-full object-cover pointer-events-none 
        transition-opacity duration-[2000ms] z-45 opacity-5
      `}
    />

      <div className="home-page-box">
        <motion.h2
          className="home-page-title break-line-clamp text-shadow-lg"
          style={{ x: titleX,  opacity: titleOpacity }}
        >
          {game.title}
        </motion.h2>

        <motion.p
          className="home-page-description  break-line-clamp pb-1.5 text-shadow"
          style={{ x: descX, opacity: descOpacity }}
        >
          {game.pannelDescription}
        </motion.p>

        <motion.div
          className="flex gap-4 pt-4 container px-4 justify-center"
          style={{ x: buttonsX,  opacity: buttonsOpacity }}
        >
          {game.playLinks?.[0]?.url && (
            <Button
              onClickFunc={() => handlePlayNowClick(game.playLinks[0].name)}
              type="accent"
              as="a"
              href={game.playLinks[0].url}
            >
              Play Now
            </Button>
          )}

          {game.id && (
            <Button onClickFunc={handleFindOutClick} type="secondary" as="link" to={`/games/${game.id}`}>
              Learn More
            </Button>
          )}
        </motion.div>
      </div>
    </li>
  );
}

export default GamePannel;
