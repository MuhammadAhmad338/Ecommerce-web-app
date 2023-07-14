import { createContext } from "react";
import React from 'react';

export const AuthContext = createContext();

const MyAuthContext = ({ children }) => {

    return (
        <AuthContext.Provider value={{ }}>
            { children }
        </AuthContext.Provider>
    );
}

export default MyAuthContext;