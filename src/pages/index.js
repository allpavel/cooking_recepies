import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import HeroImage from '../components/HeroImage/HeroImage';
import Layout from '../components/Layout/Layout';
import RecipesList from '../components/RecipesList/RecipesList';
import TagsList from '../components/TagsList/TagsList';
import Seo from '../components/SEO/SEO';

const Wrapper = styled.main`
    display: flex;
    flex-direction: column;

    section {
        display: flex;
    }

    .tags a {
        height: 2rem;
        width: 10rem;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        text-transform: uppercase;
        margin: 1rem;
    }

    .tags p {
        margin: 0 0.2rem 0;
    }

    .tags a:hover {
        background-color: var(--navbar-and-footer-color-hover);
        border: 2px solid var(--active-menu-color);
    }

    .tags a:active {
        background-color: var(--active-menu-color);
        color: var(--font-color-hover);
    }

    .tags a:visited {
        color: inherit;
    }
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
            <Seo title={'Home'} />
            <Wrapper>
                <HeroImage />
                <h2>You might be interested in:</h2>
                <section>
                    <div className="tags">
                        <TagsList recipes={recipes} />
                    </div>
                    <RecipesList recipes={recipes} />
                </section>
            </Wrapper>
        </Layout>
    );
}
