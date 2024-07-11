/**
 * @file About.jsx
 * @module About
 * @desc React component that displays the about page.
 * Renders information about the team and a description with a link to contact us.
 * 
 * @component About
 * 
 * @requires react
 * @requires ../components/TeamMemberCard
 * @requires ../data/aboutData
 * @requires react-router-dom
 * 
 * @see {@link https://reactjs.org/docs/getting-started.html|React Documentation}
 * @see {@link https://reactrouter.com/|React Router Documentation}
 * 
 * @author Chace Nielson
 * @created 2024-07-10
 * @updated 2024-07-10
 */

import React from 'react';
import { Link } from 'react-router-dom';
import TeamMemberCard from '../components/TeamMemberCard';
import { teamMembers, aboutTitle, aboutDescription } from '../data/aboutData';

function About() {
  return (
    <div className="mx-auto">
      <div className="grid lg:grid-cols-4 ">
        {teamMembers.slice(0, 5).map((member, index) => (
          <TeamMemberCard
            key={index}
            name={member.name}
            role={member.role}
            image={member.image}
            description={member.description}
          />
        ))}

        {/* Split the list and add the description in the middle  */}
        <div className="col-span-2 bg-primary text-black p-4 h-full text-center order-first lg:order-none">
          <h2 className="text-4xl font-bold mb-2 text-secondary">{aboutTitle}</h2>
          <p>{aboutDescription}</p>
          <Link
            to="/contact"
            className="button-base mt-4 inline-block"
          >
            <span className="button-content">Learn More by Contacting Us</span>
          </Link>
        </div>

        {teamMembers.slice(5).map((member, index) => (
          <TeamMemberCard
            key={index + 5} // ensure unique keys
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
