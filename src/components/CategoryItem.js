import React from 'react'
import './CategoryItem.css'
import cat1 from '../assets/img/pic1.jpg'

const CategoryItem = () => {
    return (
        <div className='category'>
            <img src={cat1} alt="cat1" />
            <h2>Title</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, repellendus.</p>
        </div>
    )
}

export default CategoryItem