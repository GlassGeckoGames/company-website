/**
 * @file gameData.js
 * @desc Contains the list of game data objects for the GamePage for each game.
 * this is also used for the game pannel data on the home page using the pannelImg, pannelDescription, and pannelLink specific information
 * 
 * @requires none
 * 
 * @returns {Array} The list of game data objects.
 * 
 * @example
 * // Example usage of gameData
 * const games = gameData;
 * const firstGame = games[0];
 * console.log(firstGame.title); // Accesses the title of the first game
 * 
 * // Object keys that can be used:
 * // id, title, description, images, genre, platforms, releaseDate, features,
 * // systemRequirements, price, trailer, reviews, tags, playLink
 * 
 * pannelBlurHash is a string that represents the blurhash of the pannel image
 * 
 * 
 * images is a list of images related to this game 
 * 
 * @created 2024-07-12
 * @updated 2024-08-21
 */
import { zeitghast } from './games/zeitghast';
import { scaleTheDepths } from './games/scaleTheDepths';
import { monstersSavingThePrincess } from './games/monstersSavingThePrincess';

export const games = [
  scaleTheDepths,
  zeitghast,
  monstersSavingThePrincess,
];