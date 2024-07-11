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

const Button = ({ type = 'primary', as = 'button', buttonType = 'button', onClick, to, href, children }) => {
  const buttonClass = `button-base button-${type}`;

  if (as === 'link') {
    return (
      <Link to={to} className={buttonClass}>
        <span className="button-content">{children}</span>
      </Link>
    );
  }

  if (as === 'a') {
    return (
      <a href={href} className={buttonClass} onClick={onClick} target="_blank" rel="noopener noreferrer">
        <span className="button-content">{children}</span>
      </a>
    );
  }

  return (
    <button type={buttonType} className={buttonClass} onClick={onClick}>
      <span className="button-content">{children}</span>
    </button>
  );
};

export default Button;


