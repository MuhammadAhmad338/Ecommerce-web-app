import Product from './Product/Product.jsx';
import './Products.css';

const Products = () => {
    
    return (
        <div className='products-container'>
            <div className='section-heading'>All Products</div>
            <div className='products'>
               <Product />
               <Product />
               <Product />
               <Product />
               <Product />
               <Product />
               <Product />
               <Product />
            </div>
        </div>
    );
}

export default Products;