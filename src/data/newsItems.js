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
 * @author Chace Nielson
 * @created 2024-07-10
 * @updated 2024-07-11
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
    tags: ["release", "new game", "Zeitghast"],
    category: "Announcement",
    image: "newsImages/monstorMashAnouncment.png",
    featured: true
  },
  {
    title: "Patch 1.1 for Zeitghast",
    description: "We've released Patch 1.1 for Zeitghast, featuring new levels, bug fixes, and performance improvements.",
    date: "2024-07-09",
    category: "Update",
    externalLinks: [
      {name: "Official Announcement", url: "https://glassgeckogames.com/official-announcement"},
      {name: "Play on Steam", url: "https://store.steampowered.com/app/2593070/Zeitghast/"}
    ],
    image: "newsImages/zeitghast_release.jpg",
    featured: false
  },
  {
    title: "Zeitghast Released on Steam",
    description: "Our highly anticipated game Zeitghast is now available on Steam. Explore the epic adventure through time.",
    date: "2024-07-10",
    category: "Game Release",
    image: "newsImages/zeitghast_release.jpg",
  },
  {
    title: "Glass Gecko Games at GDC 2024",
    description: "Join us at the Game Developers Conference 2024 where we will showcase our latest projects and upcoming games.",
    date: "2024-07-08",
    category: "Event",
    image: "newsImages/gdc2024.jpg",
    tags: ["event", "GDC", "conference"],
    featured: false
  },
  {
    title: "Developer Q&A Session",
    description: "Our lead developers will be hosting a Q&A session next week. Get your questions ready and join us live!",
    date: "2024-07-05",
    category: "Community",
    externalLinks: [
      {name: "Join the Q&A", url: "https://glassgeckogames.com/qa-session"}
    ],
    image: "newsImages/qa_session.jpg",
    tags: ["community", "Q&A", "live"],
    featured: true
  },
];
