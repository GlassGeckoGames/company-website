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
 * @requires framer-motion
 * @requires ../ImageComponent
 * 
 * @see {@link https://reactjs.org/docs/getting-started.html|React Documentation}
 * @see {@link https://react-icons.github.io/react-icons|React Icons Documentation}
 * @see {@link https://www.framer.com/motion/|Framer Motion Documentation}
 * 
 * @param {Object} props - The properties object.
 * @param {Object} props.news - The news item to display.
 * @param {boolean} props.isHeadline - Flag to indicate if the news item is a headline.
 * @param {boolean} props.animate - Flag to indicate if the card should animate on view. - set to true by default. but set up for easy changeing
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
 *         <NewsCard key={index} news={news} isHeadline={index === 0} animate={true} />
 *       ))}
 *     </div>
 *   );
 * }
 * 
 * export default App;
 * 
 * @author Chace Nielson
 * @created 2024-07-11
 * @updated 2024-07-19
 */
import React, { useRef, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { motion, useInView } from 'framer-motion';
import ImageComponent from './ImageComponent';

function NewsCard({ news, isHeadline, animate = false }) {
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const inView = useInView(ref, { triggerOnce: true });

  // Animation variants for the slide-in effect
  const slideInLeft = {
    hidden: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  // Set hasAnimated to true when the element comes into view
  if (inView && !hasAnimated) {
    setHasAnimated(true);
  }

  return (
    // Apply the motion.div to animate the card
    <motion.div
      ref={ref}
      className={`relative border rounded-lg shadow-lg overflow-hidden ${isHeadline ? 'col-span-1 md:col-span-2 lg:col-span-3' : ''}`}
      initial="hidden"
      animate={animate && (inView || hasAnimated) ? 'visible' : 'hidden'}
      variants={animate ? slideInLeft : {}}
    >
      {news.featured && (
        <div className="absolute top-2 right-2 text-yellow-500">
          <FaStar color='#FFD700' size={30}/>
        </div>
      )}
      <div className={`w-full ${isHeadline ? 'h-104' : 'h-44'}`}>
        <ImageComponent
          className="w-full h-full object-cover"
          src={`newsImages/${news.image}`} 
          alt={news.title} 
          blurHash={news.blurHash}
        />
      </div>
      <div className="p-4 bg-secondary">
        <h2 className={`text-xl font-bold text-primary  ${isHeadline ? 'text-2xl' : ''}`}>
          {news.category ? <span className="text-accent">{news.category}:</span> : ''}
          {" " + news.title}
        </h2>
        <p className="text-sm text-primary py-1">{news.description}</p>
        <p className="text-sm text-primary">{news.datePosted}</p>
        {news.externalLinks && (
          <div className="mt-2 w-fit flex flex-wrap gap-2">
            {news.externalLinks.map((link, linkIndex) => (
              <div key={linkIndex} className="flex items-center">
                <a href={link.url} className="block text-sm text-accent hover:text-accent-dark hover:underline">
                  {link.name}
                </a>
                {linkIndex < news.externalLinks.length - 1 && (
                  <div className="h-4 border-l-2 border-primary mx-1 ml-2"></div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default NewsCard;
