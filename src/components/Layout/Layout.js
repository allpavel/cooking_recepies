import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import '../../assets/css/normalize.css'
import '../../assets/css/global.css';

export default function Layout({ children }) {
    return (
        <section className='page_wrapper'>
            <Navbar />
            {children}
            <Footer />
        </section>
    )
};