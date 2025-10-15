/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sketch: ['"Cabin Sketch"', 'cursive'],
        cardo: ['Cardo', 'serif'],
        lato: ['Lato', 'sans-serif'],
      },
      colors: {
        main: '#EFCA08',
        support: '#1A1423',
        side: '#9CF6F6',
      },
    },
  },
  plugins: [],
};
