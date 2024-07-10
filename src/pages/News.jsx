/**
 * @file News.jsx is a React component that displays the latest news.
 * Will render the news page with the latest news and updates.
 *
 * @component
 * @returns {JSX.Element} The rendered News component
 */
import React from 'react';

function News() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">News</h1>
      <p className="mt-4">Stay updated with the latest news and updates.</p>
    </div>
  );
}

export default News;
