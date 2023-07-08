import React from 'react';
import CartItem from './CartItem/CartItem';
import './Cart.css';
import { MdClose } from 'react-icons/md';
import { BsCartX } from 'react-icons/bs';

const Cart = ({ setShowCart }) => {
  return (
    <div className='cart-panel'>
      <div className='opac-layer'></div>
      <div className='cart-content'>

        <div className='cart-header'>
          <span className='heading'>Shopping Cart</span>
          <span className='close-btn' onClick={() => setShowCart(false)}>
            <MdClose />
            <span className='close-btn-text'>Close</span>
          </span>
        </div>

        {/*
        <div className='empty-cart'>
          <BsCartX />
          <span className='empty-cart-text'>No Products in the cart</span>
          <button className='return-cta'>Return To Shop</button>
        </div>
       */}

        <>
          <CartItem />
          <div className='cart-footer'>
            <div className='subtotal'>
              <div className='subtotal-text'>SubTotal</div>
              <div className='subtotal-total'>Total </div>
            </div>
            <div className='checkout-button'>
              <button className='checkout-button-cta'>CheckOut</button>
            </div>
          </div>
        </>

      </div>
    </div>
  );
}

export default Cart;