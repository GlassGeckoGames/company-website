/**
 * @file TeamMemberCard.jsx
 * @module TeamMemberCard
 * @desc React component that represents a card displaying information about a team member.
 * It has a flip animation that reveals the description on the back of the card.
 * Renders the details and information about a team member.
 * 
 * @component TeamMemberCard
 * 
 * @requires react
 * @requires ../styles/TeamMemberCard.css
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
 * @updated 2024-07-14
 */
import React from 'react';
import '../../styles/TeamMemberCard.css'; // Import the CSS file for 3D flip animation
import ImageComponent from '../ImageComponent';

function TeamMemberCard({ name, role, image, description, link, blurHash }) {
  // Set the default image path
  const defaultImage = process.env.PUBLIC_URL + '/teamPhotos/default.png';

  // Handler to set default image if the provided image doesn't exist
  const handleImageError = (e) => {
    e.target.src = defaultImage;
  };

  return (
    <div className="flip-card w-full h-full">
      <div className="flip-card-inner relative w-full pb-full">
        <div className="flip-card-front absolute inset-0 overflow-hidden">
          <ImageComponent 
            className="absolute inset-0 w-full h-full object-cover" 
            src={process.env.PUBLIC_URL + '/teamPhotos/' + image} 
            alt={name} 
            onError={handleImageError}
            blurHash={blurHash}
          />
          <div className="absolute inset-0 bg-black bg-opacity-10 flex flex-col justify-center items-center">
            <div className='hidden-visibility h-10'> </div>
            <div className="text-white font-bold text-xl xl:text-2xl text-outline-large text-center">{name}</div>
            <div className="text-white text-base xl:text-lg text-outline-small">{role}</div>
          </div>
        </div>
        <div className="flip-card-back absolute inset-0 flex flex-col justify-center items-center bg-secondary text-black p-1 md:p-4 overflow-auto transform rotate-y-180 border-4 border-primary">
          <div className="text-xs sm:text-sm md:text-lg lg:text-base xl:text-lg text-primary">
            {description[0] && <p className="py-1">{description[0]}</p>}
            {description[1] && <p >{description[1]}</p>}
            {link &&  <a href={link.url} className='text-accent hover:text-accent-dark' target="_blank" rel="noopener noreferrer">{link.description}</a>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamMemberCard;
