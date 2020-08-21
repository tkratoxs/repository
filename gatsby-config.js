module.exports = {
  siteMetadata: {
    title: `Gilberto Carrillo - Yoga Iyengar`,
    description: `Clases en línea y presenciales de Yoga Iyengar para todos los niveles con el maestro certificado Gilberto Carrillo.`,
    author: `@gilbertoyogai`,
    lang:`es`,
    keywords:`yoga,iyengar,mexico,gilberto,carrillo,hatha,clases,props`
  },
  plugins: [
    //`gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#BBBBB5`,
        theme_color: `#BBBBB5`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Belleza`,
          `Belleza\:300,400,700`
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        // You can find your read-only API token under the Settings > API tokens
        // section of your administrative area:
        apiToken: `0f6449ea50e83eac996e3a95fa71f0`,
  
        // The project environment to read from. Defaults to the primary environment:
        environment: `master`,
  
        // If you are working on development/staging environment, you might want to
        // preview the latest version of records instead of the published one:
        previewMode: false,
  
        // Disable automatic reloading of content when some change occurs on DatoCMS:
        disableLiveReload: false,
  
      },
    },
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 0.05,
        once: false, // Defines if animation needs to be launched once
      }
    },
    `gatsby-plugin-transition-link`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
