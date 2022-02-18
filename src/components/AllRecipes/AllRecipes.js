import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import TagsList from '../TagsList/TagsList';
import RecipesList from '../RecipesList/RecipesList';

const query = graphql`
  {
    allContentfulRecipes {
      nodes {
        id
        title
        prepTime
        cookingTime
        servings
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
        content {
          tags
        }
      }
    }
  }
`

const AllRecipes = () => {
    const data = useStaticQuery(query);
    const recipes = data.allContentfulRecipes.nodes;
    return (
        <>
            <h4>All Recipes</h4>
            <TagsList recipes={recipes} />
            <RecipesList recipes={recipes} />
        </>
    )
}

export default AllRecipes;