/**
 * @file Button.jsx
 * @module Button
 * @desc Renders a customizable button component.
 * 
 * @component Button
 * 
 * @param {Object} props - The component props.
 * @param {string} [props.type='primary'] - The button type which determines the color (accent, secondary, primary).
 * @param {string} [props.as='button'] - The HTML element type (button, link, a).
 * @param {string} [props.buttonType='button'] - The HTML button type (button, submit, reset).
 * @param {function} [props.onClick] - The click event handler.
 * @param {function} [props.onClickFunc=null] - The additional click event handler.
 * @param {string} [props.to] - The URL for React Router Link (if `as` is 'link').
 * @param {string} [props.href] - The URL for anchor tags (if `as` is 'a').
 * @param {React.ReactNode} props.children - The content inside the button.
 * 
 * @requires react
 * @requires react-router-dom
 * 
 * @see {@link https://reactjs.org/docs/getting-started.html|React Documentation}
 * @see {@link https://reactrouter.com/|React Router Documentation}
 * 
 * @returns {JSX.Element} The customizable button component.
 * 
 * @example
 * // Example usage of Button component
 * <div className="App">
 *   <Button type="accent" onClick={() => alert('Accent Button Clicked')}>Accent Button</Button>
 *   <Button type="secondary" as="link" to="/about">Secondary Link</Button>
 *   <Button type="primary" as="a" href="https://example.com">Primary Anchor</Button>
 *   <Button type="primary" buttonType="submit">Submit Button</Button>
 * </div>
 * 
 * @created 2024-07-11
 * @updated 2024-07-11
 */

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Button.css';

/**
 * Renders a customizable button component.
 * 
 * @param {Object} props - The component props.
 * @param {string} [props.type='primary'] - The button type which determines the color (accent, secondary, primary).
 * @param {string} [props.as='button'] - The HTML element type (button, link, a).
 * @param {string} [props.buttonType='button'] - The HTML button type (button, submit, reset).
 * @param {function} [props.onClick] - The click event handler.
 * @param {function} [props.onClickFunc=null] - The additional click event handler.
 * @param {string} [props.to] - The URL for React Router Link (if `as` is 'link').
 * @param {string} [props.href] - The URL for anchor tags (if `as` is 'a').
 * @param {React.ReactNode} props.children - The content inside the button.
 * 
 * @returns {JSX.Element} The customizable button component.
 */
const Button = ({ onClickFunc = null, type = 'primary', as = 'button', buttonType = 'button', onClick, to, href, children }) => {
  const buttonClass = `button-base button-${type}`;

  /**
   * Handles the click event for the button.
   */
  const handleClick = () => {
    // chcek to see if this compoennt was giben a onClickFunc prop as an extra function to run 
    if (onClickFunc) { onClickFunc(); }

    // if the onClick prop is given, run the function for the main clicking functionality 
    if (onClick) { onClick(); }
  };

  // Render a React Router Link if 'as' is 'link'
  if (as === 'link') {
    return (
      <Link to={to} className={buttonClass} onClick={handleClick}>
        <span className="button-content">{children}</span>
      </Link>
    );
  }

  // Render an anchor tag if 'as' is 'a'
  if (as === 'a') {
    return (
      <a href={href} className={buttonClass} onClick={handleClick} target="_blank" rel="noopener noreferrer">
        <span className="button-content">{children}</span>
      </a>
    );
  }

  // Render a button by default
  return (
    <button type={buttonType} className={buttonClass} onClick={handleClick}>
      <span className="button-content">{children}</span>
    </button>
  );
};

export default Button;
