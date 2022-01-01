import React, {useEffect, useState} from "react";

function GetItemData(itemId) {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8080/product/product_id?id='+itemId)
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

export default GetProfileData;
