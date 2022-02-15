import React from 'react'
import './BlogCard.css'
import pic1 from '../assets/img/pic1.jpg';
import { Link } from 'react-router-dom';

const BlogCard = () => {
    return (
        <div className='blogcard'>
            <img src={pic1} alt="pic1" />
            <h2><Link to='/blog'>Title</Link></h2>
        </div>
    )
}

export default BlogCard