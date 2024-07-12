/**
 * @file About.jsx
 * @module About
 * @desc React component that displays the about page.
 * Renders information about the team and a description with a link to contact us.
 * 
 * @component About
 * 
 * @requires react
 * @requires react-router-dom
 * @requires ../components/TeamMemberCard
 * @requires ../components/AboutPageText
 * @requires ../data/aboutData
 * 
 * @see {@link https://reactjs.org/docs/getting-started.html|React Documentation}
 * @see {@link https://reactrouter.com/|React Router Documentation}
 * 
 * @returns {JSX.Element} The rendered About component.
 * 
 * @author Chace Nielson
 * @created 2024-07-10
 * @updated 2024-07-12
 */

import React from 'react';
import TeamMemberCard from '../components/aboutPageComponents/TeamMemberCard';
import AboutPageText from '../components/aboutPageComponents/AboutPageText';
// page data
import { teamMembers, aboutTitle, aboutDescription } from '../data/aboutPageData';

function About() {

  const positionOfTextBox = 5; // determines the position of the text box in the grid formation in the large view 
  // usuallt this will be 1 or 5 to stay in the center

  return (
    <div className="mx-auto">
      <div className="grid lg:grid-cols-4">
        {teamMembers.slice(0, positionOfTextBox).map((member, index) => (
          <TeamMemberCard
            key={index}
            name={member.name}
            role={member.role}
            image={member.image}
            description={member.description}
          />
        ))}

        <AboutPageText aboutTitle={aboutTitle} aboutDescription={aboutDescription} />

        {teamMembers.slice(positionOfTextBox).map((member, index) => (
          <TeamMemberCard
            key={index + positionOfTextBox} // ensure unique keys
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
