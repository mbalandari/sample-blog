import React from 'react'
import './BlogCard.css'
import pic1 from '../assets/img/pic1.jpg';

const BlogCard = () => {
    return (
        <div className='blogcard'>
            <img src={pic1} alt="pic1" />
            <h2>Title</h2>
        </div>
    )
}

export default BlogCard