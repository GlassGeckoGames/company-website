/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F5F5F5', // soft white
        secondary: '#1f937f', // teal
        accent: '#556B2F', // olive - to match the logo and used for buttons/actions
      },
    },
  },
  plugins: [],
}
