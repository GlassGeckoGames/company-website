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
    pannelImg: "zeitghastBackdrop.png",
    pannelDescription: 'An epic adventure through time.',
    pannelLink: 'https://store.steampowered.com/app/2593070/Zeitghast/',
    description: 'Zeitghast is a game that takes place in a world where time is a valuable resource. Players must navigate through the world and make decisions that affect the flow of time. The game features a unique time-travel mechanic that allows players to rewind time and make different choices. The goal of the game is to solve puzzles and uncover the mysteries of the world while managing the limited time available to the player.',
    images: [
      'zeitghastBackdrop.png', 
      'character.png', 
    ],
    genre: 'Adventure, Indie, Action',
    platforms: ['PC'],
    releaseDate: '15 Dec, 2023',
    features: [
      'Unique time-travel mechanics',
      'Multiple endings based on player choices',
      'Beautiful hand-drawn art',
      'Complex puzzles and challenges',
      'Immersive storytelling',
      'Single-player mode',
      'Steam Achievements',
      'Family Sharing'
    ],
    systemRequirements: {
      minimum: {
        OS: 'Windows 7',
        Memory: '4 GB RAM',
        Storage: '600 MB available space'
      },
      recommended: {
        OS: 'Windows 11',
        Memory: '8 GB RAM',
        Storage: '600 MB available space'
      }
    },
    price: 'Free',
    trailer: 'https://www.youtube.com/watch?v=r8PjadkBUMY',
    reviews: [
      { source: 'IGN', score: '9/10', quote: 'A time-bending masterpiece!' },
      { source: 'GameSpot', score: '8.5/10', quote: 'Engaging and innovative puzzle mechanics.' }
    ],
    tags: ['Adventure', 'Action', 'Female Protagonist', '3D Platformer', 'Exploration', 'Third Person', 'Controller Support', 'Atmospheric', 'Linear', 'Cartoony', 'Action-Adventure', 'Colorful', 'Stylized', 'Sci-fi', 'Platformer', '3D', 'Emotional', 'Mystery', 'Singleplayer', 'Puzzle Platformer'],
    playLink: {
      name: 'Play on Steam',
      url: 'https://store.steampowered.com/app/2593070/Zeitghast/'
    }
  },
  { // I am a Monster Saving the Princess I Captured While Trying Not to Let My Boss Dragon Notice Because They Are Unpleasant
    id:'iamamonstersavingtheprincessicapturedwhiletryingnottoletmybossdragonnnoticebecausetheyareunpleasant', // for routing !!!!
    title: 'I am a Monster Saving the Princess I Captured While Trying Not to Let My Boss Dragon Notice Because They Are Unpleasant',
    pannelImg: "princessGameBackdrop.png",
    pannelDescription: 'A puzzle game made for the GMTK Game Jam 2023 all about role reversal.',
    pannelLink: 'https://serpexnessie.itch.io/this-time-the-monsters-save-the-princess' ,
    description: 'In this whimsical adventure, you play as a misunderstood monster who has captured a princess, only to decide to save her from the clutches of your unpleasant boss dragon. Navigate through humorous challenges and puzzles as you try to rescue the princess without drawing the ire of the dragon.',
    images: [
      'princessGameBackdrop.png',
      'princessGame1.png',
    ],
    genre: 'Adventure, Comedy, Puzzle',
    platforms: ['PC', 'Switch'],
    releaseDate: '1 Apr, 2024',
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
        OS: 'Windows 8',
        Memory: '4 GB RAM',
        Storage: '500 MB available space'
      },
      recommended: {
        OS: 'Windows 10',
        Memory: '8 GB RAM',
        Storage: '1 GB available space'
      }
    },
    price: 'Free',
    trailer: 'https://www.youtube.com/watch?v=fake_trailer_link',
    reviews: [
      { source: 'Kotaku', score: '8/10', quote: 'A hilarious and heartwarming adventure.' },
      { source: 'Polygon', score: '7.5/10', quote: 'Charming and delightful with clever puzzles.' }
    ],
    tags: ['Comedy', 'Adventure', 'Puzzle', 'Colorful', 'Cartoon', 'Singleplayer', 'Controller Support', 'Lighthearted', 'Fantasy', 'Humor'],
    playLink: {
      name: 'Play on Itch.io',
      url: 'https://store.steampowered.com/app/fake_game_link/Monster_Saving_Princess/'
    }
  }
];
