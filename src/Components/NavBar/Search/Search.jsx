import React, { useEffect, useState } from 'react';
import { MdClose } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { params } from '../../../Context/MyContext';
import axios from 'axios';
import './Search.css';

const Search = ({ setShowSearch }) => {

    const [query, setQuery] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const navigate = useNavigate();

    const fetchSearchProduct = async () => {
        try {
            if (!query.length) {
                setSearchResult([]);
            } else {
                const { data } = await axios.get(`${import.meta.env.VITE_APP_DEV_URL}/api/products?populate=*&filters[title][$contains]=${query}`, params);
                setSearchResult(data);
            }
        } catch (error) {
            console.log(`Some error occured ${error}`);
        }
    }

    useEffect(() => {
        fetchSearchProduct();
    }, [searchResult]);

    return (
        <div className='search-model'>
            <div className='form-field'>
                <input type="text"
                    autoFocus
                    placeholder='SEARCH FOR PRODUCTS'
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <MdClose className='search-close-btn' onClick={() => setShowSearch(false)} />
            </div>

            <div className='search-result-content'>
                <div className='search-results'>
                    {
                        searchResult?.data?.map((item) => (
                            <div key={item.id} className='search-result-item' onClick={() => navigate(`/product/${item.id}`)}>
                                <div className='search-img-container'>
                                    <img src={import.meta.env.VITE_APP_DEV_URL+item.attributes.img.data[0].attributes.url} alt="Image Here" />
                                </div>
                                <div className='search-prod-details'>
                                    <div className='search-name'>{item.attributes.title}</div>
                                    <div className='search-desc'>{item.attributes.desc}</div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Search;