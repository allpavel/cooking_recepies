import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.nav`
    background-color: var(--navbar-and-footer-color-main);
`;

const NavBarLinks = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3rem;
    margin-left: 3rem;

    .active {
        background-color: var(--active-menu-color);
        color: var(--font-color-hover);
        border-bottom: 3px solid black;
    }
`;

const NavbarItem = styled(Link)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0em 2em;
    height: 100%;
    width: 8em;
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

    a {
        color: var(--font-color-main);
        text-decoration: none;
        height: auto;
    }
    &:hover a {
        color: var(--font-color-hover);
        text-decoration: none;
    }
`;

export default function Navbar() {
    return (
        <Wrapper>
            <NavBarLinks>
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
            </NavBarLinks>
        </Wrapper>
    );
}
