/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        
      }
    },
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': {'max':'1024px'},
      // => @media (max-width: 1024px) { ... }

      'desktop': {'max':'1149px'},
      // => @media (max-width: 1149px) { ... }

      'mobile': {'max':'890px'},
    },
  },
  plugins: [],
}
