import React, {useState, useEffect} from 'react';

let logoutTimer;

const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    login: (token) => {
    },
    logout: () => {
    }
});


export const AuthContextProvider = (props) => {
    const initialToken = localStorage.getItem('token');
    const [token, setToken] = useState(initialToken);
    const userisLoggedIn = !!token;

    const logoutHandler = () => {
        setToken(null);
        localStorage.removeItem('token');
    };

    // const loginHandler = (token, expirationTime) => {
    const loginHandler = (token) => {
        setToken(token);
        localStorage.setItem('token', token);

    };

    const contextValue = {
        token: token,
        isLoggedIn: userisLoggedIn,
        login: loginHandler,
        logout: logoutHandler
    };
    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>);
}

export default AuthContext;