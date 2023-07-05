import React, { useContext } from 'react';
import { ProductContext } from '../Context/ProductContext';

const Card = ({ product }) => {
    
    const {addToCart} = useContext(ProductContext);

    const handleTheCart = () => {
        addToCart(product);
    }

    return (
        <div className="product__card">
            <img src={product.imageUrl[0]} alt="Product Image"/>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button onClick={handleTheCart}>Add To Cart</button>
        </div>
    );
}

export default Card;