/* eslint-disable sort-keys */
/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultConfig')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  important: true,
  plugins: [require('@tailwindcss/forms')],
  screens: {
    'sm': '320px',
    // => @media (min-width: 640px) { ... }

    'md': '768px',
    // => @media (min-width: 768px) { ... }

    'lg': '1024px',
    // => @media (min-width: 1024px) { ... }

    'xl': '1280px',
    // => @media (min-width: 1280px) { ... }

    '2xl': '1536px'
    // => @media (min-width: 1536px) { ... }
  },
  theme: {
    ...defaultTheme,
   /*  colors: {
      ...defaultTheme.colors,
      light: {
        DEFAULT: '#FAFBFC',
        lighter: '#F3F4F6'
      },
      primary: '#3B81F6',
      text: {
        DEFAULT: '#1F2937',
        light: '#6C7281'
      },
      white: '#FFF'
    }, */
    extend: {}
  }
}
