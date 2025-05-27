/**
 * @file News.jsx
 * @module News
 * @desc React component that displays the latest news.
 * Will render the news page with the latest news and updates.
 * Just displays a list of the news from a list object.
 * 
 * @component News
 * 
 * @requires react
 * @requires ../data/newsItems
 * 
 * @see {@link https://reactjs.org/docs/getting-started.html|React Documentation}
 * 
 * @author Chace Nielson
 * @created 2024-07-10
 * @updated 2025-05-27
 */

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { newsItems } from '../data/newsItems';
import NewsCard from '../components/NewsCard';

function News() {
  return (
    <div className="container mx-auto p-4 h-full">
      
      {/* Headline news item */}
      <div>
        <NewsCard
          key={-1}
          news={newsItems[0]}
          isHeadline={true}
          animate={true}
        />
      </div>

      {/* Separator line */}
      <div className="h-2 faint-bg my-4 rounded-lg"></div>

      {/* Animated list of other news items */}
      <div className="space-y-2">
        {newsItems.slice(1).map((news, index) => (
          <AnimatedNewSlot key={index} news={news} />
        ))}
      </div>
    </div>
  );
}

export default News;

/**
 * @component AnimatedNewSlot
 * @desc Handles scroll-based entry animation for individual news cards.
 *        Fades in and rises into position when scrolled into view.
 * 
 * @param {Object} props
 * @param {Object} props.news - News item to render
 */
function AnimatedNewSlot({ news }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 100%', 'start 80%'] // trigger animation as item approaches center
  });

  const y = useTransform(scrollYProgress, [0, 1], ['40px', '0px']);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity }}
      className="will-change-transform"
    >
      <NewsCard news={news} isHeadline={false} />
    </motion.div>
  );
}
