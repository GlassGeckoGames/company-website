/**
 * @file aboutData.js
 * @module aboutData
 * @desc Data structures used in the application for the about page.
 * 
 * @exports aboutTitle
 * @exports aboutDescription
 * @exports teamMembers
 * 
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export|MDN Export Documentation}
 * 
 * @author Chace Nielson
 * @created 2024-07-10
 * @updated 2024-07-10
 */

/**
 * The title for the about section.
 * @type {string}
 */
export const aboutTitle = 'About Us';

/**
 * The description for the about section.
 * @type {string}
 */
export const aboutDescription = `Founded in a small garage in 2010, Glass Gecko Games quickly gained recognition for its innovative and immersive game designs. Led by visionary founder Alice Johnson, the studio's first breakthrough came with the release of "Mystic Realms," which captivated players worldwide. The team, consisting of talented developers like Dave and Carol, has since grown into a diverse group of creative minds.`;

/**
 * An array of team members.
 * Each team member has a name, role, image, and description as keys.
 * @type {Array<Object>}
 */
export const teamMembers = [
  {
    name: 'Alice Johnson',
    role: 'Project Manager',
    image: 'glass.png',
    description: 'Alice coordinates the team and ensures projects are on track. She loves to get things done and keep working on this long sentence etc.'
  },
  {
    name: 'Chace Nielson',
    role: 'Software Developer',
    image: 'chace_nielson.jpg',
    description: 'Love long walks on the beach.'
  },
  {
    name: 'Carol White',
    role: 'UX Designer',
    image: 'glass.png',
    description: 'Carol designs user interfaces and improves user experience.'
  },
  {
    name: 'David Smith',
    role: 'Backend Developer',
    image: 'chace_2.jpg',
    description: 'David works on server-side logic and database management.'
  },
  {
    name: 'Eva Green',
    role: 'Frontend Developer',
    image: 'chace_nielson.jpg',
    description: 'Eva specializes in building the visual part of web applications.'
  },
  {
    name: 'Frank Miller',
    role: 'DevOps Engineer',
    image: 'glass.png',
    description: 'Frank ensures continuous integration and deployment pipelines are running smoothly.'
  },
  {
    name: 'Grace Lee',
    role: 'QA Tester',
    image: 'henery.png',
    description: 'Grace tests the software to find and fix bugs before release.'
  },
  {
    name: 'Henry Adams',
    role: 'Graphic Designer',
    image: 'chace_2.jpg',
    description: 'Henry creates visual content for marketing and product design.'
  },
  {
    name: 'Ivy Williams',
    role: 'Content Writer',
    image: 'chace_nielson.jpg',
    description: 'Ivy writes content for our website, blogs, and marketing materials.'
  },
  {
    name: 'Jack Taylor',
    role: 'Product Owner',
    image: 'henery.png',
    description: 'Jack defines the vision and prioritizes the features of our products.'
  }
];
