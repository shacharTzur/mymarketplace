import React, {useState, useEffect} from 'react';

const ReceiverContext = React.createContext({
    userName: ''
});

export const ReceiverContextProvider = (props) => {
    const [userName, setUserName] = useState("");

    const contextValue = {
        userName: userName,
    };
    return (
        <ReceiverContext.Provider value={contextValue}>
            {props.children}
        </ReceiverContext.Provider>);
}

export default ReceiverContext;