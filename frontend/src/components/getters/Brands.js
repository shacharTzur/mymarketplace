import React, {useEffect, useState} from "react";

function Brands() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/brands/all')
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

export default Brands;