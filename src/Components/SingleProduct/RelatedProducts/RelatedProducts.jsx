import React, { useEffect, useState } from 'react';
import Products from '../../Products/Products';
import './RelatedProducts.css';
import { params } from '../../../Context/MyContext';
import axios from 'axios';

const RelatedProducts = ({ productId, categoryId }) => {

  const [myRelatedProducts, setRelatedProducts] = useState([]);
  const relatedProduct = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_APP_DEV_URL}/api/products?populate=*&filters[id][$ne]=${productId}&filters[categories][id]=${categoryId}&pagination[start]=0&pagination[limit]=4`, params);
      setRelatedProducts(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    relatedProduct();
  }, [myRelatedProducts]);

  return (
    <div className='related-products'>
      <Products headingText="Related Products" products={myRelatedProducts} />
    </div >
  );
}

export default RelatedProducts;