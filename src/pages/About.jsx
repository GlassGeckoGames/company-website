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
 * @requires ../components/ProfileCard
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
 * @updated 2024-07-19
 */

import React from 'react';
import ProfileCard from '../components/aboutPageComponents/ProfileCard';
import AboutPageText from '../components/aboutPageComponents/AboutPageText';
// page data
import { teamProfiles, aboutTitle, aboutDescription } from '../data/aboutPageData';

function About() {

  // the position of the page about text section - will depend on the number of team members
  const aboutTextPos = 5; 

  return(
    <div className="mx-auto container px-2">
      {/* section for small screen hidden at large scren */}
      <div className='lg:hidden'>
        <AboutPageText aboutTitle={aboutTitle} aboutDescription={aboutDescription} />
      </div>

      <div className='grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {teamProfiles.map((member, index) => (
          <>
            {index === aboutTextPos && ( // display the about text in the middle of the page depending on the abouTextPos
              <div className='hidden lg:inline col-span-2'>
                <AboutPageText aboutTitle={aboutTitle} aboutDescription={aboutDescription} />
              </div>            
            )}
            <ProfileCard
              key={index}
              person={member}
            />
          </>
        ))}
      </div>
    </div>
  )
}

export default About;
