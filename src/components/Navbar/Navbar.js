import React from 'react';
import DestopMenu from '../DesktopMenu/DesktopMenu';
import MobileMenu from '../MobileMenu/MobileMenu';

export default function Navbar() {
    return (
        <div>
            <DestopMenu />
            <MobileMenu />
        </div>
    );
}
