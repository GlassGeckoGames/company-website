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
 * @updated 2024-07-23
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
 * can also add a link object with a description and URL to link to a portfolio or other page
 * 
 * when making additions to this component, ensure that the image is added to the public/teamPhotos folder and use the image name here
 * 
 * @type {Array<Object>}
 */
export const teamProfiles = [
  { // Emmanuel Omari-Osei
    name: 'Emmanuel Omari-Osei',
    role: 'Software Engineer',
    image: 'emmanuel.jpg',
    blurHash: 'qXLgOu-p~pkDIUxaM|WB^*R*xuRjR*aeayt7S#Rj9Gxtt6kCxtRj-pt7ofRjWCWBoeozt7M|IUt7t7jsazWBn%xaozWBs:a}R*kC',
    description: [
      "This software engineer was born and raised on Nintendo games and still plays to this day. 😁",
      "Will probably get you to play a game from the series of a certain pink puffball if given the chance."
    ],
    //link: { description: "My Profile", url: "https://www.linkedin.com/in/emmanuel-k-omari-osei-968721220" },
    link: { description: "My Portfolio", url: "https://github.com/E-man248/emmanuel.omariosei-Portfolio/" }
  },
  { // Heng Rui Xu
    name: 'Heng Rui Xu',
    role: 'Art Lead',
    image: 'Serpexnessie-Profile-Picture-Brand-2.png',
    blurHash: 'LRQk4^V[_Kt6vxoLxFay%Ks:RRWB',
    description: [
      "I am a 2D digital illustrator and I love me some vidya games.",
      "Some things I enjoy includes D&D, storytelling and game design. On the side, I occasionally make youtube videos. Also, I am (was) diamond in league."
    ],
    link: { description: "My Portfolio", url: "https://serpexnessie.com/" }
  },
  { // Toni Osho
    name: 'Toni Osho',
    role: 'Coding, Marketing, Sound',
    image: 'toni.jpg',
    blurHash: 'W7CZU}-;D$D%Q-wJ00IUI[kDkW%M^j4n~W?HODt79vtR9FRiRPM{',
    description: [
      "Hello! I'm a programmer, sound designer and music producer.",
      "Funnily enough, I love to do all three with any free time I have."   
     ],
  },
  { // Kelly Sun
    name: 'Kelly Sun',
    role: 'Art',
    image: 'Kelly-photo.png',
    blurHash: 'L4D+Pj.70000xx9ZIS}[00S2^*tQ',
    description: [
      "Hi! I'm Kelly. I am a 2D artist deeply passionate about video games, specializing in fantasy and anime style concept art and illustration."
    ],
    link: { description: "My Portfolio", url: "https://pepocandii26.wixsite.com/pepocandiiart" }
  },
  { // Chace Nielson
    name: 'Chace Nielson',
    role: 'Software Engineer',
    image: 'chace_nielson.jpg',
    blurHash: 'qEDcL6Vau5F1Io%2ixxF.AIpD*xaxaogbvR*BrI:-B$jxaNGNaX8Dj-UoeT0T0NGwJwd.8n$%gS$NIr?r=WCTKNGVss:aexabbSh',
    description: [
      "I'm a software engineer with a passion for web development and game design.",
      "When I'm not coding you'll find me in the mountains backpacking, climbing or snowboarding."
    ],
    link: { description: "My Portfolio", url: "https://chacenielson.com" }
  },
  { // Mason Bernard
    name: 'Mason Bernard',
    role: 'Game Design and Quality Assurance',
    description: [
      "Carpenter by day, game breaker by night."
    ],
  },
  { // Joshua Law
    name: 'Joshua Law',
    role: 'Coding, Game Design, Marketing',
    description: [
      "I am a system analyst that does both admin and software development work."
    ],
    link: { description: "My Portfolio", url: "https://github.com/x4n6u?tab=repositories" }
  },
    { // Annie Feng
    name: 'Annie Feng',
    role: 'Art',
    image: 'annie_pfp.png',
    blurHash: 'LhNBGuniyrR.Nyazs,oe*JbbVEs,',
    description: [
      "Hello! My name is Annie and I am a 2D artist who loves anything and everything games.",
      "When not drawing, I can be found raving about Final Fantasy or playing games with friends."
    ],
    link: { description: "My Portfolio", url: "https://anniefeng.myportfolio.com/" }
  },
  { // Joshua Law
    name: 'Murtaza Mustafa',
    role: 'Game Design',
    description: [
      "Programmer and Game Designer with an unlimited passion for games."
    ],
  },
];

