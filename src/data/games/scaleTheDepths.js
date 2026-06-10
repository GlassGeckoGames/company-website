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
  
  trailer: 'https://www.youtube.com/watch?v=UjbuLv1dTh8',


  // info for the main page
  description: 'Originally made for the 2024 GMTK Game Jam, Scale the Depths is now a full relaxing fishing simulation. Catch fish, scale them for hungry customers, and upgrade your gear — all set in a hand-crafted pixel world with a chill, atmospheric vibe.',
  playLinks:[
    {
      name: "Play on Steam",
      url: 'https://store.steampowered.com/app/3198890/Scale_the_Depths/'
    },
    {
      name: 'Join the Discord!',
      url: 'https://discord.gg/swvZQy5bAv',
    },
    {
      name: 'Play Game Jam Version on Itch.io',
      url: 'https://serpexnessie.itch.io/scale-the-depths',
    }
  ],
  images: [
    'Steam event_cover.png',
    'Steam Screenshot-1.jpg',
    'Steam Screenshot-2.jpg',
    'Steam Screenshot-3.jpg',
    'Steam Screenshot-4.jpg',
    'Steam Screenshot-5.jpg',
    'Steam Screenshot-6.jpg',
    'Steam Screenshot-7.jpg',
    'Steam Screenshot-8.jpg',
    'Steam Screenshot-9.jpg',
  ],
  genre: 'Chill, Simulation, Casual',
  platforms: ['Windows', 'Mac'],
  releaseDate: '28 May 2026',
  features: [
    'Relaxing and immersive gameplay',
    'Beautiful, hand-crafted pixel environments',
    'Serve customers after scaling fish',
    'Progressive challenge with larger and rarer fish',
    'Upgrade your fishing gear',
    'Chill, atmospheric music',
  ],
  systemRequirements: {
    windows: {
      minimum: {
        'Processor Type': 'Requires a 64-bit processor and operating system',
        'OS': 'Windows 10',
        'Processor': '2 GHz Processor',
        'Memory': '8 GB RAM',
        'Graphics': 'Integrated Graphics',
        'Storage': '2 GB available space'
      }
    },
    mac: {
      minimum: {
        'OS': 'macOS 11 Big Sur',
        'Processor': 'Apple M1 or Intel Core i5',
        'Memory': '4 GB RAM',
        'Storage': '3 GB available space',
        'Additional Notes': '64-bit processor and operating system required'
      }
    }
  },
  // trailer: '',
  /*
  reviews: [
    { source: 'Top Fishing game on Itch.io', quote: "Seriously awesome. One of my favourite games so far." },
    { source: 'GMTK 2024 Game Jam', quote: "This..... game..... I forgot I was playing a jam game - love it" },
    { source: 'Featured Game on Itch.io', quote: "Amazing game! I was so addicted, I wanted to keep going even after getting all the upgrades." },
  ],
  */
};
