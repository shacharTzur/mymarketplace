import React, {useEffect, useState} from "react";
import { useContext } from 'react'
import AuthContext from '../../store/auth-context';

function Listing() {
    const [data, setData] = useState([]);
    const authCtx = useContext(AuthContext);
    let url = 'http://localhost:8080/product/allForYou?username=' + authCtx.token;
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