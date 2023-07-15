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
                        productData={item.attributes}
                        productId={item.id} />
                ))}
            </div>
        </div>
    );
}

export default Products;