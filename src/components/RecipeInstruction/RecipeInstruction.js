import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
    margin: 0 3rem;

    h2 {
        font-size: 1.2rem;
        margin: 0;
    }

    ul {
        padding-left: 1.5rem;
    }

    li {
        margin-bottom: 1rem;
    }

    @media screen and (max-width: 600px) {
        margin: 0 1.5rem;
    }
`;

const RecipeInstruction = ({ instructions }) => {
    return (
        <Wrapper aria-labelledby="instructions">
            <h2 id='instructions'>Instructions:</h2>
            <ul>{instructions.map((instruction, index) => (
                <li key={index}>
                    <b>Step {index + 1}</b>: {instruction}
                </li>
            ))}
            </ul>
        </Wrapper>
    );
};

export default RecipeInstruction;
