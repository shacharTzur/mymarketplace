import React, {useEffect, useState} from "react";

function GetSellProducts(userName) {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8080/product/own/active?owner='+userName)
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

export default GetSellProducts;
