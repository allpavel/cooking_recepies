import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const Wrapper = styled.section`
    width: 100%;
    height: 40vh;
    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
`;

const HeroImage = () => {
    return (
        <Wrapper>
            <StaticImage src="../../assets/images/hero.jpg" alt="cooking-people" placeholder="blurred" layout='constrained' />
        </Wrapper>
    );
};

export default HeroImage;
