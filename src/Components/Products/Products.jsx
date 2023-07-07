import Product from './Product/Product.jsx';
import './Products.css';

const Products = ({ innerPage }) => {
    
    return (
        <div className='products-container'>
            {!innerPage && <div className='section-heading'>All Products</div>}
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