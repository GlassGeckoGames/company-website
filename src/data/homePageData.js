/**
 * @file homePageData.js
 * @module homePageData
 * @desc Contains information to be displayed on the homepage. also for the About Page
 * 
 * @exports title
 * @exports description
 * @exports videoData
 * @exports contactBlurb
 * 
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export|MDN Export Documentation}
 * 
 * @example
 * // Example usage of homePageData
 * import { title, description, videoData } from './homePageData';
 * 
 * console.log(title); // 'Welcome to Glass Gecko Games'
 * console.log(description); // 'Lorem ipsum dolor sit amet consectetur adipisicing elit...'
 * 
 * @author Chace Nielson
 * @created 2024-07-10
 * @updated 2024-07-14
 */

/**
 * The title to be displayed on the homepage.
 * @type {string}
 */
export const title = "Welcome to Glass Gecko Games";

/**
 * The description to be displayed on the homepage.
 * @type {string}
 */
export const description = 'Making the world more enjoyable, one game at a time';


/**
 * The video data to be displayed on the homepage.
 * @type {Object}
 * @property {string} src - The source URL of the video.
 * @property {string} blurHash - The Blurhash string for the video placeholder.
 */
export const videoData = {
  src:process.env.PUBLIC_URL + '/videos/homeBackdropVideo.mp4',
  blurHash:"YMDA[gw[5aOH$wWXR5nNvzt6M|S5t7WBWDfk4UWX=WslNzWBkXXTT}WC${n$RkaeofbI"
}

/**
 * The video data to be displayed on the Contact Page.
 * @property {string} contactBlurb - The text to be displayed on the Contact Page below the contact form.
 */
export const contactBlurb = "We would love to hear from you! Your feedback helps us make our games better. Whether you have questions, suggestions, or ideas, please share them with us. We are committed to creating the best gaming experience possible and appreciate your input.";