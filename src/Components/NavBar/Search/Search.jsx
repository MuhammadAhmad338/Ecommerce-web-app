import React from 'react';
import prod from '../../../assets/products/speaker-prod-2.webp';
import { MdClose } from 'react-icons/md';
import './Search.css';

const Search = ({ setShowSearch }) => {
    return (
        <div className='search-model'>
            <div className='form-field'>
                <input type="text"
                    autoFocus
                    placeholder='SEARCH FOR PRODUCTS'
                />
                <MdClose className='search-close-btn' onClick={() => setShowSearch(false)} />
            </div>

            <div className='search-result-content'>
                <div className='search-results'>
                    <div className='search-result-item'>
                        <div className='search-img-container'>
                           <img src={prod} alt="Image Here" />
                        </div>
                        <div className='search-prod-details'>
                           <div className='search-name'>Product Name</div>
                           <div className='search-desc'>Description</div> 
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Search;