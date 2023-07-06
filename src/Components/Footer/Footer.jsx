import React from 'react';
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <div className='col'>
          <div className='title'>
            About
          </div>
          <div className='text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet mi
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet mi
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet mi
          </div>
        </div>
        <div className='col'>
          <div className='title'>
            Contact
          </div>
          <div className='c-item'>
            <FaLocationArrow />
            <div className='text'>
              Yasreb Colony, House no p72 Street 3, 4
            </div>
          </div>
          <div className='c-item'>
            <FaMobileAlt />
            <div className='text'>
              Phone: 03336523303
            </div>
          </div>
          <div className='c-item'>
            <FaEnvelope />
            <div className='text'>
              Email: ahmadmuhammad.7700@gmail.com
            </div>
          </div>
        </div>
        <div className='col'>
          <span className='title'>Categories</span>
          <span className='text'>HeadPhones</span>
          <span className='text'>Smart Watches</span>
          <span className='text'>Bluetooth Speakers</span>
          <span className='text'>Wireless Earbuds</span>
          <span className='text'>Home Theatre</span>
          <span className='text'>Projectors</span>
        </div>
        <div className='col'>
          <span className='title'>Pages</span>
          <span className='text'>Home</span>
          <span className='text'>About</span>
          <span className='text'>Privacy Policy</span>
          <span className='text'>Returns</span>
          <span className='text'>Terms and Conditions</span>
          <span className='text'>Contact US</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;