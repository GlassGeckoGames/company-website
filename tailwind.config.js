
/**
 * @file tailwind.config.js
 * @type {import('tailwindcss').Config}
 * @desc Custom Tailwind CSS configuration for the project.
 * 
 * This file contains custom extensions to the default Tailwind CSS configuration,
 * including additional color definitions and extended height utilities.
 * 
 * Custom Colors:
 * - primary: '#DCE6C7' - A lighter tan color for primary elements.
 * - secondary: '#556B2F' - An olive color that matches the logo for secondary elements.
 * - accent: '#FF4500' - A bright orange color for accent elements.
 * - accent-dark: '#E03E00' - A darker shade of the accent color for hover effects.
 * 
 * Example usage of custom colors:
 * ```html
 * <div className="bg-primary text-secondary">
 *   <button className="bg-accent hover:bg-accent-dark text-white">Click me</button>
 * </div>
 * ```
 * 
 * Extended Heights:
 * - '104': '26rem' - Height equivalent to 416px.
 * - '112': '28rem' - Height equivalent to 448px.
 * - '120': '30rem' - Height equivalent to 480px.
 * - '128': '32rem' - Height equivalent to 512px.
 * - '144': '36rem' - Height equivalent to 576px.
 * - '160': '40rem' - Height equivalent to 640px.
 * - '176': '44rem' - Height equivalent to 704px.
 * - '192': '48rem' - Height equivalent to 768px.
 * - '208': '52rem' - Height equivalent to 832px.
 * - '224': '56rem' - Height equivalent to 896px.
 * - '240': '60rem' - Height equivalent to 960px.
 * - '256': '64rem' - Height equivalent to 1024px.
 * 
 * Example usage of extended heights:
 * ```html
 * <div className="h-104 bg-primary">
 *   This div has a height of 26rem (416px).
 * </div>
 * <div className="h-112 bg-secondary">
 *   This div has a height of 28rem (448px).
 * </div>
 * ```
 * 
 * @see {@link https://tailwindcss.com/docs/configuration|Tailwind CSS Configuration Documentation}
 * @see {@link https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js|Tailwind Default Configuration}
 * 
 * @created 2024-07-10
 * @updated 2024-07-19
 * 
 * 
 * 
 * pther primary colour options 
 * DCE6C7 // a light tan
 * 
 * 
 */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F5F5F5', // soft white
        'primary-dark': '#E0E0E0', // a darker shade of white

        secondary: '#000', // slightly less than black 
        "secondary-dark":'#222', // black
        
        accent: '#556B2F',  // Olive 
        'accent-dark': '#455825', // darker shade of olive
      },
      height: {
        '104': '26rem', // h-104, equivalent to 416px
        '112': '28rem', // h-112, equivalent to 448px
        '120': '30rem', // h-120, equivalent to 480px
        '128': '32rem', // h-128, equivalent to 512px
        '144': '36rem', // h-144, equivalent to 576px
        '160': '40rem', // h-160, equivalent to 640px
        '176': '44rem', // h-176, equivalent to 704px
        '192': '48rem', // h-192, equivalent to 768px
        '208': '52rem', // h-208, equivalent to 832px
        '224': '56rem', // h-224, equivalent to 896px
        '240': '60rem', // h-240, equivalent to 960px
        '256': '64rem', // h-256, equivalent to 1024px
      },
      keyframes: {
        'toast-in': {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'toast-out': {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(-100%)', opacity: '0' },
        },
      },
      animation: {
        'toast-in': 'toast-in 0.3s ease-out forwards',
        'toast-out': 'toast-out 0.3s ease-in forwards',
      },
      fontFamily: {
        'open-sans': ['Open Sans', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'nunito': ['Nunito', 'sans-serif'],
        'chalkduster': ['Chalkduster', 'cursive'],
        'wingdings': ['Wingdings', 'cursive'], 
        'mangold': ['Mangold', 'sans-serif'], // If available
        'techead': ['Techead', 'sans-serif'], // If available
        'sharung': ['Sharung', 'sans-serif'], // If available
        'baddest': ['Baddest', 'sans-serif'], // If available
        'mageri': ['Mageri', 'sans-serif'], // If available
        'poppins': ['Poppins', 'sans-serif'], // Added Poppins font
        'bebas-neue': ['Bebas Neue', 'sans-serif'], // Added Bebas Neue font

      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
