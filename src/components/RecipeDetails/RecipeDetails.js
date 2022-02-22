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

    article span:first-child {
        text-transform: uppercase;
        font-weight: bold;
        margin-bottom: 0.4rem;
    }
`;

const RecipeDetails = ({ servings, prepTime, cookingTime }) => {
    return (
        <Wrapper>
            <article>
                <span>Servings:</span>
                <span>{servings}</span>
            </article>
            <article>
                <span>Prep Time:</span>
                <span>{timeTransform(prepTime)}</span>
            </article>
            <article>
                <span>Cook Time:</span>
                <span>{timeTransform(cookingTime)}</span>
            </article>
            <article>
                <span>Total time:</span>
                <span>{timeTransform(prepTime + cookingTime)}</span>
            </article>
        </Wrapper>
    );
};

export default RecipeDetails;
