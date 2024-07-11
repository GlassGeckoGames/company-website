/**
 * @file gameListData.js
 * @module gameListData
 * @desc Data related to the game list page.
 * 
 * @exports games
 * 
 * @typedef {Object} Game
 * @property {string} id - The unique identifier of the game.
 * @property {string} name - The name of the game.
 * @property {string} description - The description of the game.
 * @property {string} img - The image URL of the game.
 * @property {string} link - The external link to play the game.
 * 
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export|MDN Export Documentation}
 * 
 * @example
 * // Example usage of games data
 * import { games } from './gameListData';
 * 
 * games.forEach(game => {
 *   console.log(game.name);
 * });
 * 
 * @author Chace Nielson
 * @created 2024-07-10
 * @updated 2024-07-10
 */

/**
 * An array of game objects.
 * @type {Game[]}
 */
export const games = [
  { 
    id: "Zeitghast", // for routing
    name: 'Zeitghast', 
    img: "zeitghast/zeitghastBackdrop.png",
    description: 'An epic adventure through time.',
    link: 'https://store.steampowered.com/app/2593070/Zeitghast/'
  },
  { 
    id: "TempGame", // for routing
    name: 'TempGame', 
    img: "tempGame/tempGameBackdrop.png",
    description: 'A temporary game with endless fun.',
    link: 'https://store.steampowered.com/app/2593070/Zeitghast/' 
  }
];
