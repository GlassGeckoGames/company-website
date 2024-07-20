/**
 * @file BackCardText.jsx
 * @module BackCardText
 * @desc React component that represents the back text of the flip card displaying information about a team member.
 * 
 * @component BackCardText
 * 
 * @param {Object} props - The properties object.
 * @param {Array<string>} props.description - The description of the team member split into paragraphs.
 * @param {Object} props.link - The link object containing the description and URL.
 * 
 * @returns {JSX.Element} The rendered BackCardText component.
 * 
 * @created 2024-07-14
 * @updated 2024-07-19
 */
import React from 'react';

function BackCardText({ description, link }) {
  return (
    <div className="flip-card-back absolute inset-0  bg-secondary text-black overflow-auto transform rotate-y-180 border-2 border-primary rounded-lg shadow-lg">
      <div className="text-lg sm:text-base md:text-sm xl:text-base text-primary space-y-2 p-6 md:p-4 lg:p-2 ">
        {description[0] && (
          <p className="pt-0.5 text-left font-semibold text-primary-light">{description[0]}</p>
        )}
        {description[1] && (
          <p className="py-0.5 text-left text-primary-dark">{description[1]}</p>
        )}
        {link && (
          <div className='text-left'>
            <a
              href={link.url}
              className="text-accent hover:text-accent-dark hover:underline"
              target="_blank"
              rel="noopener noreferrer"
              >
              {link.description}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default BackCardText;
