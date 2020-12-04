module.exports = {
  siteMetadata: {
    title: `ISRO`,
    description: `Indian Space Research Organization, Government of India`,
    author: `@isro`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // `gatsby-transformer-json`,
    {
      resolve: 'gatsby-transformer-yaml-full',
      options: {
        plugins: [
          {
            resolve: 'gatsby-yaml-full-markdown',
            options: {
              unwrapSingleLine: true
            }
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `docs`,
        path: `${__dirname}/src/docs`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
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
        // background_color: `#663399`,
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/common/isro_icon_black.png`, // This path is relative to the root of the site.
      },
    },
    // `gatsby-transformer-remark`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 600,
              // showCaptions: true,
              showCaptions: [`title`],
              markdownCaptions: true,
              backgroundColor: `transparent`,
              quality: 100,
              // disableBgImageOnAlpha: true,
            },
          },
        ],
      },
    },
    `gatsby-plugin-sass`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,

    // {
    //     resolve: `gatsby-plugin-loadable-components-ssr`,
    //     options: {
    //         // Whether replaceHydrateFunction should call ReactDOM.hydrate or ReactDOM.render
    //         // Defaults to ReactDOM.render on develop and ReactDOM.hydrate on build
    //         useHydrate: false,
    //     },
    // },
    // `gatsby-plugin-loadable-components-ssr`,
  ],
}
