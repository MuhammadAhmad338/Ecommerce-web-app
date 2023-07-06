import React from 'react';
import BannerImg from "../../assets/banner-img.png";
import './Category.css';

const Category = () => {

  const lists = [ BannerImg, BannerImg, BannerImg, BannerImg];

  return (
    <div className='shop-by-category'>
      <div className='categories'>
        {
          lists.map((image, index) => (
            <img key={index} src={image} alt="Images" />
          ))
        }
      </div>
    </div>
  );
}

export default Category;