import { Link } from 'gatsby';
import React from 'react';

export default function Navbar() {
    return (
        <nav className="navbar_list">
            <div className="navbar-links">
                <Link to="/" className="navbar_item" activeClassName="active">
                    Home
                </Link>
                <Link to="/recipes" className="navbar_item" activeClassName="active">
                    Recipes
                </Link>
                <Link to="/tags" className="navbar_item" activeClassName="active">
                    Tags
                </Link>
                <Link to="/about" className="navbar_item" activeClassName="active">
                    About
                </Link>
                <Link to="/contact" className="navbar_item" activeClassName="active">
                    Contact
                </Link>
            </div>
        </nav>
    );
}
