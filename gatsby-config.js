require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
    siteMetadata: {
        title: 'Cooking Recipes',
        description: 'Nice and clean recipes site',
        author: '@pavelalloyarov'
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `recipes`,
                path: `${__dirname}/src/assets/images/recipes`
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `styles`,
                path: `${__dirname}/src/assets/css/`
            }
        },
        {
            resolve: `gatsby-plugin-styled-components`,
            options: {}
        },
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: `dc8kjptgabcu`,
                accessToken: process.env.API_KEY
            }
        }
    ]
};
