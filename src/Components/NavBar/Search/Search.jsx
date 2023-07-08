import React from 'react';
import { MdClose } from 'react-icons/md';
import './Search.css';

const Search = ({ setShowSearch }) => {
    return (
        <div className='search-model'>
            <div className='form-field'>
                <input type="text"
                    autoFocus
                    placeholder='Search for products'
                />
                <MdClose onClick={() => setShowSearch(false)} />
            </div>
        </div>
    );
}

export default Search;