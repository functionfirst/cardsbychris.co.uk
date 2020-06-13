const purgecss = require('@fullhuman/postcss-purgecss');
const tailwind = require('tailwindcss');

const postcssPlugins = [tailwind('./tailwind.config.js')];

if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss());

module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins,
      },
    },
  },
  siteName: 'Cards by Chris',
  siteDescription: 'Hand crafted cards and memory journals by Chris Wilson',
  titleTemplate: `%s`,
  plugins: [],
};
