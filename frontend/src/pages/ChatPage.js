import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import Header from "components/headers/light.js"

import {useContext} from 'react';
import AuthContext from '../store/auth-context';
import ReceiverContext from '../store/receiver-context';
import Chat from "../components/faqs/Chat";
import ProductContext from "../store/product-context";
import FetchData from "../components/getters/GetData";

function ChatPage() {
    const authCtx = useContext(AuthContext);
    const recCtx = useContext(ReceiverContext);
    const productCtx = useContext(ProductContext);
    let productId = productCtx.id;
    let userName = authCtx.token;
    let friendUserName = recCtx.userName;
    const userDataUrl = 'http://localhost:8080/user/name?userName=';
    const allMessagesUrl = 'http://localhost:8080/messages/allBetween?sender='+userName + '&receiver=' + friendUserName +'&productId='+ productId;
    
    let userData = FetchData(userDataUrl + userName);
    let friendData = FetchData(userDataUrl + friendUserName);
    let allMessages = FetchData(allMessagesUrl)[0];
    const prepareMessagesData = (data) => {
        const A = data.map((item) => {
            return ({
                date: item.date,
                sender: item.sender,
                receiver: item.receiver,
                content: item.content,
                senderImg: "http://localhost:3000/uploads/" + item.senderImg,
                productImage: "http://localhost:3000/uploads/" + item.productImage
            })
        });
        return A;
    }

    const prepareUserData = (data) => {
        const B = data.map((item) => {
            return ({
                userName: item.userName,
                img: "http://localhost:3000/uploads/" + item.image,
            })
        });
        return B;
    }
    // const allMessages1 = prepareMessagesData(allMessages)
    const userData1 = prepareUserData(userData)
    const friendData1 = prepareUserData(friendData)
    return (<section>
            <Header/>
            <Chat
                userImageSrc={userData1[0].img}
                friendImageSrc={friendData1[0].img}
                messages={allMessages}
                friendUserName={friendData1[0].userName}
                userUserName={userData1[0].userName}
                productId={productId}
            />
        </section>

    )
}

export default ChatPage;