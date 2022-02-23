import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Wrapper = styled.section`
    display: flex;
    width: 100%;
    margin-bottom: 1rem;
    justify-content: space-evenly;

    p {
        margin: 0 auto;
    }
    a {
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
    a:hover {
        background-color: var(--navbar-and-footer-color-hover);
        border: 2px solid var(--active-menu-color);
    }

    a:active {
        background-color: var(--active-menu-color);
        color: var(--font-color-hover);
    }
`;

const RecipeTags = ({ tags }) => {
    return (
        <Wrapper aria-label='Tags of this recipe'>
            {tags.map((tag, index) => (
                <Link to={`/tags/${tag.replace(/\s/g, '-')}`} aria-label={tag} key={index}>
                    <p>{tag}</p>
                </Link>
            ))}
        </Wrapper>
    );
};

export default RecipeTags;
