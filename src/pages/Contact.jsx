/**
 * @file Contact.jsx
 * @module Contact
 * @desc Renders a contact form component that allows users to send messages via email.
 * 
 * This component uses EmailJS to send messages and react-hot-toast for notifications.
 * 
 * @component Contact
 * 
 * @param {Object} props - The component props.
 * 
 * @requires react
 * @requires react-hot-toast
 * @requires emailjs-com
 * @requires ../components/Button
 * @requires ../analytics
 * @requires ../components/ImageComponent
 * @requires ../data/contactPageData
 * 
 * @see {@link https://reactjs.org/docs/getting-started.html|React Documentation}
 * @see {@link https://react-hot-toast.com/docs|React Hot Toast Documentation}
 * @see {@link https://www.emailjs.com/docs/|EmailJS Documentation}
 * 
 * @returns {JSX.Element} The contact form component.
 * 
 * @example
 * // Example usage of Contact component
 * <Contact />
 * 
 * @author Chace Nielson
 * @created 2024-07-12
 * @updated 2024-07-19
 */

import React, { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import emailjs from 'emailjs-com';
import Button from '../components/Button';
import { recordGAEvent } from '../analytics';
import ImageComponent from '../components/ImageComponent';
import { contactBlurb, pageImages } from '../data/contactPageData';

const EMAILJS_USER_ID = process.env.REACT_APP_EMAILJS_USER_ID;
const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!EMAILJS_USER_ID || !EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID) {
      toast.error('EmailJS configuration is missing or incorrect.');
      return;
    }

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
      reply_to: email
    };

    emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_USER_ID
    ).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      displaySuccessToast();
      setName('');
      setEmail('');
      setMessage('');

      recordGAEvent("Sent a message via 'Contact Us' form");

    }, (error) => {
      console.log('FAILED...', error);
      displayErrorToast();
    });
  };

  const displaySuccessToast = () => {
    toast.custom((t) => (
      <div
        className={`${
          t.visible ? 'animate-toast-in' : 'animate-toast-out'
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
  };

  const displayErrorToast = () => {
    toast.error('Failed to send email. Please try again later.');
  };

  return (
    <div className="container mx-auto p-4 flex flex-col lg:flex-row gap-10">
      <Toaster />
      <div className="w-full">
        <h1 className="text-3xl font-bold text-accent titleFont">Contact Us</h1>
        <p className="mt-4 text-primary">Send us an email at <a href="mailto:glassgeckogames@gmail.com" className="text-accent">glassgeckogames@gmail.com</a></p>
        <form onSubmit={handleSubmit} className="mt-4 space-y-6">
          <div>
            <label htmlFor="name" className="block text-base font-medium text-primary">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-base font-medium text-primary">Email</label>
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
            <label htmlFor="message" className="block text-base font-medium text-primary">Message</label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              maxLength="800"
              className="min-h-28 h-20 xl:h-40 2xl:h-64  mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent sm:text-sm"
            />
          </div>
          <div className='w-full flex justify-start'>
            <Button type="accent" buttonType="submit">Submit Message</Button>
          </div>
          <p className="mt-4 text-primary">{contactBlurb}</p>
        </form>
      </div>

      <div className=' w-full  border-4 min-h-48 border-black rounded-lg overflow-hidden grid grid-cols-4 lg:grid-cols-2 lg:grid-rows-2'>
        {/* loop through the list of images to display here - all similar  */}
        {pageImages.map((image, index) => (
          <div className='border-4 border-black'>
              <ImageComponent
              key={index}
              className="" 
              src={process.env.PUBLIC_URL + image} 
              alt="contact page"
              blurHash='qANw7wDi71?b_MkVMet8uNyC%2xaIUDPRjf,OFnOVYE1WB%g%gxtx]tQt6IUV@-;jGR5nlV[tQoyIUn,kCM{-;WVIBjZx]kCo1of'
              />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contact;
