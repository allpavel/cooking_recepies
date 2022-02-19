import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import styled from 'styled-components';
import '../../assets/css/normalize.css'
import '../../assets/css/global.css';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;

export default function Layout({ children }) {
    return (
        <Wrapper>
            <Navbar />
            {children}
            <Footer />
        </Wrapper>
    )
};