require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `New Covenant Community Sentul`,
    author: {
      name: `New Covenant Community`,
      summary: `A vibrant community of followers of Christ in Sentul, Kuala Lumpur.`,
    },
    description: `A one-stop location for everything related to New Covenant Community in Sentul.`,
    siteUrl: `https://www.nccsentul.com/`,
    social: {
      facebook: `nccmalaysia`,
      youtube: `NCC Malaysia`,
      instagram: `nccmalaysia`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-youtube-v3`,
      options: {
        channelId: [`UCMPRCAVfEvwmpFR5BfGweGQ`],
        apiKey: process.env.GATSBY_YOUTUBE_API, 
        maxVideos: 10,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/gallery`,
        name: `gallery`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/site`,
        name: `site`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          // `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          `gatsby-plugin-netlify-cms`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     //trackingId: `ADD YOUR TRACKING ID HERE`,
    //   },
    // },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `New Covenant Community`,
        short_name: `NCC`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/ncc-logo.svg`,
        theme_color_in_head: false,
      },
    },
    `gatsby-plugin-react-helmet`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
