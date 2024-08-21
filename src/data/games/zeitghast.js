/**
 * @file zeitghast.js
 * @desc Contains the game data object for the game Zeitghast.
 * 
 * @requires none
 * 
 * @returns {Object} The game data object for Zeitghast.
 * 
 * @created 2024-08-21
 * @updated 2024-08-21
 */

export const zeitghast = {
  id: 'zeitghast',  // for routing !!!!
  title: 'Zeitghast',

  // info for the pannel on the home page
  pannelImg: "zeitghastBackdrop.png",
  pannelBlurHash: "q8E:x+2~*q4m4TMcKlreI88wrVQ,?]Tbn9ks3[zNIjv..7x@r#SvX-Q^yWN|ggRhQ:rrk;%4Z}HrtQX-M}NHKHjJxvnRnNf#sFSd",
  pannelDescription: 'An epic prehistoric adventure',

  // info for the main page 
  description: 'Run, dash, shoot, and slash your way through a mechanized prehistoric world in this fast paced platformer-shooter. Keep your eye on the clock while trying to stop an evil mad scientist from disrupting the timeline!',
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
};
