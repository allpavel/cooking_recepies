import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
    margin: 0 3rem;
    
    h2 {
        margin: 0;
        font-size: 1.2rem;
    }

    @media screen and (max-width: 600px) {
        margin: 0 1.5rem;
    }
`;

const RecipeDescription = ({ description }) => {
    return (
        <Wrapper aria-labelledby="description">
            <h2 id="description">Description:</h2>
            <p>{description}</p>
        </Wrapper>
    );
};

export default RecipeDescription;
