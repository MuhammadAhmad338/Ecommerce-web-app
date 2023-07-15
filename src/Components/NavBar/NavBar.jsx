import React, { useContext } from 'react';
import { CgShoppingCart } from 'react-icons/cg';
import { TbSearch } from 'react-icons/tb';
import { AiOutlineHeart } from 'react-icons/ai';
import Cart from '../Cart/Cart';
import Search from './Search/Search';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../Context/MyContext';
import './NavBar.css';

const NavBar = () => {

    //Here we are using the useState hooks for the cart and search
    const [showState, setShowState] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const { cartCount } = useContext(Context);
    const navigate = useNavigate();
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
                        <li onClick={() => navigate("/")}>Home</li>
                        <li>About</li>
                        <li>Categories</li>
                    </ul>
                    <div className='center' onClick={() => navigate("/")}>JSDEVSTORE</div>
                    <div className='right-navbar'>
                        <TbSearch onClick={handleSearch} />
                        <AiOutlineHeart />
                        <span className='cart-icon'>
                            <CgShoppingCart onClick={handleClick} />
                          {!!cartCount &&  <span>{cartCount}</span>}
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