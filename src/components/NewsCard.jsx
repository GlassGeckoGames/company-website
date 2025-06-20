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
 * @updated 2024-07-31
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
    visible: { opacity: 1, x: 0, transition: { duration: 1 } }
  };

  // Set hasAnimated to true when the element comes into view
  if (inView && !hasAnimated) {
    setHasAnimated(true);
  }

  return (
    // Apply the motion.div to animate the card
    <motion.div
      ref={ref}
      className={`py-6 px-4 md:px-10 faint-bg relative rounded-lg shadow-lg overflow-hidden h-full  ${
        isHeadline ? '' : 'lg:flex lg:items-center'
      }`}
      initial="hidden"
      animate={animate && (inView || hasAnimated) ? 'visible' : 'hidden'}
      variants={animate ? slideInLeft : {}}
    >
      {news.featured && (
        <div className="absolute top-2 right-2 text-yellow-500">
          <FaStar color="#FFD700" size={30} />
        </div>
      )}
      <div className={`w-full ${isHeadline ? 'h-52 md:h-96' : 'h-full lg:h-auto lg:w-2/5'}`}>
        <ImageComponent
          className={`w-full h-full object-cover rounded-xl  ${!isHeadline && "max-h-32"}`}
          src={`newsImages/${news.image}`}
          alt={news.title}
          blurHash={news.blurHash}
        />
      </div>
      <div className={`text-shadow flex flex-col justify-center self-start ${isHeadline ? 'py-4' : 'py-4 lg:p-0 lg:ml-4 lg:w-5/6'}`}>
        <div >
          <div className={`titleFont flex flex-col sm:flex-row justify-between text-xl sm:text-2xl md:text-4xl font-bold text-primary `}>
            <h2>
              {news.category ? <span className="text-accent">{news.category}:</span> : ''}
              {" " + news.title}
            </h2>
            <h2 className=" text-accent-light whitespace-nowrap">{news.datePosted}</h2>
          </div>
          <p className="text-sm md:text-lg text-primary py-1">{news.description}</p>
        </div>
        {news.externalLinks && (
          <div className="mt-2 w-fit flex flex-wrap gap-2">
            {news.externalLinks.map((link, linkIndex) => (
              <div key={linkIndex} className="flex items-center">
                <a
                  href={link.url}
                  className="block text-sm md:text-base text-accent-light hover:text-accent-dark hover:underline"
                >
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
}

export default NewsCard;
