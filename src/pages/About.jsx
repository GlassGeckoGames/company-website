// src/pages/About.js
import React from 'react';
import TeamMemberCard from '../components/TeamMemberCard';
import { teamMembers, aboutTitle, aboutDescription } from '../data/aboutData'

function About() {
  return (
    <div className="">
      <div className="grid grid-cols-4 gap-4 m-4 ">
      {teamMembers.map((member, index) => (
          <>
            {index === 5 ? (
              <div className="col-span-2 bg-primary text-black p-4 h-full">
                <h2 className="text-4xl font-bold mb-2 text-center">{aboutTitle}</h2>
                <p className="text-center">{aboutDescription}</p>
              </div>
            ) : ( null )}

            <TeamMemberCard
              name={member.name}
              role={member.role}
              image={member.image}
              description={member.description}
            />
          </>
        ))}
      </div>
    </div>
  );
}

export default About;
