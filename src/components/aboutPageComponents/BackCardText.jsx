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
 * @updated 2024-07-14
 */
import React from 'react';

function BackCardText({ description, link }) {
  return (
    <div className="flip-card-back absolute inset-0 flex flex-col justify-center items-center bg-secondary text-black p-4 md:p-6 overflow-auto transform rotate-y-180 border-2 border-primary rounded-2xl shadow-lg">
      <div className="text-xs sm:text-sm md:text-lg lg:text-base xl:text-lg text-primary space-y-2">
        {description[0] && (
          <p className="py-1 text-center font-semibold text-primary-light">{description[0]}</p>
        )}
        {description[1] && (
          <p className="py-1 text-center text-primary-dark">{description[1]}</p>
        )}
        {link && (
          <div className='text-center'>
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
