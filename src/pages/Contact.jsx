/**
 * @file Contact.jsx
 * @module Contact
 * @desc React component that displays the contact page.
 * Renders the contact form and contact information.
 * 
 * @component Contact
 * 
 * @requires react
 * @requires react-hot-toast
 * 
 * @see {@link https://reactjs.org/docs/getting-started.html|React Documentation}
 * @see {@link https://react-hot-toast.com/|React Hot Toast Documentation}
 * 
 * @author Chace Nielson
 * @created 2024-07-10
 * @updated 2024-07-10
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
    console.log('Message:', message);
    console.log('Email:', email);

    const success = true;

    if (success) {
      toast.custom((t) => (
        <div
          className={`${
            t.visible ? 'animate-enter' : 'animate-leave'
          } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5 transition duration-300 ease-in-out`}
        >
          <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-secondary text-white rounded-full ml-4 mt-4 mb-4">
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <div className="flex-1 w-0 p-4">
            <div className="flex items-start">
              <div className="ml-3 flex-1">
                <p className="text-sm font-medium text-gray-900">
                  Your email has been sent successfully!
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  Thanks for your feedback. We will get back to you as soon as we can.
                </p>
              </div>
            </div>
          </div>
          <div className="flex border-l border-gray-200">
            <button
              onClick={() => toast.dismiss(t.id)}
              className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-accent hover:bg-accent hover:text-primary focus:outline-none focus:ring-2 focus:ring-accent"
            >
              Close
            </button>
          </div>
        </div>
      ));
    } 
  };
 
  return (
    <div className="container mx-auto p-4 flex flex-col lg:flex-row gap-20">
      <Toaster />
      <div className='w-full'>

        <h1 className="text-3xl font-bold text-secondary">Contact Us</h1>
        <p className="mt-4">Send us an email at <a href="mailto:glassgeckogames@gmail.com" className="text-accent">glassgeckogames@gmail.com</a></p>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6 ">
          <div>
            <label htmlFor="email" className="block text-base font-medium text-black">Email</label>
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
            <label htmlFor="message" className="block text-base font-medium text-black">Message</label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              // rows="12"
              maxlength="800"
              className="min-h-28 h-40 xl:h-56 2xl:h-80  max-h- mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent sm:text-sm"
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

          <p className="mt-4">We'd love to hear from you! Your feedback helps us make our games better. Whether you have questions, suggestions, or ideas, please share them with us. We are committed to creating the best gaming experience possible and appreciate your input.</p>
          </form>
      </div>

      <div className='w-full h-full flex items-center justify-center'>
        <img className="max-w-full h-auto rounded-xl" src={process.env.PUBLIC_URL + `/logos/Glass_Gecko_Games_Icon.png`} alt={"contact page"} />

      </div>

    </div>
  );
}

export default Contact;
