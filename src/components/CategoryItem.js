import React from 'react'
import './CategoryItem.css'
import cat1 from '../assets/img/pic1.jpg'
import { Link } from 'react-router-dom'

const CategoryItem = () => {
    return (
        <div className='categoryItem'>
            <img src={cat1} alt="cat1" />
            <h2><Link to="/category">Title</Link></h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, repellendus.</p>
        </div>
    )
}

export default CategoryItem