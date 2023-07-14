import React, { useEffect, useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FaTwitter, FaLinkedinIn, FaFacebookF, FaInstagram, FaPinterest } from 'react-icons/fa';
import RelatedProducts from './RelatedProducts/RelatedProducts';
import { params } from '../../Context/MyContext';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './SingleProduct.css';

const SingleProduct = () => {

  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  const decreaseQuantity = () => {
    if (quantity === 1) return;
    setQuantity((prevQuantity) => prevQuantity - 1);
  }

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  }

  const singleProduct = async () => {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_APP_DEV_URL}/api/products?populate=*&[filters][id]=${id}`, params);
      setProduct(data.data[0].attributes);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    singleProduct();
  }, []);

  return (
    <div className='single-product-main-content'>
      <div className='layout'>
        <div className='single-product-page'>

          <div className='left'>
            <img src={import.meta.env.VITE_APP_DEV_URL + product.img?.data[0].attributes.url} alt="" />
          </div>

          <div className='right'>
            <span className='name'>{product.title}</span>
            <span className='price'>{product.price}</span>
            <span className='desc'>{product.desc}</span>

            <div className='cart-buttons'>
              <div className='quantity-buttons'>
                <span onClick={decreaseQuantity}>-</span>
                <span>{quantity}</span>
                <span onClick={increaseQuantity}>+</span>
              </div>
              <button className='add-to-cart-button'>
                <AiOutlineShoppingCart size={20} />
                ADD TO CART
              </button>
            </div>

            <span className='divider' />

            <div className='info-item'>
              <span className='text-bold'>
                Category:
                <span>Headphones</span>
              </span>
              <span className='text-bold'>
                Share:
                <span className='social-icons'>
                  <FaFacebookF size={16} />
                  <FaTwitter size={16} />
                  <FaInstagram size={16} />
                  <FaLinkedinIn size={16} />
                  <FaPinterest size={16} />
                </span>
              </span>
            </div>
          </div>
        </div>
        <RelatedProducts />
      </div>
    </div>
  );
}

export default SingleProduct;