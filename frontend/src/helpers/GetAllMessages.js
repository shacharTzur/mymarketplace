import React, {useEffect, useState} from "react";

function GetAllMessages(userName, friendUserName, productId) {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8080/messages/allBetween?sender='+userName + '&receiver=' + friendUserName +'&productId='+ productId)
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
export default GetAllMessages;