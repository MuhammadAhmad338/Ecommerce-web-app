import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { MyAppContext } from './Context/MyContext.jsx';
import "./main.css";
import MyAuthContext from './Context/AuthContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyAuthContext>
      <MyAppContext>
        <App />
      </MyAppContext>
    </MyAuthContext>
  </React.StrictMode>
);
