import React from 'react';
import styled from 'styled-components';
import { timeTransform } from '../../utils/timeTransform';

const Wrapper = styled.section`
    display: flex;
    justify-content: space-evenly;
    border-top: 2px solid var(--font-color-main);
    border-bottom: 2px solid var(--font-color-main);
    width: 100%;
    margin: 2rem 0;

    article {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 1rem 0;
    }

    article h2 {
        text-transform: uppercase;
        font-weight: bold;
        font-size: 1.2rem;
        margin-top: 0;
        margin-bottom: 0.4rem;
    }
`;

const RecipeDetails = ({ servings, prepTime, cookingTime }) => {
    return (
        <Wrapper aria-label='Recipe details'>
            <article aria-labelledby='servings'>
                <h2 id='servings'>Servings:</h2>
                <span>{servings}</span>
            </article>
            <article aria-labelledby='prepTime'>
                <h2 id='prepTime'>Prep Time:</h2>
                <span>{timeTransform(prepTime)}</span>
            </article>
            <article aria-labelledby='cookTime'>
                <h2 id='cookTime'>Cook Time:</h2>
                <span>{timeTransform(cookingTime)}</span>
            </article>
            <article aria-labelledby='totalTime'>
                <h2 id='totalTime'>Total time:</h2>
                <span>{timeTransform(prepTime + cookingTime)}</span>
            </article>
        </Wrapper>
    );
};

export default RecipeDetails;
