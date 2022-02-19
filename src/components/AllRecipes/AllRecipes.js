import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import RecipesList from '../RecipesList/RecipesList';

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

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
                    gatsbyImageData(
                        layout: CONSTRAINED
                        placeholder: TRACED_SVG
                        width: 200
                    )
                }
                content {
                    tags
                }
            }
        }
    }
`;

const AllRecipes = () => {
    const data = useStaticQuery(query);
    const recipes = data.allContentfulRecipes.nodes;
    return (
        <Wrapper>
            <h4>All Recipes</h4>
            <RecipesList recipes={recipes} />
        </Wrapper>
    );
};

export default AllRecipes;
