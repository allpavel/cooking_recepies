import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import styled from 'styled-components';
import '../../assets/css/normalize.css'
import '../../assets/css/global.css';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
`;

export default function Layout({ children }) {
    return (
        <Wrapper className='flex-container'>
            <Navbar />
            {children}
            <Footer />
        </Wrapper>
    )
};