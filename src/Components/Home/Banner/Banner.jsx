import React from 'react';
import BannerImg from '../../../assets/banner-img.png';
import './Banner.css';

const Banner = () => {
    return (
        <div className='hero-banner'>
            <div className='content'>
                <div className='text-content'>
                    <h1>SALES</h1>
                    <p>
                        Ahmad is a incredible boy with the unique
                        qualities and very hard working and dedicated.
                    </p>
                    <div className='ctas'>
                        <div className='ctas-banner'>Read More</div>
                        <div className='ctas-banner v2'>Shop Now</div>
                    </div>
                </div>
                <img className='banner-image' src={BannerImg} alt="" />
            </div>
        </div>
    );
}

export default Banner;