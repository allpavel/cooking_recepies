import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
    width: 100%;
    margin: 2rem 0;
    display: flex;
    justify-content: space-around;

    article span:first-child {
        text-transform: uppercase;
        font-weight: bold;
        margin-bottom: 0.4rem;
    }

    ul {
        margin-bottom: 0;
    }
`;

const RecipeToolsAndIngredients = ({ tools, ingredients }) => {
    return (
        <Wrapper>
            <article>
                <span>Tools:</span>
                <ul>
                    {tools.map((tool, index) => (
                        <li key={index}>{tool}</li>
                    ))}
                </ul>
            </article>
            <article>
                <span>Ingredients:</span>
                <ul>
                    {ingredients.map((tool, index) => (
                        <li key={index}>{tool}</li>
                    ))}
                </ul>
            </article>
        </Wrapper>
    );
};

export default RecipeToolsAndIngredients;
