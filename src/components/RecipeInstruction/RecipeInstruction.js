import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
    margin: 0;

    h4 {
        margin: 0;
    }

    p {
        margin-top: 0.5rem;
        margin-bottom: 1.5rem;
    }
`;

const RecipeInstruction = ({ instructions }) => {
    return (
        <Wrapper>
            {instructions.map((instruction, index) => (
                <article>
                    <h4>Step {index + 1}:</h4>
                    <p>{instruction}</p>
                </article>
            ))}
        </Wrapper>
    );
};

export default RecipeInstruction;
