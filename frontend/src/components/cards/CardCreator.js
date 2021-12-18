import React, {useEffect, useState} from "react";

function Listing() {
    const [data, setData] = useState([]);
    const [data1, setData1] = useState([]);
    const [data2, setData2] = useState([]);
    const [data3, setData3] = useState([]);

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
                setData2(Object.values(myJson[2]))
                setData3(Object.values(myJson[3]))
            })
    }, [])
    return (
        [data, data1, data2, data3]

    );
}

export default Listing;