/**
 * @file aboutPageData.js
 * @desc Data structures used in the application for the about page. The teamProfiles is the most editable section as it can be changed to chang bios 
 * 
 * @exports aboutTitle
 * @exports aboutDescription
 * @exports teamProfiles
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
export const aboutDescription = `We are a group of passionate individuals dedicated to sharing fun and innovative experiences with the world through game development. We began as a group of friends with a shared passion for making games and have since grown into a team of committed creators, aiming to produce many engaging titles for you to enjoy. Learn more about our talented team members here.`;


/**
 * An array of team members.
 * Each team member has a name, role, image, and description as keys.
 * The image key is the filename of the image in the public folder under "teamPhotos".
 * descriptions are split into paragraphs by the array (up to a max of 2 paragraphs can be used).
 * blurHash is a placeholder image for the image that is used as a placeholder until the image is loaded
 * 
 * when making additions to this component, ensure that the image is added to the public/teamPhotos folder and use the image name here
 * 
 * @type {Array<Object>}
 */
export const teamProfiles = [
  {
    name: 'Emmanuel Omari-Osei ',
    role: 'Code',
    image: 'emmanuel.jpg',
    blurHash: 'qXLgOu-p~pkDIUxaM|WB^*R*xuRjR*aeayt7S#Rj9Gxtt6kCxtRj-pt7ofRjWCWBoeozt7M|IUt7t7jsazWBn%xaozWBs:a}R*kC',
    description: [
      'I am a software engineer with great interest in software development and a passion for making games.',
      'I also enjoy playing games as much as I enjoy making them. 😁'
    ],
    link: { description: "My Portfolio", url: "https://github.com/E-man248/emmanuel.omariosei-Portfolio/" }
  },
  {
    name: 'Toni',
    role: 'Code',
    image: 'toni.png',
    blurHash: 'qABfX~J800-V_3rXM{OXoZwJJWOX,;SeWCsp00of~VIVE1%2s:WBtTbvwHsnOERkWVWA9tr?xvt7v}Egogr?Z%J7xZv~JU%2oJSg',
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      'Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio.'
    ]
  },
  {
    name: 'Heng Rui Xu',
    role: 'Art and Design',
    image: 'Serpexnessie-Profile-Picture-Brand-2.png',
    blurHash: 'LRQk4^V[_Kt6vxoLxFay%Ks:RRWB',
    description: [
      "I am a 2D digital illustrator with a passion for games and anime.",
      "I also enjoy storytelling and game design!"
    ],
    link: { description: "My Portfolio", url: "https://serpexnessie.com/" }
  },
  {
    name: 'Frank',
    role: 'Role',
    image: '',
    blurHash: 'q%O:@Sj[~qj[IUj[t7j[%Mj[offQM{fQWBfQt7fQIUayxuj[j[fQt7fQWBfQj[fQoffQ-;fQM{j[WBayj[fQIUayj[j[xufQWBfQ',
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      'Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio.'
    ]
  },
  {
    name: 'Chace Nielson',
    role: 'Software Developer',
    image: 'chace_nielson.jpg',
    blurHash: 'qEDcL6Vau5F1Io%2ixxF.AIpD*xaxaogbvR*BrI:-B$jxaNGNaX8Dj-UoeT0T0NGwJwd.8n$%gS$NIr?r=WCTKNGVss:aexabbSh',
    description: [
      "I'm a software engineer with a inclination for web development and game design.",
      "In my free time, I enjoy playing backpacking, hiking, and playing guitar."
    ],
    link: { description: "My Portfolio", url: "https://chacenielson.com" }
  },
  {
    name: 'Kelly',
    role: 'Art',
    image: '',
    blurHash: 'q%O:@Sj[~qj[IUj[t7j[%Mj[offQM{fQWBfQt7fQIUayxuj[j[fQt7fQWBfQj[fQoffQ-;fQM{j[WBayj[fQIUayj[j[xufQWBfQ',
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      'Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio.'
    ]
  },
  {
    name: 'Michael',
    role: 'Role',
    image: '',
    blurHash: 'qIIF6Z%QWagZ5jRD-UsD=j%4k=yCKOxv-VnmG*xY%znXkEx@RkR*VhyTwdD-n%XMI:tQ%2wzMyNr%LoOo#xuTBv-W?pEtQIWoKo1',
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      'Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio.'
    ]
  },
  {
    name: 'Mason',
    role: 'Role',
    image: '',
    blurHash: 'q%O:@Sj[~qj[IUj[t7j[%Mj[offQM{fQWBfQt7fQIUayxuj[j[fQt7fQWBfQj[fQoffQ-;fQM{j[WBayj[fQIUayj[j[xufQWBfQ',
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      'Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio.'
    ]
  },
  {
    name: 'Theo',
    role: 'Role',
    image: '',
    blurHash: 'q%O:@Sj[~qj[IUj[t7j[%Mj[offQM{fQWBfQt7fQIUayxuj[j[fQt7fQWBfQj[fQoffQ-;fQM{j[WBayj[fQIUayj[j[xufQWBfQ',
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      'Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio.'
    ]
  },
  {
    name: 'Joshua',
    role: 'Role',
    image: '',
    blurHash: 'q%O:@Sj[~qj[IUj[t7j[%Mj[offQM{fQWBfQt7fQIUayxuj[j[fQt7fQWBfQj[fQoffQ-;fQM{j[WBayj[fQIUayj[j[xufQWBfQ',
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      'Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio.'
    ]
  }
];

