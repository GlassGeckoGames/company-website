import React, { useState, useEffect } from 'react';
import '../../styles/ProfileCard.css'; // Import the CSS file for 3D flip animation
import ImageComponent from '../ImageComponent';
import BackCardText from './BackCardText';

function ProfileCard({ person }) {
  // Set the default image path
  const defaultImage = process.env.PUBLIC_URL + '/teamPhotos/default.png';

  const { name, role, image, description, blurHash, link } = person;

  // State to manage the flip on small screens
  const [isFlipped, setIsFlipped] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 640);

  // Handler to set default image if the provided image doesn't exist
  const handleImageError = (e) => {
    e.target.src = defaultImage;
  };

  // Toggle flip state on click
  const handleFlip = () => {
    if (isSmallScreen) {
      setIsFlipped(!isFlipped);
    }
  };

  // Update isSmallScreen state on resize
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      className={`flip-card w-full h-full ${isSmallScreen ? 'flip-card-clickable' : ''} ${isFlipped ? 'flipped' : ''}`}
      onClick={handleFlip}
    >
      <div className="flip-card-inner relative w-full pb-full">
        <div className="flip-card-front absolute inset-0 overflow-hidden rounded-xl">
          <ImageComponent 
            className="absolute inset-0 w-full h-full object-cover" 
            src={process.env.PUBLIC_URL + '/teamPhotos/' + image} 
            alt={name} 
            onError={handleImageError}
            blurHash={blurHash}
          />
          <div className="absolute inset-0 bg-black bg-opacity-45 flex flex-col justify-center items-center">
            <div className="h-10"></div>
            <div className="text-white font-bold text-xl xl:text-2xl text-outline-large text-center text-shadow">{name}</div>
            <div className="text-white text-base xl:text-lg text-outline-small text-shadow text-center">{role}</div>
          </div>
        </div>
        <BackCardText description={description} link={link} />
      </div>
    </div>
  );
}

export default ProfileCard;
