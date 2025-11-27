/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  // VERY IMPORTANT: This stops Tailwind from generating lab()/color-mix colors
  experimental: {
    flattenColorPalette: true,
  },
};
