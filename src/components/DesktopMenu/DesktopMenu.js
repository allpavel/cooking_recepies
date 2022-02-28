import React from 'react';
import styled from 'styled-components';
import Menu from '../Menu/Menu';

const Wrapper = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3rem;
    background-color: var(--navbar-and-footer-color-main);

    .active {
        background-color: var(--active-menu-color);
        color: var(--font-color-hover);
        border-bottom: 3px solid black;
    }

    @media screen and (max-width: 800px) {
        display: none;
    }
`;

const DestopMenu = () => {
    return (
        <Wrapper>
                <Menu />
        </Wrapper>
    );
};

export default DestopMenu;
