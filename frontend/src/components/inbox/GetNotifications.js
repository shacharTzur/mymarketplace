import React, {useEffect, useState} from "react";

function GetNotifications(userName) {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8080/product/NotOwn/active/newMsg?owner='+userName)
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                setData(myJson)
            })
    }, [])
    return (
        data
    );
}

export default GetNotifications;
