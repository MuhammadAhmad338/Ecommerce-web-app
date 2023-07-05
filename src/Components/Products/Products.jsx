import React, { useContext } from 'react';
import Card from '../Widgets/Card';
import { ProductContext } from '../Context/ProductContext';

const Products = () => {

    const { products } = useContext(ProductContext);
    
    return (
        <div className='products'>
            <p className='all__products'>All Products</p>
            <div className='product__cards'>
                {products.map((product) => (
                    <Card product={product} />
                ))}
            </div>
        </div>
    );
}

export default Products;