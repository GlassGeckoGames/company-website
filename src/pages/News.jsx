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
 * @updated 2024-07-10
 */

import React from 'react';
import { newsItems } from '../data/newsItems';

function News() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-secondary">Our Latest Updates</h1>
      <ul className="mt-8 space-y-4">
        {newsItems.map((news, index) => (
          <li key={index} className="border-b pb-4 flex flex-col md:flex-row md:items-center">
            {news.image && (
              <div className="md:w-1/3 mt-4 md:mt-0">
                <img src={process.env.PUBLIC_URL + `/${news.image}`} alt={news.title} className="w-full h-auto" />
              </div>
            )}
            <div className="md:flex-1 md:ml-4">
              <h2 className="text-2xl font-bold text-primary">{news.title}</h2>
              <p className="text-sm text-gray-500">{news.date} - {news.category}</p>
              <p className="mt-2">{news.description}</p>
              {news.link && (
                <a
                  href={news.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent-dark mt-2 inline-block"
                >
                  {news.link.name}
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default News;
