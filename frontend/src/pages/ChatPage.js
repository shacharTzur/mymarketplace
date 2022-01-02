import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import Header from "components/headers/light.js"

import {useContext} from 'react';
import AuthContext from '../store/auth-context';
import ReceiverContext from '../store/receiver-context';
import GetUserData from "../helpers/GetUserData";
import GetAllMessages from "../helpers/GetAllMessages";
import Chat from "../components/faqs/Chat";

function ChatPage() {
    let productId = 1
    const authCtx = useContext(AuthContext);
    const recCtx = useContext(ReceiverContext);
    let userName = authCtx.token;
    let friendUserName = recCtx.userName;
    let userData = GetUserData(userName);
    let friendData = GetUserData(friendUserName)
    let allMessages = GetAllMessages(userName, friendUserName, 3);
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
    const allMessages1 = prepareMessagesData(allMessages)
    const userData1 = prepareUserData(userData)
    const friendData1 = prepareUserData(friendData)
    return (<section>
            <Header/>
            <Chat
                userImageSrc={userData1[0].img}
                friendImageSrc={friendData1[0].img}
                messages={allMessages1}
                friendUserName={friendData1[0].userName}
                userUserName={userData1[0].userName}
            />
        </section>

    )
}

export default ChatPage;