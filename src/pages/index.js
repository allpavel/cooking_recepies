import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import HeroImage from '../components/HeroImage/HeroImage';
import Layout from '../components/Layout/Layout';
import RecipesList from '../components/RecipesList/RecipesList';

const Wrapper = styled.main`
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
`;

const query = graphql`
    {
        allContentfulRecipes(filter: { featured: { eq: true } }) {
            nodes {
                id
                title
                prepTime
                cookingTime
                servings
                image {
                    gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG, width: 200)
                }
                content {
                    tags
                }
            }
        }
    }
`;

export default function Home() {
    const data = useStaticQuery(query);
    const recipes = data.allContentfulRecipes.nodes;
    return (
        <Layout>
            <Wrapper>
                <section>
                    <h2>You might be interested in:</h2>
                    <RecipesList recipes={recipes} />
                </section>
            </Wrapper>
        </Layout>
    );
}
