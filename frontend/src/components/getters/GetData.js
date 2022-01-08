import React, {useEffect, useState} from "react";

function FetchData(url) {
    const [data, setData] = useState([]);
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
        [data]
    );
}

export default FetchData;
