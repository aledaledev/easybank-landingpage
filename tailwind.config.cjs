/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'dark-blue': '#2d314d',
      'lime-green': '#31d35c',
      'bringht-cyan': '#2bb7da',
      'grayish-blue': '#9698a6',
      'light-grayish-blue': '#f3f4f6',
      'very-light-gray': '#fafafa',
      'white':'#fff'
    },
    extend: {},
    fontFamily:{
      custom:['Public Sans', 'sans-serif']
    }
  },
  plugins: [],
}
