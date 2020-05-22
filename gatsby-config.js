module.exports = {
  siteMetadata: {
    title: `aijs.rocks`,
    twitterUsername: "@aijavascript",
    image: "/images/banner.png",
    url: "https://aijs.rocks",
    description:
      "A curated collection of inspirational AI-powered JavaScript apps",
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
        displayName: true,
      },
    },
    `gatsby-transformer-sharp`,
    // `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
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
              wrapperStyle: "text-align: center;",
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static",
            },
          },
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-120910098-1",
        // Puts tracking script in the head instead of the body
        head: true,
      },
    },
  ],
};
