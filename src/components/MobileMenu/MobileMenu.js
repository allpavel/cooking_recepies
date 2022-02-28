import React from 'react';
import styled from 'styled-components';
import Menu from '../Menu/Menu';

const Wrapper = styled.div`
    display: none;

    @media screen and (max-width: 800px) {
        display: flex;
    }
`;

const Burger = styled.div`
    width: 30px;
    height: 20px;
    position: relative;
    margin-right: 2rem;
    cursor: pointer;

    &:before {
        content: '';
        position: absolute;
        top: 0;
        width: 30px;
        height: 2px;
        background-color: black;
    }

    &:after {
        content: '';
        position: absolute;
        bottom: 0;
        width: 30px;
        height: 2px;
        background-color: black;
    }

    span {
        position: absolute;
        top: 9px;
        width: 30px;
        background-color: black;
        height: 2px;
    }
`;

const MobileMenu = ({ onClick, isOpen }) => {
    return (
        <Wrapper>
            <Burger onClick={onClick}>
                <span />
            </Burger>
            <Menu />
        </Wrapper>
    );
};

export default MobileMenu;
