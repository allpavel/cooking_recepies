import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    
    .recipes-list-image-container {
        display: flex;
        flex-direction: column;
        margin: 0 2rem 3rem;
    }

    p {
        margin-top: 0.5rem;
        margin-bottom: 0;
    }

    img {
        height: 200px;
        border-radius: 20px;
    }
`;

const RecipesList = ({ recipes = [] }) => {
    return (
        <Wrapper>
            {recipes.map(recipe => {
                const imageItem = getImage(recipe.image);
                return (
                    <article key={recipe.id} className="recipes-list-image-container">
                        <Link to={`/recipes/${recipe.title.toLowerCase().replace(/\s/g, '-')}/`}>
                            <GatsbyImage image={imageItem} alt={recipe.title} />
                            <p>{recipe.title}</p>
                        </Link>
                        <p>
                            <b>Preparation time:</b> {recipe.prepTime} min
                        </p>
                        <p>
                            <b>Cooking time:</b> {recipe.cookingTime} min
                        </p>
                        <p>
                            <b>Servings:</b> {recipe.servings}
                        </p>
                    </article>
                );
            })}
        </Wrapper>
    );
};

export default RecipesList;
