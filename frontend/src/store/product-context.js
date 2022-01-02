import React, {useState, useEffect} from 'react';

const ProductContext = React.createContext({
    id: -1,
    setProductId:(id) => {}
});

export const ProductContextProvider = (props) => {
    const [id, setProductId] = useState(-1);

    const productIdHandler = (id) => {
        alert("this is id");
        alert(id);
        setProductId(id);
    }

    const contextValue = {
        id: id,
        setProductId: productIdHandler
    };

    return (
        <ProductContext.Provider value={contextValue}>
            {props.children}
        </ProductContext.Provider>);
}

export default ProductContext;