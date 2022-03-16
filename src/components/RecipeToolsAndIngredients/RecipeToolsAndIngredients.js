import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
    place-items: center;
    width: 100%;
    margin: 2rem 3rem;


    article span:first-child {
        text-transform: uppercase;
        font-weight: bold;
        margin-bottom: 0.4rem;
    }

    article h2 {
        font-size: 1.2rem;
        text-transform: uppercase;
        font-weight: bold;
        margin-top: 0;
        margin-bottom: 0.4rem;
    }

    article ul {
        padding-left: 1rem;
    }



    @media screen and (max-width: 600px) {
        margin: 0 2rem;

        ul {
        margin-left: 1.5rem;
    }
    }
`;

const RecipeToolsAndIngredients = ({ tools, ingredients }) => {
    return (
        <Wrapper aria-label="Lists of Tools and Ingredients">
            <article aria-labelledby="tools">
                <h2 id="tools">Tools:</h2>
                <ul>
                    {tools.map((tool, index) => (
                        <li key={index}>{tool}</li>
                    ))}
                </ul>
            </article>
            <article aria-labelledby="ingredients">
                <h2 id="ingredients">Ingredients:</h2>
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
