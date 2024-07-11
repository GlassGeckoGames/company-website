/**
 * @file About.js
 * @module About
 * @desc Page component that displays information about the team.
 * This includes a grid of team member cards and a description section.
 * 
 * @component About
 * 
 * @requires react
 * @requires ../components/TeamMemberCard
 * @requires ../data/aboutData
 * 
 * @see {@link https://reactjs.org/docs/getting-started.html|React Documentation}
 * 
 * @author Chace Nielson
 * @created 2024-07-10
 * @updated 2024-07-10
 */

import React from 'react';
import TeamMemberCard from '../components/TeamMemberCard';
import { teamMembers, aboutTitle, aboutDescription } from '../data/aboutData';

function About() {
  return (
    <div className="mx-auto p-4">
      <div className="grid lg:grid-cols-4 gap-4">
        {teamMembers.slice(0, 5).map((member, index) => (
          <TeamMemberCard
            key={index}
            name={member.name}
            role={member.role}
            image={member.image}
            description={member.description}
          />
        ))}

        {/* Split the list and add the description in the middle */}
        <div className="col-span-2 bg-primary text-black p-4 h-full text-center order-first lg:order-none">
          <h2 className="text-4xl font-bold mb-2 text-secondary">{aboutTitle}</h2>
          <p>{aboutDescription}</p>
        </div>

        {teamMembers.slice(5).map((member, index) => (
          <TeamMemberCard
            key={index + 5} // Ensure unique keys
            name={member.name}
            role={member.role}
            image={member.image}
            description={member.description}
          />
        ))}
      </div>
    </div>
  );
}

export default About;
