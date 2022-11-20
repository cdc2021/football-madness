/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '786px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        'themeFontFamily': ['Secular One', 'sans-serif']
      },
      colors: {
        themeBlack: '#333333',
        themeWhite: '#FFFFFF',
        themeGold: '#F0C419',
      },
    },
  },
  plugins: [],
}
