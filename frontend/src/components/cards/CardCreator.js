import React, {useEffect, useState} from "react";

function Listing() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/product/all')
            .then(function (response) {
                console.log(response)
                return response.json();
            })
            .then(function (myJson) {
                console.log(myJson);
                setData(JSON.stringify(myJson))

            })
    }, [])
    return (
        data
    );
}

export default Listing;