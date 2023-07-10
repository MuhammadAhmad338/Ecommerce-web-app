import React from 'react';
import { useContext } from 'react';
import { Context } from '../../../Context/MyContext';
import './Category.css';

const Category = () => {
  const { categories } = useContext(Context);
  return (
    <div className='shop-by-category'>
      <div className='categories'>
        {
          categories.data?.map((item) => (
            <div key={item.id} className='category'>
              <img src={import.meta.env.VITE_APP_DEV_URL + item.attributes.img.data.attributes.url} alt="Images" />
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Category;