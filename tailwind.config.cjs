/** @type {import('tailwindcss').Config} */
const tailwindScrollbar = require('tailwind-scrollbar');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    tailwindScrollbar,
  ],
};
