import React, {useState, useEffect} from 'react';

const ProductContext = React.createContext({
    id: -1
});

export const ReceiverContextProvider = (props) => {
    const [id, setID] = useState(-1);

    const contextValue = {
        id: id,
    };
    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>);
}

export default ProductContext;