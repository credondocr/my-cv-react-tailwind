module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme('colors'),
      primary: '#4aa96c',
      secondary: '#D4ECDD',
      'dark-title': '#1C4029',
    }),
    textColor: (theme) => ({
      ...theme('colors'),
      primary: '#1C4029',
      secondary: '#3B8756',
      light: '#D4ECDD',
      danger: '#e3342f',
    }),
    borderColor: (theme) => ({
      ...theme('colors'),
      primary: '#1C4029',
    }),
    extend: {},
    fontFamily: {
      lato: ['Lato', 'sans-serif'],
    },
  },
  variants: {
    extend: {
      textColor: ['active'],
      backgroundColor: ['active'],
      borderColor: ['active'],
    },
  },
  plugins: [],
};
