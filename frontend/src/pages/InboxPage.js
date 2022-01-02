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
    // let param = window.location.href;
    // let userId = GetAfterHashTag(param);
    // let userData = GetUserData(userId);
    // const userName = userData.userName
    // let allMessages = GetAllMessages(userName);
    return (<section>
            <Header/>
            <Inbox>
                {/*user=userData,*/}
                {/*messages=allMessages*/}
            </Inbox>
        </section>

    )}

export default InboxPage;