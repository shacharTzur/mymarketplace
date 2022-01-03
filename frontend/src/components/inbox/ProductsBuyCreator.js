import React, {useEffect, useState} from "react";

function GetBuyProducts(userName) {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(''+userName)
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

export default GetBuyProducts;
