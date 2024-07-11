import React from 'react';
import { title, description } from '../../data/homePageData';

function IntroPannel() {
  return (
    <div className="relative w-full h-72 md:h-[600px] overflow-hidden">
      <video className="w-full h-full object-cover" src={process.env.PUBLIC_URL + '/gameMedia/introVideo.mp4'} autoPlay loop muted />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 bg-black bg-opacity-20">
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">{title}</h1>
        <p className="text-white text-lg md:text-xl max-w-2xl">
          {description}
        </p>
      </div>
    </div>
  );
}

export default IntroPannel;
