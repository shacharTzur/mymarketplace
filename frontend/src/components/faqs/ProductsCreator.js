import React, {useEffect, useState} from "react";

function GetUserProducts(userName){
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8080/product/name?owner='+userName)
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
        data
    );
}

export default GetUserProducts;