/**
 * gameListData.js
 * Data relation to the game list page.
 */

/**
 * An array of game objects.
 * @typedef {Object} Game
 * @property {string} id - The unique identifier of the game.
 * @property {string} name - The name of the game.
 * @property {string} description - The description of the game.
 */
export const games = [
  { id: 'Zeitghast', 
    name: 'Zeitghast', 
    description: 'An epic adventure through time.',
    link: 'https://store.steampowered.com/app/2593070/Zeitghast/'
  },
  { id: 'TempGame', 
    name: 'TempGame', 
    description: 'A temporary game with endless fun.',
    link: 'https://store.steampowered.com/app/2593070/Zeitghast/' 
  }
];