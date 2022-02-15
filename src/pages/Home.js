import React from 'react'
import CategoryItem from '../components/CategoryItem'
import Hero from '../components/Hero'
import './Home.css'

const Home = () => {
    return (
        <div className='home'>
            <Hero />
            <div className="categories">
                <CategoryItem />
                <CategoryItem />
                <CategoryItem />
                <CategoryItem />
            </div>
        </div>
    )
}

export default Home