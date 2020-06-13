module.exports = {
  siteName: 'Cards by Chris',
  siteDescription: 'Hand crafted cards and memory journals by Chris Wilson',
  titleTemplate: `%s`,
  plugins: [
    {
      use: 'gridsome-plugin-tailwindcss',

      options: {
        tailwindConfig: './tailwind.config.js',
      },
    },
  ],
};
