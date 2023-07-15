import React, { useEffect } from 'react';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import Products from '../Products/Products';
import { useContext } from 'react';
import { Context } from '../../Context/MyContext';
import './Home.css';

const Home = () => {
    const { products, fetchProducts } = useContext(Context);
    
    useEffect(() => {
      fetchProducts();
    }, []);

    return (
        <div>
            <Banner />
            <div className='main-content'>
                <div className='layout'>
                    <Category />
                    <Products headingText="Popular Products" products={products} />
                </div>
            </div>
        </div>
    );
}

export default Home;