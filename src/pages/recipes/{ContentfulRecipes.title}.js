import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../../components/Layout/Layout';

export const query = graphql`
    query getSingleRecipe($title: String) {
        contentfulRecipes(title: { eq: $title }) {
            title
            cookingTime
            content {
                ingredients
                instructions
                tags
                tools
            }
            description {
                description
            }
            image {
                gatsbyImageData(placeholder: BLURRED)
            }
            prepTime
            servings
        }
    }
`;

const RecipeTemplate = ({
    data: {
        contentfulRecipes: {
            title,
            cookingTime,
            prepTime,
            servings,
            content: { ingredients, instructions, tags, tools },
            description: { description },
            image
        }
    }
}) => {
    const recipeImage = getImage(image);
    return (
        <Layout>
            <div>
                <h1>{title}</h1>
                <p>{cookingTime}</p>
                <p>{description}</p>
                <GatsbyImage image={recipeImage} alt={title} />
                <p>{prepTime}</p>
                <p>{servings}</p>
                <p>{ingredients}</p>
                <p>{instructions}</p>
                <p>{tags}</p>
                <p>{tools}</p>
            </div>
        </Layout>
    );
};

export default RecipeTemplate;
