import React, { createContext, useState, useEffect } from 'react';
import axios from "axios";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [products, setProducts] = useState([]);

    const addToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get("https://webappoo7.onrender.com/products/getProducts");
            const data = await response.json();
            setProducts(data);
        }
        fetchProducts();
    }, []); 

    return (
        <ProductContext.Provider value={{ cart, addToCart, products }}>
            {children}
        </ProductContext.Provider>
    );
}

export { ProductProvider, ProductContext }; 