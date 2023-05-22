/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    colors: {
      white: '#FFFFFF',
      green: '#75B1A9',
      greenHard: '#4F6457',
      greenSoft: '#ACD0C0'
    }
    // extend: {
    //   fontFamily: {
    //   sans: ['Inter var', ...defaultTheme.fontFamily.sans],
    // },},
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
  mode: 'jit',
}

