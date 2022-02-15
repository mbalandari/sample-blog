import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li className='brand'><Link to="/">brand</Link></li>
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