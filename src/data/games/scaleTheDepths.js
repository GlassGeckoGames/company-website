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
  pannelImg: "scaleTheDepths5.jpg",
  pannelBlurHash: "LbIjuDIpX9={u6X9Iqs9D$kCI;Rk", // Placeholder for the blurhash you'll provide
  pannelDescription: 'A relaxing fishing simulation',
  
  // info for the main page
  description: 'A game made for the 2024 GMTK Game Jam. You are a robot built to feed hungry aquatic "customers"! Scale the depths with your trusty fishing rod, then scale the depths again, but in the sense of scaling fish.',
  playLink: {
    name: 'Play on Itch.io',
    url: 'https://serpexnessie.itch.io/scale-the-depths',
  },
  images: [
    'scaleTheDepths1.jpg',
    'scaleTheDepths2.jpg',
    'scaleTheDepths3.jpg',
    'scaleTheDepths4.jpg',
    'scaleTheDepths5.jpg',
    'scaleTheDepths6.jpg',
  ],
  genre: 'Chill, Simulation, Casual',
  platforms: ['PC'],
  releaseDate: '2024',
  price: 'Free',
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
      OS: 'Windows',
    }
  },
  // trailer: '',
  reviews: [
    { source: 'GMTK 2024 Game Jam', quote: "Seriously awesome. One of my favourite games so far." },
    { source: 'GMTK 2024 Game Jam', quote: "This..... game..... I forgot it was in a game jam - love it." },
  ],
};
