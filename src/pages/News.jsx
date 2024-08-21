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
 * @updated 2024-07-31
 */
import React from 'react';
import { newsItems } from '../data/newsItems';
import NewsCard from '../components/NewsCard';

function News() {

  return (
    <div className=" container mx-auto p-4 h-full ">

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
      <div className='h-2 faint-bg my-4 rounded-lg'></div>

      {/* List of other news items */}
      <div className=" space-y-4">
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
