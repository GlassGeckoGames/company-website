/**
 * @file animations.js
 * @module animations
 * @desc This module contains the functionality to add visibility classes to elements when they scroll into view.
 * 
 * @requires IntersectionObserver
 * 
 * @function addVisibilityClassOnScroll
 * Observes elements with the 'vis-fade-in' class and adds the 'make-visible' class when they intersect with the viewport.
 * 
 * @example
 * // Example usage of addVisibilityClassOnScroll
 * addVisibilityClassOnScroll();
 * 
 * @created 2024-07-12
 * @updated 2024-07-12
 */

 /**
  * Observes elements with the 'vis-fade-in' class and adds the 'make-visible' class when they intersect with the viewport.
  * 
  * @function
  */
 export const addVisibilityClassOnScroll = () => {
  // Select all elements with the class 'vis-fade-in'
  const elements = document.querySelectorAll('.vis-fade-in');

  // Create an IntersectionObserver instance
  const observer = new IntersectionObserver((entries, observer) => {
    // Iterate over each entry
    entries.forEach(entry => {
      // Check if the entry is intersecting with the viewport
      if (entry.isIntersecting) {
        // Add the 'make-visible' class to the target element
        entry.target.classList.add('make-visible');
        // Stop observing the target element
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 }); // Trigger when 10% of the element is visible

  // Observe each element
  elements.forEach(element => {
    observer.observe(element);
  });
};
