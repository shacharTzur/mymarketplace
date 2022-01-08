import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import Header from "components/headers/light.js"
import AuthContext from '../store/auth-context';
import { useContext } from 'react';
import TabCardGridForBuyProducts from "../components/inbox/TabCardGridForBuyProducts";
import TabCardGridForSellProducts from "../components/inbox/TabCardGridForSellProducts";
import FetchData from '../components/getters/GetData';

function InboxPage() {
    const authCtx = useContext(AuthContext);
    const thisUserName = authCtx.token;
    const userDataUrl = 'http://localhost:8080/user/name?userName=' + thisUserName;
    const buyProductsUrl = 'http://localhost:8080/product/NotOwn/active?owner=' + thisUserName;
    const sellProductsUrl = 'http://localhost:8080/product/own/active?owner=' + thisUserName;
    const notificationsUrl = 'http://localhost:8080/product/NotOwn/active/newMsg?owner=' + thisUserName;
    let userData = FetchData(userDataUrl);
    let buyProducts = FetchData(buyProductsUrl)[0];
    let sellProducts = FetchData(sellProductsUrl)[0];
    let notification = FetchData(notificationsUrl)[0];
    const prepareProductsData = (data) => {
        const A = data.map((item) => {
            return ({
                name: item.name,
                category: item.category,
                description: item.description,
                brand: item.brand,
                imageSrc: "http://localhost:3000/uploads/" + item.image,
                title: item.category,
                id: item.id,
                content: item.description,
                price: item.price + '$',
                productOwner: item.owner,
                whoWantUrl: 'http://localhost:3000/components/innerPages/WhoWantPage'

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
    
    buyProducts = prepareProductsData(buyProducts)
    for (let i=0; i<buyProducts.length; i++){
        buyProducts[i].notify = notification[i]
    }
    sellProducts = prepareProductsData(sellProducts)
    userData = prepareUserData(userData)
    const buyProducts3 = {
        Products: buyProducts
    }
    const sellProducts3 = {
        Products: sellProducts
    }
    return (<section>
            <Header/>
            <TabCardGridForBuyProducts
                heading="Buy Talks"
                tabs={buyProducts3}
                   />
            <TabCardGridForSellProducts
                heading="Sell Talks"
                tabs={sellProducts3}
            />
        </section>

    )}
export default InboxPage;