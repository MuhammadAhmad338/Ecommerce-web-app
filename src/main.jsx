import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { MyAppContext } from './Context/MyContext.jsx';
import "./main.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <MyAppContext>
        <App />
      </MyAppContext>
  </React.StrictMode>
);
