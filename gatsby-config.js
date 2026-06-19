module.exports = {
  siteMetadata: {
    title: `ISRO`,
    description: `Indian Space Research Organization, Government of India`,
    author: `@isro`,
    siteUrl: `https://isromaster.gtsby.io`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Indian Space Research Organization`,
        short_name: `ISRO`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `standalone`,
        icon: `src/images/common/isro_logo.svg`, // This path is relative to the root of the site.
        icons: [
          {
            src: `/icons/maskable_icon_x72.png`,
            sizes: `72x72`,
            type: `image/png`,
            purpose: `maskable`,
          },
          {
            src: `/icons/maskable_icon_x96.png`,
            sizes: `96x96`,
            type: `image/png`,
            purpose: `maskable`,
          },
          {
            src: `/icons/maskable_icon_x128.png`,
            sizes: `128x128`,
            type: `image/png`,
            purpose: `maskable`,
          },
          {
            src: `/icons/maskable_icon_x144.png`,
            sizes: `144x144`,
            type: `image/png`,
            purpose: `maskable`,
          },
          {
            src: `/icons/maskable_icon_x152.png`,
            sizes: `152x152`,
            type: `image/png`,
            purpose: `maskable`,
          },
          {
            src: `/icons/maskable_icon_x384.png`,
            sizes: `384x384`,
            type: `image/png`,
            purpose: `maskable`,
          },
          {
            src: `/icons/maskable_icon_x512.png`,
            sizes: `512x512`,
            type: `image/png`,
            purpose: `maskable`,
          },
        ]
      }
    },
    `gatsby-plugin-remove-serviceworker`,
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 0.2, // Percentage (ratio) of an element's area that needs to be visible to launch animation
        once: true, // Defines if animation needs to be launched once
        disable: false, // Flag for disabling animations

        // Advanced Options
        selector: '[data-sal]', // Selector of the elements to be animated
        animateClassName: 'sal-animate', // Class name which triggers animation
        disabledClassName: 'sal-disabled', // Class name which defines the disabled state
        rootMargin: '0% 50%', // Corresponds to root's bounding box margin
        enterEventName: 'sal:in', // Enter event name
        exitEventName: 'sal:out', // Exit event name
      }
    },
   //  {
   //    resolve: 'gatsby-plugin-offline',
   //    options: {
   //      workboxConfig: {
   //        globPatterns: ['**/icon-path*']
   //      }
   //    },
   // },
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
    // {
    //   resolve: `gatsby-transformer-remark`,
    //   options: {
    //     plugins: [
    //       {
    //         resolve: `gatsby-remark-images`,
    //         options: {
    //           maxWidth: 600,
    //           // showCaptions: true,
    //           showCaptions: [`title`],
    //           markdownCaptions: true,
    //           backgroundColor: `transparent`,
    //           quality: 100,
    //           // disableBgImageOnAlpha: true,
    //         },
    //       },
    //     ],
    //   },
    // },
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
