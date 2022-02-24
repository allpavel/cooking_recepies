require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
    siteMetadata: {
        title: 'Cooking Recipes',
        description: 'It is a collection of histories and recipes of traditional dishes popular in different cuisines of the world.',
        author: 'Pavel Alloyarov'
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
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: `dc8kjptgabcu`,
                accessToken: process.env.API_KEY
            }
        },
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-react-helmet`
    ]
};
