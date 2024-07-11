/**
 * @file Contact.jsx is a React component that displays the contact page.
 * Renders the contact form and contact information.
 *
 * @component
 * @returns {JSX.Element} The rendered Contact component
 */
import React, { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';

function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send email)
    // using EmailJS will be the best way sending to glassgeckogames@gmail.com

    console.log('Email:', email);
    console.log('Message:', message);
    toast.success('Your email has been sent successfully!');
  };

  return (
    <div className="container mx-auto p-4">
      <Toaster />
      <h1 className="text-3xl font-bold text-secondary">Contact Us</h1>
      <p className="mt-4">Send us an email at <a href="mailto:glassgeckogames@gmail.com" className="text-accent">glassgeckogames@gmail.com</a></p>
      <form onSubmit={handleSubmit} className="mt-8 space-y-6 ">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows="4"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent sm:text-sm"
          />
        </div>
        <div>
        <button
          type="submit"
          className="button-base w-full"
        >
          <span className="button-content">Send</span>
        </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
