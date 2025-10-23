/**
 * @file NewsPopup.jsx
 * @module NewsPopup
 * @desc Displays a toast notification with the latest news items on initial site load.
 *
 * @see {@link https://react-hot-toast.com/ | React Hot Toast Documentation}
 *
 * @author Chace Nielson
 * @created Oct 22, 2025
 * @updated Oct 22, 2025
 */

import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaTimes } from "react-icons/fa";
import { newsItems } from "../data/newsPopupData";
import ImageComponent from "./ImageComponent";
import { recordGAEvent } from "../googleAnalytics/analytics";

function AnimatedToastContent({ children, visible }) {

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const id = setTimeout(() => setMounted(true), 10);
    return () => clearTimeout(id);
  }, []);
  // Animate in after mount, animate out when visible is false
  const show = mounted && visible;
  return (
    <div
      className={
        "transition-all duration-500 ease-in-out transform " +
        (show ? "translate-x-0 opacity-100" : "translate-x-40 opacity-0")
      }
    >
      {children}
    </div>
  );
}

export default function NewsPopup() {

  const toastDuration = 9000; // how long each toast is visible
  const startDelay = 5000; // delay before first toast appears
  const toastDelay = 2000; // delay between toasts if multiple

  useEffect(() => {
    const timers = [];
    const showToasts = () => {
      newsItems.forEach((item, index) => {
        const timer = setTimeout(() => {
          toast.custom((t) => (
            <AnimatedToastContent visible={t.visible}>
              <div className={
                `relative flex flex-col md:flex-row items-center bg-accent bg-opacity-95 border border-secondary rounded shadow-lg px-5 py-4 text-secondary max-w-xl min-w-md w-full `
              }>
                {/* Image */}
                {item.image && (
                  <div className="flex-shrink-0 mr-3 mt-1 w-56 h-40">
                    <ImageComponent 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover border-2 border-accent shadow rounded-lg" 
                      blurHash={item.blurhash}
                    />
                  </div>
                )}
                {/* Content */}
                <div className="flex flex-col space-y-2 flex-1">
                  <div className="font-bold text-2xl text-primary">{item.title}</div>
                  <div className="text-base text-secondary-dark">{item.description}</div>
                  {item.links && (
                    <div className="flex space-x-3 pt-2">
                      {item.links.map((link, i) => (
                        <a
                          key={i}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={
                            `inline-flex items-center px-3 py-1.5 text-sm font-semibold rounded transition-colors shadow ` +
                            (link.type === 'steam' ? 'bg-accent-dark hover:bg-secondary-dark text-white' : link.type === 'discord' ? 'bg-accent-light hover:bg-accent-dark text-secondary' : 'bg-primary hover:bg-primary-dark text-secondary')
                          }
                          onClick={() => {
                            recordGAEvent({
                              category: 'Popup',
                              action: 'Click',
                              label: `${link.label} - ${item.title}`
                            });
                            toast.dismiss(t.id);
                          }}
                        >
                          <span className="flex items-center whitespace-nowrap">{link.icon && <span className="mr-1">{link.icon}</span>}{link.label}</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
                <button
                  onClick={() => toast.dismiss(t.id)}
                  className="absolute top-2 right-2 text-secondary hover:text-accent-dark hover:cursor-pointer text-lg"
                  aria-label="Close"
                >
                  <FaTimes />
                </button>
              </div>
            </AnimatedToastContent>
          ), {
            id: `news-toast-${index}`,
            duration: toastDuration,
          });
        }, index * toastDelay);
        timers.push(timer);
      });
    };
    const initialTimer = setTimeout(showToasts, startDelay);
    timers.push(initialTimer);
    return () => timers.forEach(clearTimeout);
  }, []);
  return null;
}
