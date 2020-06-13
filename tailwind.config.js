module.exports = {
  purge: {
    content: ['./src/**/*.vue', './src/**/*.js'],
    options: {
      whitelist: [
        'body',
        'html',
        'img',
        'a',
        'g-image',
        'g-image--lazy',
        'g-image--loaded',
      ],
    },
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
