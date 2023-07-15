import React, { useContext } from 'react';
import CartItem from './CartItem/CartItem';
import { MdClose } from 'react-icons/md';
import { BsCartX } from 'react-icons/bs';
import { Context } from '../../Context/MyContext';
import { loadStripe } from '@stripe/stripe-js';
import { makePaymentRequest } from '../../Context/MyContext';
import './Cart.css';

const Cart = ({ setShowCart }) => {

  const { cartSubTotal, cartItems } = useContext(Context);
  const stripePromise = loadStripe(import.meta.env.VITE_APP_STRIPE_PUBLISHABLE_KEY);

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await makePaymentRequest.post('/api/orders', {
        products: cartItems,
      });

      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id
      });

    } catch (error) {
      console.log(error);
    }
  }

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
              <button className='checkout-button-cta' onClick={handlePayment}>CheckOut</button>
            </div>
          </div>
        </>
        }


      </div>
    </div>
  );
}

export default Cart;