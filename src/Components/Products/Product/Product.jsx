import React from 'react';
import ProductImg from '../../../assets/products/earbuds-prod-1.webp';
import './Product.css';

const Product = () => {
  return (
    <div className='product-card'>
        <div className='product-thumbnail'>
           <img src={ProductImg} alt="Product Image" />
        </div>
        <div className='product-details'>
           <span className='product-name'>Name</span>
           <span className='product-price'>$499</span>
        </div>
    </div>
  );
}

export default Product;