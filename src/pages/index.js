import React from 'react';
import styled from 'styled-components';
import HeroImage from '../components/HeroImage/HeroImage';
import Layout from '../components/Layout/Layout';
import AllRecipes from '../components/AllRecipes/AllRecipes';

const Wrapper = styled.main`
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;

    .hero {
        position: relative;
        height: 50%;
    }

    .gatsby-image-wrapper {
        height: 100%;
    }

    .hero-text {
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.4);
        color: var(--font-color-hover);
        font-size: 2rem;
    }
`;

export default function Home() {
    return (
        <Layout>
            <Wrapper>
                <div className="hero">
                    <HeroImage />
                    <div className="hero-text">
                        <h1>Cooking Recipes</h1>
                        <h5>Food is a passion. Food is love.</h5>
                    </div>
                </div>
                <AllRecipes />
            </Wrapper>
        </Layout>
    );
}
