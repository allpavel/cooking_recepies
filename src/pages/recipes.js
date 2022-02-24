import React from 'react';
import styled from 'styled-components';
import AllRecipes from '../components/AllRecipes/AllRecipes';
import Layout from '../components/Layout/Layout';
import Seo from '../components/SEO/SEO';

const Wrapper = styled.main`
    display: flex;
    flex: 1 0 auto;
`;

const Recipes = () => {
    return (
        <Layout>
            <Seo title={"Recipes"} />
            <Wrapper>
                <AllRecipes />
            </Wrapper>
        </Layout>
    );
};

export default Recipes;
