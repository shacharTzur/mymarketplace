import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import Header from "components/headers/light.js"

import FullForm from "components/forms/TwoColContactUsWithIllustrationFullForm.js"
import AuthContext from '../store/auth-context';
import { useContext } from 'react';
import GetAfterHashTag from "../helpers/GetAfterHashTag";
import GetUserData from "../helpers/GetUserData";
import GetAllMessages from "../helpers/GetAllMessages";
import Inbox from "../components/faqs/Inbox";

function InboxPage() {
    const authCtx = useContext(AuthContext);
    let userData = GetUserData(authCtx.token);
    let allMessages = GetAllMessages(authCtx.token);
    const prepareMessagesData = (data) => {
        const A = data.map((item) => {
            return ({
                date: item.date,
                from: item.from,
                content: item.content,
                senderImg: item.senderImg,
                itemImg: item.product_image
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
    return (<section>
            <Header/>
            <Inbox
                imageSrc={userData1[0].img}
                messages={allMessages1}
            />
        </section>

    )}
export default InboxPage;