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
 * @property {string} [link] - An optional link for more details.
 * @property {string} [image] - An optional image associated with the news item.
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
 * @author Chace Nielson
 * @created 2024-07-10
 * @updated 2024-07-10
 */

/**
 * An array of news items.
 * @type {NewsItem[]}
 */
export const newsItems = [
  {
    title: "Monster Mash Coming Soon",
    description: "Get ready for some monstrous fun with Monster Mash, our upcoming game set to release next month.",
    date: "2024-07-10",
    category: "Announcement",
    image: "newsImages/monstorMashAnouncment.png",
    author: "Glass Gecko Games",
  },
  {
    title: "Patch 1.1 for Zeitghast",
    description: "We've released Patch 1.1 for Zeitghast, featuring new levels, bug fixes, and performance improvements.",
    date: "2024-07-09",
    category: "Update",
    link: {name: "Patch Notes", url: "https://glassgeckogames.com/zeitghast-patch-notes"},

    image: "newsImages/zeitghast_release.jpg",
    author: "Glass Gecko Games",
  },
  {
    title: "Zeitghast Released on Steam",
    description: "Our highly anticipated game Zeitghast is now available on Steam. Explore the epic adventure through time.",
    date: "2024-07-10",
    category: "Release",
    link: {name: "Play on Steam", url: "https://store.steampowered.com/app/2593070/Zeitghast/"},
    image: "newsImages/zeitghast_release.jpg",
    author: "Glass Gecko Games",
  },
];
