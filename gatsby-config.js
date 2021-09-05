require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: "https://jameshamann.net",
    title: "James Hamann - Web Developer",
    titleTemplate: "%s - James Hamann",
    description: "I am a web developer who loves to create cool things.",
    image: '/open_graph_image.jpg',
    twitterUsername: '@JamesHamann19'
  },
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-mailgo",
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "9yuvjblo",
        dataset: "production",
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-KC1C1F9DDL",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
