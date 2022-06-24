import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <nav >
            <div className='headerNav'>
                <a href="/Laptop">Laptop</a>
                <a href="/Orders">Orders</a>
                <a href="/About">About</a>
            </div>
            <div className='headerHeading'>
                <h2>Welcome to Laptop Corner</h2>
            </div>
        </nav>
    );
};

export default Header;