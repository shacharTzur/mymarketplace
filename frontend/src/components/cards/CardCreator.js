import React, {useEffect, useState} from "react";

function Listing(userName) {
    const [data, setData] = useState([]);
    let url = 'http://localhost:8080/product/allForYou?username=' + userName;
    useEffect(() => {
        fetch(url)
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

export default Listing;