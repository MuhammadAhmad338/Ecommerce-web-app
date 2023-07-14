import Product from './Product/Product.jsx';
import './Products.css';

const Products = ({ innerPage, headingText, products }) => {
    return (
        <div className='products-container'>
            {!innerPage && <div className='section-heading'>{headingText}</div>}
            <div className='products'>
                {products?.data?.map((item) => (
                    <Product
                        key={item.id}
                        id={item.id}
                        productData={item.attributes} />
                ))}
            </div>
        </div>
    );
}

export default Products;