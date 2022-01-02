import React, {useEffect, useState} from "react";

function GetUserData(userName) {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8080/user/name?userName=' + userName)
            .then(function (response) {
                console.log(response)
                return response.json();
            })
            .then(function (myJson) {
                console.log(myJson);
                setData(myJson)
            })
    }, [])
    return (
        [data]
    );
}

export default GetUserData;