require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: "https://jameshamann.me",
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
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-T85D6SF",
  
        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,
        
        // Defaults to false
        enableWebVitalsTracking: true,
      },
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "9yuvjblo",
        dataset: "production",
        watchMode: true,
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
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
