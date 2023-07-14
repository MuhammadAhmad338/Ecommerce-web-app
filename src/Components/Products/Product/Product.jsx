import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css';

const Product = ({ productData }) => {
  const { navigate } = useNavigate();
  
  return (
    <div className='product-card'>
      <div className='product-thumbnail'>
        <img src={import.meta.env.VITE_APP_DEV_URL + productData.img.data[0].attributes.url} alt="Product Image" />
      </div>
      <div className='product-details'>
        <span className='product-name'>{productData.title}</span>
        <span className='product-price'>${productData.price}</span>
      </div>
    </div>
  );
}

export default Product;