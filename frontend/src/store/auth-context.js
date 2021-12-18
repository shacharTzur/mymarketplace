import React, {useState, useEffect} from 'react';

const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    login: (token) => {},
    logout: () => {}
});

// const retrieveStoredToken = () => {
//     const storedToken = localStorage.getItem('token');
//     return {token: storedToken};
// };

export const AuthContextProvider = (props) => {
    // const tokenData = localStorage.getItem('token');
    // let initialToken;
    // if (tokenData){
    //     initialToken = tokenData.token
    // }
    const initialToken = localStorage.getItem('token');
    const [token, setToken] = useState(initialToken);
    const userisLoggedIn = !!token;

    // const loginHandler = (token, expirationTime) => {

    const loginHandler = (token) => {
        setToken(token);
        localStorage.setItem('token', token);
    };

    const logoutHandler = () => {
        setToken(null);
        localStorage.removeItem('token');
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