/**
 * @file scaleTheDepths.js
 * @desc Contains the game data object for the game Scale the Depths.
 * 
 * @requires none
 * 
 * @returns {Object} The game data object for Scale the Depths.
 * 
 * @created 2024-08-21
 * @updated 2024-08-21
 */

export const scaleTheDepths = {
  id: 'scalethedepths', // for routing !!!!
  title: 'Scale the Depths',
  
  // info for the pannel on the home page
  pannelImg: "pannelImg.jpg",
  pannelBlurHash: "LtH3{iWXkCX8_4bIaybHRQbcaejG", // Placeholder for the blurhash you'll provide
  pannelDescription: 'A relaxing fishing simulation',
  
  trailer: 'https://www.youtube.com/watch?v=OOywPGm2zCw',


  // info for the main page
  description: 'Originally made for the 2024 GMTK Game Jam, Scale the Depths is now a full relaxing fishing simulation. Catch fish, scale them for hungry customers, and upgrade your gear — all set in a hand-crafted pixel world with a chill, atmospheric vibe.',
  playLinks:[
    {
      name:"Play Demo on Steam",
      url: 'https://store.steampowered.com/app/3198890/Scale_the_Depths/'
    },
    {
      name: 'Play Game Jam Version on Itch.io',
      url: 'https://serpexnessie.itch.io/scale-the-depths',
    }
  ],
  images: [
    'Screenshot-7.jpg',
    'Screenshot-8.jpg',
    'Screenshot-9.jpg',
    'Screenshot-10.jpg',
    'Screenshot-11.jpg',
    'Screenshot-12.jpg',
    'Screenshot-13.jpg',
    'Screenshot-14.jpg',
  ],
  genre: 'Chill, Simulation, Casual',
  platforms: ['PC', "Mobile"],
  releaseDate: '2026',
  price: 'TBD',
  features: [
    'Relaxing and immersive gameplay',
    'Beautiful, hand-crafted pixel environments',
    'Serve customers after scaling fish',
    'Progressive challenge with larger and rarer fish',
    'Upgrade your fishing gear',
    'Chill, atmospheric music',
  ],
  systemRequirements: {
    minimum: {
      OS: 'Windows or play game jam version in browser',
    }
  },
  // trailer: '',
  reviews: [
    { source: 'Top Fishing game on Itch.io', quote: "Seriously awesome. One of my favourite games so far." },
    { source: 'GMTK 2024 Game Jam', quote: "This..... game..... I forgot I was playing a jam game - love it" },
    { source: 'Featured Game on Itch.io', quote: "Amazing game! I was so addicted, I wanted to keep going even after getting all the upgrades." },
  ],
};
