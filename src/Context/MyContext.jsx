import { createContext, useEffect, useState } from "react";
import axios from "axios";

const Context = createContext();

const params = {
    headers: {
        Authorization: 'bearer ' + import.meta.env.VITE_APP_STRAPI_APP_KEY
    }
}

const MyAppContext = ({ children }) => {

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    const fetchProducts = async () => {
        try {
            const { data } = await axios.get("http://localhost:1337/api/products?populate=*", params);
            setProducts(data);
        } catch (error) {
            console.log(error);
        }
    }

    const fetchCategories = async () => {
        try {
            const { data } = await axios.get("http://localhost:1337/api/categories?populate=*", params);
            setCategories(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchProducts();
        fetchCategories();
    }, []);

    return <Context.Provider value={{ products, categories }}>
        {children}
    </Context.Provider>
}

export { MyAppContext, Context, params };