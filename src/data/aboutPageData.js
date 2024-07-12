/**
 * @file aboutPageData.js
 * @module aboutData
 * @desc Data structures used in the application for the about page. The teamMembers is the most editable section as it can be changed to chang bios 
 * 
 * @exports aboutTitle
 * @exports aboutDescription
 * @exports teamMembers
 * 
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export|MDN Export Documentation}
 * 
 * @author Chace Nielson
 * @created 2024-07-10
 * @updated 2024-07-12
 */

/**
 * The title for the about section.
 * @type {string}
 */
export const aboutTitle = 'The Glass Gecko Team';

/**
 * The description for the about section.
 * @type {string}
 */
export const aboutDescription = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, consequatur adipisci in asperiores accusantium natus vel dolores libero accusamus saepe aperiam quas et exercitationem beatae eius perferendis nemo ab optio porro aliquam qui a autem nobis temporibus. Nobis, architecto accusantium?.`;

/**
 * An array of team members.
 * Each team member has a name, role, image, and description as keys.
 * The image key is the filename of the image in the public folder under "teamPhotos".
 * descriptions are split into paragraphs by the array (up to a max of 2 paragraphs can be used).
 * 
 * when making additions to this component, ensure that the image is added to the public/teamPhotos folder and use the image name here
 * 
 * @type {Array<Object>}
 */
export const teamMembers = [
  {
    name: 'Firstname Lastname',
    role: 'Role',
    image: '',
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      'Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio.'
    ]
  },
  {
    name: 'Firstname Lastname',
    role: 'Role',
    image: '',
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      'Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio.'
    ]
  },
  {
    name: 'Firstname Lastname',
    role: 'Role',
    image: '',
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      'Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio.'
    ]
  },
  {
    name: 'Firstname Lastname',
    role: 'Role',
    image: '',
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      'Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio.'
    ]
  },
  {
    name: 'Chace Nielson',
    role: 'Software Developer',
    image: 'chace_nielson.jpg',
    description: [
      "Hi, I'm Chace Nielson, a software engineer specializing in web development. I also enjoy using Unity to make games in my free time.",
      "Aside from software development, I enjoy backpacking, rock climbing, swimming, and playing guitar."
    ]
  },
  {
    name: 'Firstname Lastname',
    role: 'Role',
    image: '',
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      'Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio.'
    ]
  },
  {
    name: 'Firstname Lastname',
    role: 'Role',
    image: '',
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      'Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio.'
    ]
  },
  {
    name: 'Firstname Lastname',
    role: 'Role',
    image: '',
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      'Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio.'
    ]
  },
  {
    name: 'Firstname Lastname',
    role: 'Role',
    image: '',
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      'Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio.'
    ]
  },
  {
    name: 'Firstname Lastname',
    role: 'Role',
    image: '',
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      'Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio.'
    ]
  }
];

