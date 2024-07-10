/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F5F5F5', // soft white
        secondary: '#556B2F', // olive - match logo
        accent: '#FF4500', 
      },
    },
  },
  plugins: [],
}
