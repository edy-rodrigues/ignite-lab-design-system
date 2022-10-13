/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    fontSize: {
      '14px': 14,
      '16px': 16,
      '18px': 18,
      '20px': 20,
      '24px': 24,
      '32px': 32,
    },
    colors: {
      black: '#000000',
      white: '#FFFFFF',
      transparent: 'transparent',

      gray: {
        900: '#121214',
        800: '#202024',
        400: '#7C7C8A',
        200: '#C4C4CC',
        100: '#E1E1E6',
      },

      cyan: {
        500: '#81D8F7',
        300: '#9BE1FB',
      },
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif',
      },
    },
  },
  plugins: [],
};
