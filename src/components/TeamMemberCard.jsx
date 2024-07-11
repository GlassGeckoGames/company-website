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
 * @requires ../styles/teamMemberCard.css
 * 
 * @see {@link https://reactjs.org/docs/getting-started.html|React Documentation}
 * 
 * @param {string} name - The name of the team member.
 * @param {string} role - The role of the team member.
 * @param {string} image - The image of the team member.
 * @param {string} description - The description of the team member.
 * 
 * @returns {JSX.Element} The rendered TeamMemberCard component.
 * 
 * @author Chace Nielson
 * @created 2024-07-10
 * @updated 2024-07-10
 */

import React from 'react';
import '../styles/teamMemberCard.css'; // Import the CSS file for 3D flip animation

function TeamMemberCard({ name, role, image, description }) {
  return (
    <div className="flip-card w-full h-full">
      <div className="flip-card-inner relative w-full pb-full">
        <div className="flip-card-front absolute inset-0 rounded-lg overflow-hidden">
          <img className="absolute inset-0 w-full h-full object-cover" src={process.env.PUBLIC_URL + '/team_photos/' + image} alt={name} />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center">
            <div className="text-white font-bold text-xl">{name}</div>
            <div className="text-white text-base">{role}</div>
          </div>
        </div>
        <div className="flip-card-back absolute inset-0 flex flex-col justify-center items-center bg-secondary text-black rounded-lg p-4 transform rotate-y-180">
          <p className="text-xs sm:text-sm md:text-lg lg:text-base xl:text-lg text-primary">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TeamMemberCard;
