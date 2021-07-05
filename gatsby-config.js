module.exports = {
  siteMetadata: {
    title: `Bruno Guimarães`,
    description: `Personal website from someone who is passionate for technology and love to come up with smart solutions to our everyday problems.`,
    url: "https://www.brunomoraesguimaraes.com.br",
    image: `src/images/bgny.jpg`, 
    twitterUsername: "@brunaodev",
    author: `@brunaodev`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
          include: /\.inline\.svg$/,
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `bruno-personal-site`,
        short_name: `bruno`,
        start_url: `/`,
        background_color: `#021E52`,
        theme_color: `#021E52`,
        display: `minimal-ui`,
        icon: `src/images/programmer-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdown-pages`,
        name: `markdown-pages`,
      },
    },
    `gatsby-transformer-remark`,
  ],
}
