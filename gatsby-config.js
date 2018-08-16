module.exports = {
  siteMetadata: {
    title: `aijs.rocks`
  },
  plugins: [
    // {
    //   resolve: `gatsby-plugin-typography`,
    //   options: { omitGoogleFont: true },
    // },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: true
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-prismjs`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: "text-align: center;"
            }
          },
          "gatsby-remark-copy-linked-files"
        ]
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-twitter`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "120910098",
        head: false,
      },
    },
  ]
};
