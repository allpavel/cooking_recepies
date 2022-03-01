import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const NavbarItem = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 8em;
    margin: 0 2rem;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    text-decoration: none;
    color: var(--font-color-main);
    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;

    &:hover {
        color: var(--font-color-main);
        background-color: var(--navbar-and-footer-color-hover);
        border-bottom: 3px solid var(--font-color-main);
    }

    @media screen and (max-width: 800px) {
        width: 100%;
        margin: 0 auto;
    }
`;

const Menu = () => {
    return (
        <>
            <NavbarItem to="/" activeClassName="active">
                Home
            </NavbarItem>
            <NavbarItem to="/recipes" activeClassName="active">
                Recipes
            </NavbarItem>
            <NavbarItem to="/tags" activeClassName="active">
                Tags
            </NavbarItem>
            <NavbarItem to="/about" activeClassName="active">
                About
            </NavbarItem>
            <NavbarItem to="/contact" activeClassName="active">
                Contact
            </NavbarItem>
        </>
    );
};

export default Menu;