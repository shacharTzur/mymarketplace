import React, {useEffect, useState} from "react";

function GetWhoWantUsers(itemId) {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8080/Iwant/prod_id?prod_id='+itemId)
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

export default GetWhoWantUsers;
