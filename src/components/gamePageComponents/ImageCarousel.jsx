/**
 * @file ImageCarousel.jsx
 * @module ImageCarousel
 * @desc Component to display a carousel of game images using react-gallery-carousel.
 * 
 * @component ImageCarousel
 * 
 * @requires react
 * @requires react-gallery-carousel
 * @requires ../../styles/ImageCarousel.css
 * 
 * @param {Array<Object>} images - Array of image file names to display in the carousel.
 * @param {string} id - The unique identifier for the game.
 * @param {string} title - The title of the game for which images are shown.
 * 
 * @returns {JSX.Element} The component displaying a carousel of game images.
 * 
 * @example
 * // Example usage of ImageCarousel component
 * const images = ['image1.png', 'image2.png', 'image3.png'];
 * const id = 'game123';
 * const title = 'Game Title';
 * 
 * <ImageCarousel images={images} id={id} title={title} />
 * 
 * @see {@link https://www.npmjs.com/package/react-gallery-carousel|react-gallery-carousel}
 * @see {@link https://github.com/yifaneye/react-gallery-carousel|GitHub Repository}
 * 
 * @created 2024-07-12
 * @updated 2024-07-12
 */

import React from 'react';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
// import styles
import '../../styles/ImageCarousel.css';

function ImageCarousel({ images, id, title }) {

  // set up image objects for carousel component/libary
  const carouselImages = images.map((image) => ({
    src: process.env.PUBLIC_URL + "/gameMedia/" + id + "/" + image,
    alt: `${title} screenshot`,
  }));

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-6">
      {carouselImages.length > 0 ? (
        <Carousel
          images={carouselImages}
          isAutoPlaying={true}
          hasThumbnails={true}
          hasIndexBoard={false}
          className="carousel-container"
          objectFit="contain"
        />
      ) : (
        null
      )}
    </div>
  );
}

export default ImageCarousel;
