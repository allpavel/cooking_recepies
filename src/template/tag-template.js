import React from 'react';
import { graphql } from 'gatsby';
import RecipesList from '../components/RecipesList/RecipesList';
import Seo from '../components/SEO/SEO';

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
    const tagName = pageContext.tag[0].toUpperCase() + pageContext.tag.slice(1);
    return (
        <>
            <Seo title={tagName} />
            <h1>{pageContext.tag}</h1>
            <RecipesList recipes={recipes} />
        </>
    );
};

export default TagTemplate;
