/**
 * @file monstersSavingThePrincess.js
 * @desc Contains the game data object for the game Monsters Saving the Princess.
 * 
 * @requires none
 * 
 * @returns {Object} The game data object for Monsters Saving the Princess.
 * 
 * @created 2024-08-21
 * @updated 2024-08-21
 */

export const monstersSavingThePrincess = {
  id: 'monsterssavingtheprincess', // for routing !!!!
  title: 'Monsters Saving the Princess',
  
  // info for the pannel on the home page
  pannelImg: "princessGameBackdrop.png",
  pannelBlurHash: "qAEe*{IBDk~Bsq?aofM{owD*4:tQM{Ipt7n%0fkC_2tlR*IUt7of$%r?w]xaIVxat7S2xaWYV[WBWXs.s:RjI;E1ozSeM|xaM|WC",
  pannelDescription: 'A role reversing puzzle game',
  
  // info for the main page
  description: 'In this whimsical adventure, you play as a misunderstood monster who has captured a princess, only to decide to save her from the clutches of your unpleasant boss dragon. Navigate through humorous challenges and puzzles as you try to rescue the princess without drawing the ire of the dragon.',
  playLink: {
    name: 'Play on Itch.io',
    url: 'https://serpexnessie.itch.io/this-time-the-monsters-save-the-princess',
  },
  images: [
    'princessGame1.png',
    'princessGame2.png',
    'princessGame3.png',
    'princessGameBackdrop.png',
  ],
  genre: 'Adventure, Comedy, Puzzle',
  platforms: ['PC'],
  releaseDate: '2023',
  price: 'Free',
  features: [
    "Don't expect much, it was made in 2 days",
    'Engaging puzzles and challenges',
    'Day/night mechanic',
    'Avoid drawing the dragon’s suspicion',
    "Colorful, cartoony graphics"
  ],
  systemRequirements: {
    minimum: {
      OS: 'Windows',
    }
  },
};
