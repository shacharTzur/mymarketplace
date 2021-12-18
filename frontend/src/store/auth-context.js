import React, {useState, useEffect} from 'react';

let logoutTimer;

const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    login: (token) => {
        alert(token)
    },
    logout: () => {
    }
});

// const retrieveStoredToken = () => {
//     const storedToken = localStorage.getItem('token');
//     return {
//         token: storedToken
//     }

export const AuthContextProvider = (props) => {
    const tokenData = localStorage.getItem('token');
    let initialToken;
    if (tokenData){
        initialToken = tokenData.token
    }
    const [token, setToken] = useState(initialToken);
    const userisLoggedIn = !!token;

    const logoutHandler = () => {
        setToken(null);
        localStorage.removeItem('token');
    };

    // const loginHandler = (token, expirationTime) => {
    const loginHandler = (token) => {
        setToken(token);
        // alert(token)
        localStorage.setItem('tokenn', token);

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