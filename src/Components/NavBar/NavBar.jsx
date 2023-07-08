import React from 'react';
import { CgShoppingCart } from 'react-icons/cg';
import { TbSearch } from 'react-icons/tb';
import { AiOutlineHeart } from 'react-icons/ai';
import Cart from '../Cart/Cart';
import Search from './Search/Search';
import { useState } from 'react';
import './NavBar.css';

const NavBar = () => {

    //Here we are using the useState hooks for the cart and search
    const [showState, setShowState] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    
    //Here we are handling the state of the cart
    const handleClick = () => {
        if (showState) {
            setShowState(false)
        } else {
            setShowState(true);
        }
    }

    //Here we are handle the state of the search 
    const handleSearch = () => {
        if (showSearch) {
            setShowSearch(false);
        } else {
            setShowSearch(true);
        }
    }

    return (
        <>
            <header className='main-header'>
                <div className='header-content'>
                    <ul className='left-navbar'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Categories</li>
                    </ul>
                    <div className='center'>JSDEVSTORE</div>
                    <div className='right-navbar'>
                        <TbSearch onClick={handleSearch} />
                        <AiOutlineHeart />
                        <span className='cart-icon'>
                            <CgShoppingCart onClick={handleClick} />
                            <span>5</span>
                        </span>
                    </div>
                </div>
            </header>
            {showState && <Cart setShowCart={setShowState} />}
            {showSearch && <Search setShowSearch={setShowSearch} />}
        </>
    );
}

export default NavBar;