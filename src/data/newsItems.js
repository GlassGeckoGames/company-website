/**
 * @file newsData.js
 * @desc Contains the latest news items related to games and company updates.
 * 
 * @exports newsItems
 * 
 * @typedef {Object} NewsItem
 * @property {string} title - The title of the news item.
 * @property {string} description - A short description of the news item.
 * @property {string} date - The date when the news item was posted.
 * @property {string} category - The category of the news item.
 * @property {string[]} [tags] - An optional array of tags related to the news item.
 * @property {Object[]} [externalLinks] - An optional array of external links for more details.
 * @property {string} [externalLinks[].name] - The name of the external link.
 * @property {string} [externalLinks[].url] - The URL of the external link.
 * @property {string} [image] - An optional image associated with the news item.
 * @property {boolean} [featured] - A boolean indicating if the news item is featured.
 * @property {string} [author] - The author of the news item.
 * 
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export|MDN Export Documentation}
 * 
 * @example
 * // Example usage of newsItems data
 * import { newsItems } from './newsData';
 * 
 * newsItems.forEach(news => {
 *   console.log(news.title);
 * });
 * 
 * 
 * @exampleNewsItems - all the things that could be included in a new items object within the list 
 * the top objects in the list is at the top of the list 
 *  
 *  title: "Patch 1.1 for Zeitghast",
 *  description: "We've released Patch 1.1 for Zeitghast, featuring new levels, bug fixes, and performance improvements.",
 *  datePosted: "2024-07-09",
 *  category: "Update",
 *  externalLinks: [
 *    {name: "Official Announcement", url: "https://glassgeckogames.com/official-announcement"},
 *    {name: "Play on Steam", url: "https://store.steampowered.com/app/2593070/Zeitghast/"}
 *  ],
 *  image: "zeitghast_release.jpg",
 *  featured: false
 * 
 * @author Chace Nielson
 * @created 2024-07-10
 * @updated 2024-07-12
 */

/**
 * An array of news items.
 * @type {NewsItem[]}
 */
export const newsItems = [
  {
    title: 'Scale the Depths Wins',
    description: `We are thrilled to announce that "Scale the Depths"—our submission for the GMTK 2024 Game Jam—was selected as one of the winning entries! `,
    image: 'gameJamWin.png',
    blurHash: 'L9Du_NZN00*JL1EfQ--B00Xm?HVY',
    category: 'Game Jam Highlights',
    datePosted: 'Sep 25th, 2024',
    externalLinks: [
      { name: 'Play on Itch.io', url: 'https://itch.io/jam/gmtk-2024/rate/2912112' },
      { name: 'The Game Jam Winners', url: 'https://www.youtube.com/watch?v=gqCAeFjB8Uo' }, 
      { name: 'Our Dev Log', url: 'https://www.youtube.com/watch?v=4DYUQ1_EWiY' }, 
    ],
    featured: true
  },
  {
    title: 'Scale The Depths',
    description: "We are excited to announce the release of 'Scale The Depths' for the GMTK 2024 game jam.",
    image: 'scaleTheDepthsNewsArt.jpg',
    blurHash: 'YaJuWDA0SdTLkXnhkDWXuPIUwbt8kXkCofozbuRPtSozNIWXWBWBKQNHRjo~f5t7niae',
    category: 'Release',
    datePosted: 'Aug 20th, 2024',
    externalLinks: [
      { name: 'Play on Itch.io', url: 'https://itch.io/jam/gmtk-2024/rate/2912112' },
      { name: 'Learn More', url: '/games/scalethedepths' }, // internal link within react app
    ],
    featured: true
  },
  {
    title: 'Zeitghast',
    description: 'We are pleased to announce the release of Zeitghast, a new game that will take you on an adventure through prehistoric time.',
    image: 'zeitghastRelease.png',
    blurHash: 'q8E:x+2~*q4m4TMcKlreI88wrVQ,?]Tbn9ks3[zNIjv..7x@r#SvX-Q^yWN|ggRhQ:rrk;%4Z}HrtQX-M}NHKHjJxvnRnNf#sFSd',
    category: 'Release',
    datePosted: 'Dec 15th, 2023',
    externalLinks: [
      { name: 'Play on Steam', url: 'https://store.steampowered.com/app/2593070/Zeitghast/' },
      { name: 'Learn More', url: '/games/zeitghast' }, // internal link within react app
    ],
    featured: false
  },
  {
    title: 'Glass Gecko Games Social Media',
    description: 'Check out our Glass Gecko Games social media accounts to keep up to date on our latest development information and releases.',
    image: 'socialMediaAnnouncement.png',
    blurHash: 'qbLN0rs+PXIp?GWVxZxtpIxv-7WBIXjXNHRko}W@V[aeR*s*offP%0WBIpWBocxWt7Rm%KRjR-xYxVflM}fl%1RkNLxZjYWYR+fk',
    category: 'Announcement',
    datePosted: 'July 17th, 2024',
    externalLinks: [
      { name: 'YouTube', url: 'https://www.youtube.com/@GlassGeckoGames' },
      { name: 'Instagram', url: 'https://www.instagram.com/glassgeckogames/' },
      { name: 'TikTok', url: 'https://www.tiktok.com/@glassgeckogames' },
      { name: 'LinkedIn', url: 'https://www.linkedin.com/company/glass-gecko-games/' },
    ],
    featured: false
  }, 
];