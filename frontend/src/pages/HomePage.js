import React from "react";
import tw from "twin.macro";
import TabGrid from "components/cards/TabCardGrid.js";
import Header from "components/headers/light.js"

import Listing from '../components/cards/CardCreator'

function HomePage() {
    const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`
    let data = Listing();

    const prepareTabsData = (data) => {
        const A = data.map((item) => {
            return ({
                imageSrc: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
                title: item.category,
                content: item.description,
                price: 'price: ' + item.price + '$',
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
            // rating: "4.8",
            // reviews: "32",
            url: "#"
        }]
    };

    return <section>
        <Header />
        <TabGrid
            tabs={tabs3}
            heading={<> Check out today's <HighlightedText>Listings</HighlightedText></>}
        />
    </section>

}

export default HomePage;