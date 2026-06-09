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
    image: process.env.PUBLIC_URL + "/gameMedia/scalethedepths/Steam Screenshot-1.jpg",
    blurhash: "LaF%l4o#M{t4~qWFM|ocnRM|aLoI",
    title: "Scale the Depths - Out Now",
    description: "Play the game now or join our Discord for updates.",
    links: [
      {
        label: "Play Now",
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