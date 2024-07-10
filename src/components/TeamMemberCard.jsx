// src/Components/TeamMemberCard.jsx
import React from 'react';
import '../cssStyles/TeamMemberCard.css'; // Import the CSS file for styling


function TeamMemberCard({ name, role, image, description }) {
  
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front relative">
          <img className="absolute inset-0 w-full h-full object-cover" src={process.env.PUBLIC_URL + '/team_photos/' + image} alt={name} />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center">
            <div className="text-white font-bold text-xl">{name}</div>
            <div className="text-white text-base">{role}</div>
          </div>
        </div>
        <div className="flip-card-back flex flex-col justify-center items-center bg-secondary text-black">
          <div className="p-4 bg-">
            <p className="text-base">{description} </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamMemberCard;
