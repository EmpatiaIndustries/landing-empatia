module.exports = {
  siteMetadata: {
    title: 'Empatía Industries',
    description: 'Juntos somos más, sé parte y conoce personas con tus mismos intereses.'
  },
  plugins: [

    // Helmet
    `gatsby-plugin-react-helmet`,

    //Manifest
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Empatía Industries',
        short_name: 'Empatía Industries',
        start_url: '/',
        icon: 'src/images/empatia.ico.png',
      },
    },

    // Source filesystem
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    // New

  ],
};
