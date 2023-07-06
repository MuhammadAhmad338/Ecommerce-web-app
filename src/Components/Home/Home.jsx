import React from 'react';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import Products from '../Products/Products';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Banner />
            <div className='main-content'>
                <div className='layout'>
                    <Category />
                    <Products />
                </div>
            </div>
        </div>
    );
}

export default Home;