/**
 * @file newsPopupData.js
 * @desc Contains information to be displayed in the news popup
 * 
 * @author Chace Nielson
 * @created 2025-10-22
 * @updated 2025-10-22
 */
import { FaSteam, FaDiscord } from "react-icons/fa";

export const newsItems = [
  {
    // Optional image (relative to public folder)
    image: process.env.PUBLIC_URL + "/gameMedia/scalethedepths/Screenshot-7.jpg",
    title: "Scale the Depths - Coming Soon",
    description: "Play the demo or join our Discord to follow development!",
    links: [
      {
        label: "Play Demo",
        url: "https://store.steampowered.com/app/3198890/Scale_the_Depths/",
        icon: <FaSteam />,
        type: "steam",
      },
      {
        label: "Join Our Discord",
        url: "https://discord.gg/x2qCKpTp",
        icon: <FaDiscord />,
        type: "discord",
      },
    ],
  },
];