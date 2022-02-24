import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/Layout';
import TagsList from '../components/TagsList/TagsList';
import Seo from '../components/SEO/SEO';

const Wrapper = styled.main`
    flex: 1 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 2rem 2rem;
        width: 10rem;
        height: 7rem;
        text-align: center;
        background-color: var(--navbar-and-footer-color-main);
        border: 2px solid transparent;
        color: var(--font-color-main);
        text-transform: uppercase;
        text-decoration: none;
    }

    p {
      margin: 0 auto;
    }

    a:hover {
        background-color: var(--navbar-and-footer-color-hover);
        border: 2px solid var(--active-menu-color);
    }

    a:active {
        background-color: var(--active-menu-color);
        color: var(--font-color-hover);
    }
`;

export const query = graphql`
    {
        allContentfulRecipes {
            nodes {
                content {
                    tags
                }
            }
        }
    }
`;

const Tags = ({
    data: {
        allContentfulRecipes: { nodes: recipes }
    }
}) => {
    return (
        <Layout>
            <Seo title={"Tags"} />
            <Wrapper>
                <TagsList recipes={recipes} />
            </Wrapper>
        </Layout>
    );
};

export default Tags;
