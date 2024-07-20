/**
 * @file ColorBoxes.jsx
 * @module ColorBoxes
 * @desc Renders a list of the priamry secondary and accent colors used in the project as well as the dark versions of all colors.
 * 

 * 
 * @component Contact
 * 
 * @param {Object} props - The component props.
 * 
 * @requires react
 * 
 * @see {@link https://reactjs.org/docs/getting-started.html|React Documentation}
 * 
 * @returns {JSX.Element} The contact form component.
 * 
 * @example
 * // Example usage of Contact component
 * <ColorBoxes />
 * 
 * @author Chace Nielson
 * @created 2024-07-19
 * @updated 2024-07-19
 */
import React from 'react';

const ColorBoxes = () => {
  const colors = [
    { name: 'Primary', className: 'bg-primary hover:bg-primary-dark' },
    { name: 'Primary Dark', className: 'bg-primary-dark hover:bg-primary' },
    { name: 'Secondary', className: 'bg-secondary hover:bg-secondary-dark' },
    { name: 'Secondary Dark', className: 'bg-secondary-dark hover:bg-secondary' },
    { name: 'Accent', className: 'bg-accent hover:bg-accent-dark' },
    { name: 'Accent Dark', className: 'bg-accent-dark hover:bg-accent' },
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Color Palette</h2>
      <div className="grid grid-cols-2 gap-4">
        {colors.map((color, index) => (
          <div
            key={index}
            className={`p-4 ${color.className} text-center transition duration-300 ease-in-out transform`}
          >
            <p className={color.className.includes('bg-secondary') ? 'text-black' : 'text-white'}>
              {color.name}
            </p>
            <p className={`text-sm ${color.className.includes('bg-secondary') ? 'text-black' : 'text-white'}`}>
              {color.className.split(' ')[0]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ColorBoxes;
