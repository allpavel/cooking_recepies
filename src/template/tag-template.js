import React from 'react';
import { graphql } from 'gatsby';
import RecipesList from '../components/RecipesList/RecipesList';

export const query = graphql`
    query GetRecipesByTag($tag: String) {
        allContentfulRecipes(sort: { fields: title, order: ASC }, filter: { content: { tags: { eq: $tag } } }) {
            nodes {
                id
                title
                servings
                prepTime
                cookingTime
                image {
                    gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
                }
            }
        }
    }
`;

const TagTemplate = ({ data, pageContext }) => {
    const recipes = data.allContentfulRecipes.nodes;
    return (
        <>
        <h1>{pageContext.tag}</h1>
        <RecipesList recipes={recipes} />
        </>
        
    );
};

export default TagTemplate;
