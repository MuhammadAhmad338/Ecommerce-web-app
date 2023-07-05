import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { CountProvider } from './Context/CounterContext.jsx';
import { ProductProvider } from './Context/ProductContext.jsx';
import "./main.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductProvider>
      <CountProvider>
        <App />
      </CountProvider>
    </ProductProvider>
  </React.StrictMode>
);
