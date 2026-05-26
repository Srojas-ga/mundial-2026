/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary:   '#00B140',
        secondary: '#003087',
        accent:    '#00509E',
      },
    },
  },
  plugins: [],
};
