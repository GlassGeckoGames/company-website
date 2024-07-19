
# Glass Gecko Games - Company Website

Welcome to the repository for the Glass Gecko Games company website. This site showcases our games, team, and latest news.

## Table of Contents

- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Project](#running-the-project)
- [Data Files](#data-files)
  - [About Page Data](#about-page-data)
  - [Contact Page Data](#contact-page-data)
  - [Game Data](#game-data)
  - [Home Page Data](#home-page-data)
  - [News Data](#news-data)
- [Public Folder Structure](#public-folder-structure)
- [Pages](#pages)
- [Components](#components)
- [Development](#development)
- [More Infomation](#more-information)

## Installation

To install the necessary dependencies, run:

```bash
npm install
```

## Environment Variables

Create a `.env` file in the root directory with the following content:

```env
REACT_APP_EMAILJS_SERVICE_ID=service_.......
REACT_APP_EMAILJS_TEMPLATE_ID=template_.......
REACT_APP_EMAILJS_USER_ID=.......

REACT_APP_GA_TRACKING_ID=G-........

REACT_APP_ENVIRONMENT=development // only for development environment
```
- The file will not be tracked by git
- Ask your admin for the specific infomation

## Running the Project

To run the local version of the project, run:

```bash
npm start
```

## Data Files

### About Page Data

The data for the About page is located in `src/data/aboutPageData.js`. This file includes:

- The title for the About section.
- The description for the About section.
- An array of team member profiles, each containing a name, role, image, blurHash, and description.

### Contact Page Data

The data for the Contact page is located in `src/data/contactPageData.js`. This file includes:

- A contact blurb that is displayed on the Contact Page below the contact form.

### Game Data

The data for the games is located in `src/data/gameData.js`. This file includes:

- A list of game data objects for each game, used on both the GamePage and the home page panels.
- Each game object contains details such as id, title, description, images, genre, platforms, release date, features, system requirements, price, trailer, and reviews.

### Home Page Data

The data for the Home page is located in `src/data/homePageData.js`. This file includes:

- The title to be displayed on the homepage.
- The description to be displayed on the homepage.
- The video data to be displayed on the homepage, including the video source URL and a BlurHash string for the video placeholder.

### News Data

The data for the News page is located in `src/data/newsData.js`. This file includes:

- An array of news items, each containing a title, description, date, category, optional tags, optional external links, optional image, featured flag, and author.

## Public Folder Structure

- `gameMedia`: Contains images for games, with folders named after the game IDs in the game data file.
- `logos`: Contains logos for the games.
- `newsImages`: Contains images related to the news page.
- `teamPhotos`: Contains photos of each team member.
- `videos`: Contains the video for the homepage.

## Pages

The site is broken up into the following pages:

- **About**: About the team.
- **Home**: Intro section and games list.
- **Contact**: A contact form using EmailJS.
- **News**: Latest updates.
- **GamePage**: Displays detailed information about a game, routed by `Route path="/games/:gameId"`.

## Components

The components for the site are located in the `src/components` folder. Each component is documented and used throughout the site to build the UI.

## Development

The `TailwindBreakPoints.jsx` component shows the breakpoints during development. You can turn this off by changing the environment variable `REACT_APP_ENVIRONMENT` to something other than `development`.


## More Information

For more information, contact Chace Nielson:

- Website: [chacenielson.com](https://chacenielson.com)
- Email: [chacen@shaw.ca](mailto:chacen@shaw.ca)
