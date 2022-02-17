import { Link } from 'gatsby';
import React from 'react';
import { GrMenu } from 'react-icons/gr';
import { IconContext } from 'react-icons';
import logo from '../../assets/images/logo.png';

export default function Navbar() {
    return (
        <nav className="navbar_list">
            <div className="navbar-links">
                <Link to="/" className="navbar_item" activeClassName="active">
                    Home
                </Link>
                <Link
                    to="/recipes"
                    className="navbar_item"
                    activeClassName="active"
                >
                    Recipe
                </Link>
                <Link
                    to="/tags"
                    className="navbar_item"
                    activeClassName="active"
                >
                    Tags
                </Link>
                <Link
                    to="/about"
                    className="navbar_item"
                    activeClassName="active"
                >
                    About
                </Link>
                <Link
                    to="/contact"
                    className="navbar_item"
                    activeClassName="active"
                >
                    Contact
                </Link>
                <IconContext.Provider value={{ size: '2rem' }}>
                    <div class="burger">
                        <GrMenu />
                    </div>
                </IconContext.Provider>
            </div>
        </nav>
    );
}
