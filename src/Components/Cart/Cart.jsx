import React, { useContext } from 'react';
import CartItem from './CartItem/CartItem';
import { MdClose } from 'react-icons/md';
import { BsCartX } from 'react-icons/bs';
import { Context } from '../../Context/MyContext';
import './Cart.css';

const Cart = ({ setShowCart }) => {

  const { cartSubTotal, cartItems } = useContext(Context);
  console.log(cartItems.length);
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

        {!cartItems?.length && <div className='empty-cart'>
          <BsCartX />
          <span className='empty-cart-text'>No Products in the cart</span>
          <button className='return-cta'>Return To Shop</button>
        </div>}

        {!!cartItems?.length && <>
          <CartItem />
          <div className='cart-footer'>
            <div className='subtotal'>
              <div className='subtotal-text'>SubTotal</div>
              <div className='subtotal-total'> $ {cartSubTotal}</div>
            </div>
            <div className='checkout-button'>
              <button className='checkout-button-cta'>CheckOut</button>
            </div>
          </div>
        </>
        }


      </div>
    </div>
  );
}

export default Cart;