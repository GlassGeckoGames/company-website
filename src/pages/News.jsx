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
 * 
 * @see {@link https://reactjs.org/docs/getting-started.html|React Documentation}
 * 
 * @author Chace Nielson
 * @created 2024-07-10
 * @updated 2024-07-10
 */

import React from 'react';

// not complete yet
function News() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-secondary">News</h1>
      <p className="mt-4">Stay updated with the latest news and updates.</p>
    </div>
  );
}

export default News;
