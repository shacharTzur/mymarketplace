import React, {useEffect, useState} from "react";

function Listing() {
    const [data, setData] = useState([]);
    const [data1, setData1] = useState([]);
    useEffect(()=> {
        fetch('http://localhost:8080/product/all'
        )
            .then(function (response) {
                console.log(response)
                return response.json();
            })
            .then(function (myJson) {
                console.log(myJson);
                setData(Object.values(myJson[0]))
                setData1(Object.values(myJson[1]))
            })
    }, [])
    return (
        [data, data1]

    );
}

export default Listing;
