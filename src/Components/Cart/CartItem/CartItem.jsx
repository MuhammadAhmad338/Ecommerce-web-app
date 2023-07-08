import React from 'react';
import prod from '../../../assets/products/earbuds-prod-4.webp';
import { MdClose } from 'react-icons/md';
import './CartItem.css';

const CartItem = () => {
    return (
        <div className='cart-products'>
            <div className='cart-product'>
                
                <div className='img-container'>
                    <img src={prod} alt="" />
                </div>
                
                <div className='product-details'>
                    <span className='cart-product-name'>Product Name</span>
                    <MdClose className='product-close-btn'/>
                    <div className='cart-quantity-buttons'>
                        <span>-</span>
                        <span>3</span>
                        <span>+</span>
                    </div>
                    <div className='product-quantity-text'>
                        <span>3</span>
                        <span>X</span>
                        <span className='highlight'>1144</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItem;