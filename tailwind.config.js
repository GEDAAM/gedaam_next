module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js', './layouts/**/*.js'],
  theme: {
    extend: {}
  },
  variants: [
    'responsive',
    'group-hover',
    // 'focus-within', // this one is a motherfucking error-causer
    'first',
    'last',
    'odd',
    'even',
    'hover',
    'focus',
    'active',
    'visited',
    'disabled'
  ],
  plugins: []
};
