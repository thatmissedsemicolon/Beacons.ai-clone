/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('https://firebasestorage.googleapis.com/v0/b/dev-order-341909.appspot.com/o/background-sury.jpg?alt=media')"
      },
      backgroundColor: {
        mainColor: '#FBF8F9',
        secondaryColor: '#F0F0F0',
        blackOverlay: 'rgba(0, 0 ,0 ,0.7)',
      },
    },
    cursor: {
      'zoom-in': 'zoom-in',
      pointer: 'pointer',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};