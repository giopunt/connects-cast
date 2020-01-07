module.exports = {
  siteMetadata: {
    title: `Connects Cast`,
    description: `Connects Cast | Welcome to the new wave of influential sound`,
    author: `@seenconnects`,
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `insights`,
        path: `${__dirname}/insights/`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `Connects Cast`,
        start_url: `/`,
        background_color: `#5bbad5`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `static/images/android-chrome-512x512.png`,
      },
    }
  ],
}
