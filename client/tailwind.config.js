/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    colors: {
      white: '#FFFFFF',
      black: ' #000000',
      green: '#006414',
      greenHard: '#5ccb5f',
      lightGreen: '#009929',
      grey: '#808080',
      greyHard: '#4B4B4B',
      greySoft: '#C8C8C8',
      red: '#CB3234',
      blue: '#1d4ed8',
    },
    extend: {
      fontFamily: {
      sans: ['Inter var', ...defaultTheme.fontFamily.sans],
  },
},
  plugins: [require('@tailwindcss/aspect-ratio')],
  mode: 'jit',
}
}

