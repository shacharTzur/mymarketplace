import React from "react";
import tw from "twin.macro";
import TabGrid from "components/cards/TabCardGrid.js";
import {useState, useEffect} from 'react';

import Listing from '../components/cards/CardCreator'

function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

function HomePage() {
        const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
        // const data = fetch('http://localhost:8080/product/all')
        // .then(function (response) {
        //     console.log(response)
        //     return response.json();
        // })
        // .then(data => {
        //     console.log(data);

        // })
        // const data =[{"id":1,"category":"DRESS","brand":"ZARA","price":200,"condition":null,"owner":"stzur","description":"vrey nice dress!","name":"black dress from zara brand","size":"M","imagepath":"path for image","image":"path for image"}, {"id":1,"category":"DRESS","brand":"ZARA","price":200,"condition":null,"owner":"stzur","description":"vrey nice dress!","name":"FUCK","size":"M","imagepath":"path for image","image":"path for image"}]

        let data = Listing();

        const prepareTabsData = (data) => {
            const A = data.map((item) => {
                return ({
                    imageSrc: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
                    // title: item[6],
                    // content: item[5],
                    // price: item[3],
                    // rating: "5.0",
                    // reviews: "87",
                    // url: "#"
                    //
                    content: item.category,
                    price: item.price,
                    rating: "5.0",
                    reviews: "87",
                    url: "#"
                })
            });
            return A;
        }

        const tabs = prepareTabsData(data)
        const tabs3 = {
            Clothings: tabs
        }
        console.log(tabs);
        console.log(tabs3);
        const tabs2 = {
            Clothing: [{
                imageSrc: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
                title: "HAHA",
                content: "Tomato Salad & Carrot",
                price: "$5.99",
                rating: "5.0",
                reviews: "87",
                url: "#"
            }, {
                imageSrc: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
                title: "Macaroni",
                content: "Cheese Pizza",
                price: "$2.99",
                rating: "4.8",
                reviews: "32",
                url: "#"
            }]
        };

    return <section>
        <TabGrid
            tabs={tabs3}
            heading={<>
                <HighlightedText>Listings</HighlightedText>
            </>}
        />
    </section>

}

export default HomePage;