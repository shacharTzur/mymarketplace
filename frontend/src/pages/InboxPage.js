import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import Header from "components/headers/light.js"
import AuthContext from '../store/auth-context';
import { useContext } from 'react';
import GetUserData from "../helpers/GetUserData";
import GetSellProducts from "../components/inbox/ProductsSellCreator";
import GetBuyProducts from "../components/inbox/ProductsBuyCreator";
import TabCardGridForProducts from "../components/inbox/TabCardGridForBuyProducts";
import TabCardGridForBuyProducts from "../components/inbox/TabCardGridForSellBuyProducts";

function InboxPage() {
    const authCtx = useContext(AuthContext);
    let userData = GetUserData(authCtx.token);
    let buyProducts = GetBuyProducts(authCtx.token);
    let sellProducts = GetSellProducts(authCtx.token);
    const prepareProductsData = (data) => {
        const A = data.map((item) => {
            return ({
                name: item.name,
                category: item.category,
                description: item.description,
                brand: item.brand,
                imageSrc: "http://localhost:3000/uploads/" + item.image,
                title: item.category,
                content: item.description,
                price: item.price + '$',
                url: '#'
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
            <TabCardGridForProducts
                heading="Sell Talks"
                tabs={sellProducts3}
            />
        </section>

    )}
export default InboxPage;