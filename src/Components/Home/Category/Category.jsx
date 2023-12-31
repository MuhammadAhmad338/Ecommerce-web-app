import React, { useEffect } from 'react';
import { useContext } from 'react';
import { Context } from '../../../Context/MyContext';
import './Category.css';
import { useNavigate } from 'react-router-dom';

const Category = () => {
  const { categories, fetchCategories } = useContext(Context);
  const navigate = useNavigate();
  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className='shop-by-category'>
      <div className='categories'>
        {
          categories?.data?.map((item) => (
            <div key={item.id}
              className='category'
              onClick={() => navigate(`/category/${item.id}`)}
            >
              <img src={import.meta.env.VITE_APP_DEV_URL + item.attributes.img.data[0].attributes.url} alt="Images" />
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Category;