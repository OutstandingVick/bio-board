/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sketch: ['"Cabin Sketch"', 'cursive'],
        cardo: ['Cardo', 'serif'],
        ubuntu: ['Ubuntu', 'sans-serif'],
      },
      colors: {
        primary: '#EFCA08',
        secondary: '#1A1423',
        tertiary: '#9CF6F6',
      },
    },
  },
  plugins: [],
};
