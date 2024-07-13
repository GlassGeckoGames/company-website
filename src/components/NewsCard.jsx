
/**
 * @file NewsCard.jsx
 * @module NewsCard
 * @desc React component that displays an individual news card.
 * Will render a news item with its title, description, image, category, date, and external links.
 * Includes a star icon if the news item is featured.
 * 
 * @component NewsCard
 * 
 * @requires react
 * @requires react-icons/fa
 * 
 * @see {@link https://reactjs.org/docs/getting-started.html|React Documentation}
 * @see {@link https://react-icons.github.io/react-icons|React Icons Documentation}
 * 
 * @param {Object} props - The properties object.
 * @param {Object} props.news - The news item to display.
 * @param {boolean} props.isHeadline - Flag to indicate if the news item is a headline.
 * 
 * @example
 * // Example usage of NewsCard
 * import React from 'react';
 * import NewsCard from './NewsCard';
 * import { newsItems } from '../data/newsItems';
 * 
 * function App() {
 *   return (
 *     <div>
 *       {newsItems.map((news, index) => (
 *         <NewsCard key={index} news={news} isHeadline={index === 0} />
 *       ))}
 *     </div>
 *   );
 * }
 * 
 * export default App;
 * 
 * @author Chace Nielson
 * @created 2024-07-11
 * @updated 2024-07-12
 */
import React from 'react';
import { FaStar } from 'react-icons/fa';

function NewsCard({ news, isHeadline }) {
  return (
    <div className={`vis-fade-in  relative border rounded-lg shadow-lg overflow-hidden ${isHeadline ? 'col-span-1 md:col-span-2 lg:col-span-3' : ''}`}>
      {news.featured && (
        <div className="absolute top-2 right-2 text-yellow-500">
          <FaStar color='#FFD700' size={30}/>
        </div>
      )}
      <img src={"newsImages/"+news.image} alt={news.title} className={`w-full ${isHeadline ? 'h-104' : 'h-44'} object-cover`} />
      <div className="p-4">
        <h2 className={`text-xl font-bold ${isHeadline ? 'text-2xl' : ''}`}>
          {news.category ? <span className="text-secondary">{news.category}:</span> : ''}
          {news.title}
        </h2>
        <p className="text-sm">{news.description}</p>
        <p className="text-sm">Date: {news.datePosted}</p>
        {news.externalLinks && (
          <div className="mt-2">
            {news.externalLinks.map((link, linkIndex) => (
              <a key={linkIndex} href={link.url} className="block text-sm text-accent hover:text-accent-dark hover:underline">
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsCard;
