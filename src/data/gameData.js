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
 * @updated 2024-07-14
 */

export const games = [
  { // Zeitghast
    id: 'zeitghast',  // for routing !!!!
    title: 'Zeitghast',

    // info for the pannel on the home page
    pannelImg: "zeitghastBackdrop.png",
    pannelBlurHash: "q8E:x+2~*q4m4TMcKlreI88wrVQ,?]Tbn9ks3[zNIjv..7x@r#SvX-Q^yWN|ggRhQ:rrk;%4Z}HrtQX-M}NHKHjJxvnRnNf#sFSd",
    pannelDescription: 'An epic adventure through time',

    // info for the main page 
    description: 'Zeitghast is a fast-paced, action-packed sidescrolling Platformer-Shooter in which you navigate a technologically enhanced prehistoric world. Take on the role of a Zeitghast--A magical time spirit tasked with protecting the timeline, and stop the evil Dr. Antag O’Neste as he travels back in time to take credit for every invention that ever existed.',
    playLink: {
      name: 'Play on Steam',
      url: 'https://store.steampowered.com/app/2593070/Zeitghast/'
    },
    images: [
      "zeitghast1.jpg",
      "zeitghast2.jpg",
      "zeitghast3.jpg",
      "zeitghast4.jpg",
      "zeitghast5.jpg",
      "zeitghast6.jpg",
      "zeitghast7.jpg",
    ],
    genre: 'Adventure, Indie, Action',
    platforms: ['PC'],
    releaseDate: '15 Dec, 2023',
    price: 'Free',
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
    trailer: 'https://www.youtube.com/watch?v=r8PjadkBUMY',
    reviews: [
      { source: 'Steam', score: '85% Positive Ratings', quote: "Cute and solid speedrun-oriented platformer. Here's your dash, choose 2 weapons and off you go." }
    ],
  },
  { // I am a Monster Saving the Princess I Captured While Trying Not to Let My Boss Dragon Notice Because They Are Unpleasant
    id:'iamamonstersavingtheprincessicapturedwhiletryingnottoletmybossdragonnnoticebecausetheyareunpleasant', // for routing !!!!
    title: 'I am a Monster Saving the Princess I Captured While Trying Not to Let My Boss Dragon Notice Because They Are Unpleasant',
    
    // info for the pannel on the home page
    pannelImg: "princessGameBackdrop.png",
    pannelBlurHash: "qAEe*{IBDk~Bsq?aofM{owD*4:tQM{Ipt7n%0fkC_2tlR*IUt7of$%r?w]xaIVxat7S2xaWYV[WBWXs.s:RjI;E1ozSeM|xaM|WC",
    pannelDescription: 'A puzzle game about role reversal',
   
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
    // trailer: '',

  },
];
