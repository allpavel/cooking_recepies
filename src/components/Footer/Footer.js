import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer`
    text-align: center;
    color: var(--font-color-main);
    background-color: var(--navbar-and-footer-color-main);
`;

export default function Footer() {
    return (
        <Wrapper>
            <p>&copy; Cooking recipes. Built with Gatsby by Pavel Alloyarov</p>
        </Wrapper>
    );
}
