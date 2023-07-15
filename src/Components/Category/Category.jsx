import React, { useState, useEffect } from 'react';
import Products from '../Products/Products';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { params } from '../../Context/MyContext';
import './Category.css';

const Category = () => {

  const [filteredProducts, setFilteredProducts] = useState([]);
  const { id } = useParams();

  const filterProducts = async () => {
    try {
      const { data } = await axios
        .get(`${import.meta.env.VITE_APP_DEV_URL}/api/products?populate=*&[filters][categories][id]=${id}`, params);
      setFilteredProducts(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    filterProducts();
  }, []);

  return (
    <div className='category-main-content'>
      <div className='layout'>
        <div className='category-title'>
          {filteredProducts.data?.[0].attributes.categories.data?.[0].attributes.title}
        </div>
        <Products innerPage={true} products={filteredProducts} />
      </div>
    </div>
  );
}

export default Category;