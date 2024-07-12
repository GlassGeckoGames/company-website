/**
 * @file newsData.js
 * @module newsData
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
    title: 'Sample News 1',
    description: 'This is a sample news description 1.',
    image: 'dec15_zeitghast_release.jpg',
    category: 'News',
    datePosted: 'July 9th, 2024',
    externalLinks: [
      { name: 'Play on Steam', url: 'https://example.com' },
      { name: 'Link 2', url: 'https://example.com' }
    ],
    featured: true
  },
  {
    title: 'Sample News 2',
    description: 'This is a sample news description 2.',
    image: 'jul12_monstorMashAnouncment.png',
    category: 'Announcement',
    datePosted: 'August 15th, 2024',
    externalLinks: [
      { name: 'Link 1', url: 'https://example.com' }
    ],
    featured: false
  },
  {
    title: 'Sample News 3',
    description: 'This is a sample news description 3.',
    image: 'sample3.jpg',
    category: 'Event',
    datePosted: 'September 21st, 2024',
    externalLinks: [
      { name: 'Link 1', url: 'https://example.com' },
      { name: 'Link 2', url: 'https://example.com' }
    ],
    featured: false
  },
  {
    title: 'Sample News 4',
    description: 'This is a sample news description 4.',
    image: 'sample4.jpg',
    category: 'Update',
    datePosted: 'October 30th, 2024',
    externalLinks: [
      { name: 'Link 1', url: 'https://example.com' }
    ],
    featured: true
  }
];