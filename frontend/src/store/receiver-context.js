import React, {useState, useEffect} from 'react';

const ReceiverContext = React.createContext({
    userName: '',
    setUserName:(name) => {}
});

export const ReceiverContextProvider = (props) => {
    const [userName, setUserName] = useState("");

    const userNameHandler = (name) => {
        setUserName(name);
    }

    const contextValue = {
        userName: userName,
        setUserName: userNameHandler
    };

    return (
        <ReceiverContext.Provider value={contextValue}>
            {props.children}
        </ReceiverContext.Provider>);
}

export default ReceiverContext;