import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import styled, { createGlobalStyle } from 'styled-components';
import '../../assets/css/normalize.css';
import MontserratFont from '../../assets/fonts/Montserrat-Light.woff2';

const Global = createGlobalStyle`
    @font-face {
        font-family: 'Montserrat';
        src: url(${MontserratFont}) format('woff2');
    }
    :root {
        --font-color-main: #60615f;
        --navbar-and-footer-color-main: #eeede7;

        --font-color-hover: #eeede7;
        --navbar-and-footer-color-hover: #d5d3d7;

        --active-menu-color: #868b8e;
    }

    * {
        box-sizing: border-box;
    }

    html,
    body {
        font-size: 16px;
        margin: 0;
        font-family: 'Montserrat', sans-serif;
        line-height: 140%;
    }
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;

export default function Layout({ children }) {
    return (
        <>
            <Global />
            <Wrapper>
                <Navbar />
                {children}
                <Footer />
            </Wrapper>
        </>
    );
}
