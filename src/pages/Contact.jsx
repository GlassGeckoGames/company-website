/**
 * @file Contact.jsx is a React component that displays the contact page.
 * Renders the contact form and contact information.
 *
 * @component
 * @returns {JSX.Element} The rendered Contact component
 */
import React from 'react';

function Contact() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <p className="mt-4">Send us an email at contact@glassgeckogames.com</p>
    </div>
  );
}

export default Contact;
