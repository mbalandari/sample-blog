import React from 'react'
import './Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li className='brand'>brand</li>
                <li className='nav-items'>
                    <li>blogs</li>
                    <li>about</li>
                    <li>contact</li>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar