/**
 * @file gameData.js
 * @module gameData
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
 * 
 * images is a list of images related to this game 
 * 
 * @created 2024-07-12
 * @updated 2024-07-12
 */

export const games = [
  { //Zeitghast
    id: 'zeitghast',  // for routing !!!!
    title: 'Zeitghast',

    // info for the pannel on the home page
    pannelImg: "zeitghastBackdrop.png",
    pannelDescription: 'An epic adventure through time.',

    // info for the main page 
    description: 'Zeitghast is a game that takes place in a world where time is a valuable resource. Players must navigate through the world and make decisions that affect the flow of time. The game features a unique time-travel mechanic that allows players to rewind time and make different choices. The goal of the game is to solve puzzles and uncover the mysteries of the world while managing the limited time available to the player.',
    playLink: {
      name: 'Play on Steam',
      url: 'https://store.steampowered.com/app/2593070/Zeitghast/'
    },
    images: [
      'zeitghastBackdrop.png', 
      'character.png', 
      '../../logos/Glass_Gecko_Games_Icon.png',
      '../../logos/Glass_Gecko_Games_Icon_clear.png',
      '../../teamPhotos/chace_nielson.jpg',
      '../../newsImages/jul12_monstorMashAnouncment.png'
    ],
    genre: 'Adventure, Indie, Action',
    platforms: ['PC'],
    releaseDate: '15 Dec, 2023',
    features: [
      'Unique time-travel mechanics',
      'Beautiful hand-drawn art',
      'Complex puzzles and challenges',
      'Single-player mode',
      'Steam Achievements',
    ],
    systemRequirements: {
      minimum: {
        OS: 'Windows 10',
        Processor: '2 GHz Processor',
        Memory: '4 GB RAM',
        Graphics: 'Integrated graphics',
        Storage: '2 GB available space'
      },
      recommended: {
        OS: 'Windows 10 or 11',
        Processor: '3.5 GHz Processor',
        Memory: '8 GB RAM',
        Graphics: 'Any modern graphics card',
        Storage: '2 GB available space'
      }
    },
    price: 'Free',
    trailer: 'https://www.youtube.com/watch?v=r8PjadkBUMY',
    reviews: [
      { source: 'IGN', score: '9/10', quote: 'A time-bending masterpiece!' },
      { source: 'GameSpot', score: '8.5/10', quote: 'Engaging and innovative puzzle mechanics.' }
    ],
    tags: ['Adventure', 'Action', 'Female Protagonist', '3D Platformer', 'Exploration', 'Third Person', 'Controller Support', 'Atmospheric', 'Linear', 'Cartoony', 'Action-Adventure', 'Colorful', 'Stylized', 'Sci-fi', 'Platformer', '3D', 'Emotional', 'Mystery', 'Singleplayer', 'Puzzle Platformer'],

  },
  { // I am a Monster Saving the Princess I Captured While Trying Not to Let My Boss Dragon Notice Because They Are Unpleasant
    id:'iamamonstersavingtheprincessicapturedwhiletryingnottoletmybossdragonnnoticebecausetheyareunpleasant', // for routing !!!!
    title: 'I am a Monster Saving the Princess I Captured While Trying Not to Let My Boss Dragon Notice Because They Are Unpleasant',
    
    // info for the pannel on the home page
    pannelImg: "princessGameBackdrop.png",
    pannelDescription: 'A puzzle game made for the GMTK Game Jam 2023 all about role reversal.',
   
    // info for the main page
    description: 'In this whimsical adventure, you play as a misunderstood monster who has captured a princess, only to decide to save her from the clutches of your unpleasant boss dragon. Navigate through humorous challenges and puzzles as you try to rescue the princess without drawing the ire of the dragon.',
    playLink: {
      name: 'Play on Itch.io',
      url: 'https://serpexnessie.itch.io/this-time-the-monsters-save-the-princess',
    },
    images: [
      'princessGameBackdrop.png',
      'princessGame3.png',
      // 'princessGame1.png',
      'princessGame2.png',
      'princessGame3.png',
      'princessGame2.png',
      'princessGameBackdrop.png',
      'princessGameBackdrop.png',
      'princessGameBackdrop.png',
      'princessGameBackdrop.png',
      'princessGameBackdrop.png',
      'princessGameBackdrop.png',
      'princessGameBackdrop.png',
      'princessGameBackdrop.png',
      'princessGameBackdrop.png',
      'princessGameBackdrop.png',
      'princessGameBackdrop.png',
      'princessGameBackdrop.png',
      'princessGameBackdrop.png',
      'princessGameBackdrop.png',
      'princessGameBackdrop.png',
      'princessGameBackdrop.png',
    ],
    genre: 'Adventure, Comedy, Puzzle',
    platforms: ['PC'],
    releaseDate: '2023',
    features: [
      'Humorous storyline',
      'Engaging puzzles and challenges',
      'Colorful, cartoon-style graphics',
      'Unique character interactions',
      'Multiple endings',
      'Single-player mode',
      'Controller Support'
    ],
    systemRequirements: {
      minimum: {
        OS: 'Windows 10',

      },

    },
    price: 'Free',
    trailer: 'https://www.youtube.com/watch?v=fake_trailer_link',
    reviews: [
      { source: 'Kotaku', score: '8/10', quote: 'A hilarious and heartwarming adventure.' },
      { source: 'Polygon', score: '7.5/10', quote: 'Charming and delightful with clever puzzles.' }
    ],
    tags: ['Comedy', 'Adventure', 'Puzzle', 'Colorful', 'Cartoon', 'Singleplayer', 'Controller Support', 'Lighthearted', 'Fantasy', 'Humor'],
  },
];
