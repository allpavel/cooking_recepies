import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../../components/Layout/Layout';
import RecipeDetails from '../../components/RecipeDetails/RecipeDetails';
import RecipeToolsAndIngredients from '../../components/RecipeToolsAndIngredients/RecipeToolsAndIngredients';
import RecipeDescription from '../../components/RecipeDescription/RecipeDescription';
import RecipeInstruction from '../../components/RecipeInstruction/RecipeInstruction';
import RecipeTags from '../../components/RecipeTags/RecipeTags';
import Seo from '../../components/SEO/SEO';

const Wrapper = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 0 auto;

    img {
        width: 400px;
        height: auto;

        @media screen and (max-width: 600px) {
            width: 100%;
            height: auto;
    }
    }
`;

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
            <Seo title={title} />
            <Wrapper>
                <h1>{title}</h1>
                <GatsbyImage image={recipeImage} alt={`image of ${title}`} title={title} />
                <RecipeDetails servings={servings} cookingTime={cookingTime} prepTime={prepTime} />
                <RecipeDescription description={description} />
                <RecipeToolsAndIngredients tools={tools} ingredients={ingredients} />
                <RecipeInstruction instructions={instructions} />
                <RecipeTags tags={tags} />
            </Wrapper>
        </Layout>
    );
};

export default RecipeTemplate;
