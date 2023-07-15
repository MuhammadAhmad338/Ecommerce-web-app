import { createContext, useEffect, useState } from "react";
import axios from "axios";

const Context = createContext();

const params = {
    headers: {
        Authorization: 'bearer ' + import.meta.env.VITE_APP_STRAPI_APP_KEY
    }
}

export const makePaymentRequest = axios.create({
    baseURL: import.meta.env.VITE_APP_DEV_URL,
    headers: {
        Authorization: "bearer " + import.meta.env.VITE_APP_STRAPI_APP_KEY,
    },
});

const MyAppContext = ({ children }) => {

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartSubTotal, setCartSubTotal] = useState(0);

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

    const handleAddToCart = (product, quantity) => {
        let items = [...cartItems];
        let index = items.findIndex(p => p.id === product.id);
        if (index !== -1) {
            items[index].attributes.quantity += quantity;
        } else {
            product.attributes.quantity = quantity;
            items = [ ...items, product];
        }
        setCartItems(items);
    }

    const handleRemoveFromCart = (product) => {
        let items = [...cartItems];
        items = items.filter(item => item.id !== product.id);
        setCartItems(items);
    }

    const handleCartProductQuantity = (type, product) => {
        let items = [...cartItems];
        let index = items.findIndex(p => p.id === product.id);
        if (type === "inc") {
            items[index].attributes.quantity += 1;
        } else if (type === "dec") {
            if (items[index].attributes.quantity === 1) return;
            items[index].attributes.quantity -= 1;
        }
        setCartItems(items);
    }

    useEffect(() => {
        let count = 0;
        cartItems.map(item => (count += item.attributes.quantity));
        setCartCount(count);

        let total = 0;
        cartItems.map(item => (total += item.attributes.price * item.attributes.quantity));
        setCartSubTotal(total);
    }, [cartItems]);

    return <Context.Provider value={{
        products, categories, cartItems, cartCount, cartSubTotal, fetchProducts, fetchCategories,
        handleAddToCart, handleRemoveFromCart, handleCartProductQuantity
    }}>
        {children}
    </Context.Provider>
}

export { MyAppContext, Context, params };