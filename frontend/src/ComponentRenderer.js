import React from 'react';
import { useParams } from 'react-router-dom';
import AnimationRevealPage from "helpers/AnimationRevealPage.js"

import ProfilePage from "pages/ProfilePage.js"
import HomePage from "pages/HomePage.js";
import IWantPage from "pages/IWantPage.js";
import AddItemPage from "pages/AddItem.js";
import WhoWantPage from "pages/WhoWantPage";
import LoginPage from "pages/Login.js";
import SignupPage from "pages/SignupPage.js";
import ChatPage from "pages/ChatPage";
import InboxPage from "pages/InboxPage";

export const components = {
  landingPages: {
    Homepage: {
      component:HomePage,
      url: "/components/landingPages/Homepage"
    },
  },

  innerPages: {
    IWantPage: {
      component: IWantPage,
      // scrollAnimationDisabled: true,
      url: "/components/innerPages/IWantPage",
    },
     AddItemPage: {
      component: AddItemPage,
      // scrollAnimationDisabled: true,
      url: "/components/innerPages/AddItem",
    },
    LoginPage: {
      component: LoginPage,
      scrollAnimationDisabled: true,
      url: "/components/innerPages/LoginPage",
    },
    ProfilePage: {
      component: ProfilePage,
      url: "http://localhost:3000/innerPages/ProfilePage",
    },
    SignupPage: {
      component: SignupPage,
      url: `/components/innerPages/SignupPage`,
      scrollAnimationDisabled: true,
    },
    WhoWantPage: {
      component: WhoWantPage,
      url: `/components/innerPages/WhoWantPage`,
      scrollAnimationDisabled: true,
    },
    InboxPage: {
      component: InboxPage,
      url: `/components/innerPages/InboxPage`,
      scrollAnimationDisabled: true,
    },
    ChatPage: {
      component: ChatPage,
      url: `/components/innerPages/ChatPage`,
      scrollAnimationDisabled: true,
    },
  },
}

export default () => {
  const { type, subtype, name } = useParams()

  try {
    let Component = null;
    if(type === "blocks" && subtype) {
      Component= components[type][subtype]["elements"][name].component
      return <AnimationRevealPage disabled>
          <Component/>
        </AnimationRevealPage>
    }
    else
      Component= components[type][name].component

    if(Component)
      return <Component/>

    throw new Error("Component Not Found")
  }
  catch (e) {
    console.log(e)
    return <div>Error: Component Not Found</div>
  }
}
