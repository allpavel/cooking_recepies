require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
    siteMetadata: {
        title: 'Cooking Recipes',
        description: 'Nice and clean recipes site',
        author: '@pavelalloyarov',
        person: { name: 'Pavel', age: 32 },
        simpleData: ['item1', 'item2'],
        complexData: [
            { name: 'Pavel', age: 32 },
            { name: 'Masha', age: 30 }
        ]
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
