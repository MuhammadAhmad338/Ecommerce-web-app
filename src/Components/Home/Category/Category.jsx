import React from 'react';
import BannerImg from "../../../assets/category/cat-1.jpg";
import BannerImg1 from "../../../assets/category/cat-2.jpg";
import BannerImg2 from "../../../assets/category/cat-3.jpg";
import BannerImg3 from "../../../assets/category/cat-4.jpg";
import './Category.css';

const Category = () => {

  const lists = [BannerImg, BannerImg1, BannerImg2, BannerImg3];

  return (
    <div className='shop-by-category'>
      <div className='categories'>
        {
          lists.map((image, index) => (
            <div className='category'>
              <img key={index} src={image} alt="Images" />
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Category;