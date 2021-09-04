const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#18354a',
        'primary-light': '#306C96',
        'primary-dark': '#102533',
        secondary: '#17574F',
        'secondary-light': '#2AA393',
        'secondary-dark': '#103D37',
        accent: '#4A1F47',
        'accent-light': '#963F91',
        'accent-dark': '#331531',
        action: '#E3931B',
        'action-light': '#FAB411',
        'action-dark': '#FA7D11'
      },
      animation: {
        'slide-bg': 'slide-background 15s linear infinite',
        'slide-up': 'slide-up 2s linear infinite'
      },
      keyframes: {
        'slide-background': {
          '0%, 100%': {
            'background-size':'200% 200%',
            'background-position': 'left center'
          },
          '50%': {
              'background-size':'200% 200%',
              'background-position': 'right center'
          }
        },
        'slide-up': {
          '0%': {transform: 'translateY(0)'},
          '100%': {transform: 'translateY(-5px)'}
        }
      },
    },
  },
  variants: {
    extend: {
      inset: [
        'before',
        'after'
      ],
      transform: [
        'before',
        'after'
      ],
      transitionProperty: [
        'before',
        'after'
      ],
      transitionDuration: [
        'before',
        'after'
      ],
      transitionTimingFunction: [
        'before',
        'after'
      ],
      rotate: [
        'before',
        'after'
      ]
    },
  },
  plugins: [
    plugin(function({ addBase, theme }){
      addBase({
        'img': {
          width: theme('width.full')
        }
      })
    }),
    require('tailwindcss-pseudo-elements')({})
  ],
}
