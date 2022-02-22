import React from 'react';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../../components/Layout/Layout';
import { timeTransform } from '../../utils/timeTransform';

const Wrapper = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 1280px;
    margin: 0 auto;

    img {
        width: 50vw;
        height: auto;
    }

    .recipe-details {
        display: flex;
        justify-content: space-evenly;
        border-top: 2px solid var(--font-color-main);
        border-bottom: 2px solid var(--font-color-main);
        width: 100%;
        margin: 2rem 0;
    }

    .recipe-details article {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 1rem 0;
    }

    .recipe-details article span:first-child,
    .tools-ingredients-container article span:first-child {
        text-transform: uppercase;
        font-weight: bold;
        margin-bottom: 0.4rem;
    }

    .tools-ingredients-container {
        width: 100%;
        margin: 2rem 0;
        display: flex;
        justify-content: space-around;
    }

    .tools-ingredients-container ul {
        margin-bottom: 0;
    }

    .instructions,
    .instructions h4 {
        margin: 0;
    }

    .instructions p {
        margin-top: 0.5rem;
        margin-bottom: 1.5rem;
    }

    .tags {
        display: flex;
        width: 100%;
        margin-bottom: 1rem;
        justify-content: space-evenly;
    }

    .tags a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 2rem 2rem;
        width: 10rem;
        height: 3rem;
        text-align: center;
        background-color: var(--navbar-and-footer-color-main);
        border: 2px solid transparent;
        color: var(--font-color-main);
        text-transform: uppercase;
        text-decoration: none;
    }

    .tags p {
      margin: 0 auto;
    }

    .tags a:hover {
        background-color: var(--navbar-and-footer-color-hover);
        border: 2px solid var(--active-menu-color);
    }

    .tags a:active {
        background-color: var(--active-menu-color);
        color: var(--font-color-hover);
    }
`;

export const query = graphql`
    query getSingleRecipe($title: String) {
        contentfulRecipes(title: { eq: $title }) {
            title
            cookingTime
            content {
                ingredients
                instructions
                tags
                tools
            }
            description {
                description
            }
            image {
                gatsbyImageData(placeholder: BLURRED)
            }
            prepTime
            servings
        }
    }
`;

const RecipeTemplate = ({
    data: {
        contentfulRecipes: {
            title,
            cookingTime,
            prepTime,
            servings,
            content: { ingredients, instructions, tags, tools },
            description: { description },
            image
        }
    }
}) => {
    const recipeImage = getImage(image);
    return (
        <Layout>
            <Wrapper>
                <h1>{title}</h1>
                <GatsbyImage image={recipeImage} alt={title} title={title} />
                <section className="recipe-details">
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
                </section>
                <section>{description}</section>
                <section className="tools-ingredients-container">
                    <article className="tools-list">
                        <span>Tools:</span>
                        <ul>
                            {tools.map((tool, index) => (
                                <li key={index}>{tool}</li>
                            ))}
                        </ul>
                    </article>
                    <article className="ingredients-list">
                        <span>Ingredients:</span>
                        <ul>
                            {ingredients.map((tool, index) => (
                                <li key={index}>{tool}</li>
                            ))}
                        </ul>
                    </article>
                </section>
                <section className="instructions">
                    {instructions.map((instruction, index) => (
                        <article>
                            <h4>Step {index + 1}:</h4>
                            <p>{instruction}</p>
                        </article>
                    ))}
                </section>
                <section className='tags'>
                    {tags.map((tag, index) => (
                        <Link to={`/tags/${tag.replace(/\s/g, '-')}`} key={index}>
                            <p>{tag}</p>
                        </Link>
                    ))}
                </section>
            </Wrapper>
        </Layout>
    );
};

export default RecipeTemplate;
