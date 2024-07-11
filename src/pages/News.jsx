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
 * @updated 2024-07-11
 */
import React from 'react';
import { newsItems } from '../data/newsItems';
import NewsCard from '../components/NewsCard';

function News() {

  return (
    <div className="container mx-auto p-4 h-full">
      <h1 className="text-3xl font-bold text-secondary mb-4">Latest Updates</h1>

      {/* Headline news item */}
      <div>
        <NewsCard
          key={-1}
          news={newsItems[0]}
          isHeadline={true}
        />
      </div>

      {/* Separator line */}
      <div className='h-2 bg-secondary my-4 rounded-lg'></div>

      {/* List of other news items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {newsItems.slice(1).map((news, index) => (
          <NewsCard
            key={index}
            news={news}
            isHeadline={false}
          />
        ))}
      </div>
    </div>
  );
}

export default News;
