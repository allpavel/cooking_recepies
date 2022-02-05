import { Link } from 'gatsby';
import React from 'react';

export default function Navbar() {
    return (
        <nav className='navbar_list'>
            <Link to='/' className='navbar_item' activeClassName='active'>Home</Link>
            <Link to='/recipes' className='navbar_item' activeClassName='active'>Recipe</Link>
            <Link to='/tags' className='navbar_item' activeClassName='active'>Tags</Link>
            <Link to='/about' className='navbar_item' activeClassName='active'>About</Link>
        </nav>
    )
};