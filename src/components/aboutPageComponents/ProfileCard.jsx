/**
 * @file ProfileCard.jsx
 * @module ProfileCard
 * @desc React component that represents a card displaying information about a team member.
 * It has a flip animation that reveals the description on the back of the card.
 * Renders the details and information about a team member.
 * 
 * @component TeamMemberCard
 * 
 * @requires react
 * @requires ../styles/ProfileCard.css
 * @requires ../ImageComponent
 * 
 * @see {@link https://reactjs.org/docs/getting-started.html|React Documentation}
 * 
 * @param {string} name - The name of the team member.
 * @param {string} role - The role of the team member.
 * @param {string} image - The image of the team member.
 * @param {Array<string>} description - The description of the team member split into paragraphs. (max 3 paragraphs are used)
 * 
 * @returns {JSX.Element} The rendered TeamMemberCard component.
 * 
 * @author Chace Nielson
 * @created 2024-07-10
 * @updated 2024-07-19
 */
import React from 'react';
import '../../styles/ProfileCard.css'; // Import the CSS file for 3D flip animation
import ImageComponent from '../ImageComponent';
import BackCardText from './BackCardText';

function ProfileCard({ name, role, image, description, link, blurHash }) {
  // Set the default image path
  const defaultImage = process.env.PUBLIC_URL + '/teamPhotos/default.png';

  // Handler to set default image if the provided image doesn't exist
  const handleImageError = (e) => {
    e.target.src = defaultImage;
  };

  return (
    <div className="flip-card w-full h-full">
      <div className="flip-card-inner relative w-full pb-full">
        <div className="flip-card-front absolute inset-0 overflow-hidden rounded-xl">
          <ImageComponent 
            className="absolute inset-0 w-full h-full object-cover " 
            src={process.env.PUBLIC_URL + '/teamPhotos/' + image} 
            alt={name} 
            onError={handleImageError}
            blurHash={blurHash}
          />
          <div className="absolute inset-0 bg-black bg-opacity-45 flex flex-col justify-center items-center">
            <div className=' h-10'> </div>
            <div className="text-white font-bold text-xl xl:text-2xl text-outline-large text-center">{name}</div>
            <div className="text-white text-base xl:text-lg text-outline-small">{role}</div>
          </div>
        </div>
        <BackCardText description={description} link={link} />
      </div>
    </div>
  );
}

export default ProfileCard;
