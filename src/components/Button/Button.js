import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.button`
    width: 6rem;
    height: 2rem;
    background-color: var(--navbar-and-footer-color-main);
    border: 2px solid var(--navbar-and-footer-color-main);

    &:hover {
    background-color: var(--navbar-and-footer-color-hover);
    }

    &:active {
    background-color: var(--active-menu-color);
    color: var(--font-color-hover);
    }
`;


export default function Button({ type, title, styles, onClick }) {
    return (
        <Wrapper type={type} className={styles} onClick={onClick}>{title}</Wrapper>
    )
}