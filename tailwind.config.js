const colors = require('tailwindcss/colors')

module.exports = {
    purge: ['./src/**/*.js', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
          fontFamily: {
            SecularOne: ['Secular One'],
            Roboto: ['Roboto']
            
          },
          colors: {
              'rose': colors.rose,
              'pink': colors.pink,
              'blueGray': colors.blueGray,
              'warmGray': colors.warmGray,
          }
      },
    },
    variants: {
        extend: {
            maxHeight: ['focus'],
            backgroundColor: ['active'],
          }
    },
    plugins: [],
  }
  