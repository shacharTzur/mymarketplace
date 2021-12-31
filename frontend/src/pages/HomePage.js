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
              category: item.category,
                description: item.description,
                brand: item.brand,
                imageSrc: "http://localhost:3000/uploads/"+item.image,
                title: item.category,
                content: item.description,
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

    return <section>
        <Header />
        <TabGrid
            tabs={tabs3}
            heading={<> Check out today's <HighlightedText>Listings</HighlightedText></>}
        />
    </section>

}

export default HomePage;