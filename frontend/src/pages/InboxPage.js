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
    const userName = userData.userName
    let allMessages = GetAllMessages(userName);
    const prepareMessagesData = (data) => {
        const A = data.map((item) => {
            return ({
                data: item.date,
                from: item.from,
                content: item.content,
                senderImg: item.senderImg,
                itemImg: item.itemImg
            })
        });
        return A;
    }

    const allMessages1 = prepareMessagesData(allMessages)
    return (<section>
            <Header/>
            <Inbox
                imageSrc={"http://localhost:3000/uploads/"+userData[0].imageSrc}
                messages={allMessages1}
            />
        </section>

    )}
export default InboxPage;