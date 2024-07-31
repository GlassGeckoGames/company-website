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
 * @updated 2024-07-31
 */

import React, { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import emailjs from 'emailjs-com';
import Button from '../components/Button';
import { recordGAEvent } from '../googleAnalytics/analytics';
import ImageComponent from '../components/ImageComponent';
import { contactBlurb, pageImages } from '../data/contactPageData';
import ContactToast from '../components/ContactToast';

const EMAILJS_USER_ID = process.env.REACT_APP_EMAILJS_USER_ID;
const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // check if the emailjs configuration is set up correctly
    if (!EMAILJS_USER_ID || !EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID) {
      toast.error('EmailJS configuration is missing or incorrect.');
      return;
    }

    // create the email template parameters
    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
      reply_to: email
    };

    // use emailjs to send the email
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

      recordGAEvent({
        category: 'Form',
        action: 'Submit',
        label: 'Contact Us Form'
      });

    }, (error) => {
      console.log('FAILED...', error);
      displayErrorToast();
    });
  };

  const displaySuccessToast = () => {
    toast.custom((t) => (
      // use the contact
      <ContactToast t={t}/>  
    ));
  };

  const displayErrorToast = () => {
    toast.error('Failed to send email. Please try again later.');
  };

  return (
    <div className="container mx-auto p-2 flex flex-col lg:flex-row gap-2 lg:gap-6">
      <Toaster />
      <div className="w-full  p-2 faint-bg rounded-xl">
        <h1 className="text-3xl font-bold text-accent titleFont">Connect with Us</h1>
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
            <Button type="accent" buttonType="submit">Send Message</Button>
          </div>
          <p className="mt-4 text-primary">{contactBlurb}</p>
        </form>
      </div>

      <div className=' w-full  border-4 min-h-32 border-black rounded-lg overflow-hidden grid grid-cols-4 lg:grid-cols-2 lg:grid-rows-2'>
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
