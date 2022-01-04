import React, {useContext} from "react";
import tw from "twin.macro";
import TabGrid from "components/cards/TabCardGrid.js";
import Header from "components/headers/light.js"
import Listing from '../components/cards/CardCreator'
import AuthContext from "../store/auth-context";

function HomePage() {
    const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`
    let data = Listing();
    const authCtx = useContext(AuthContext);
    const userName = authCtx.token;
    const prepareTabsData = (data) => {
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
                notification: false,
                size: item.size,
                condition: item.condi,
                owner: item.owner,
                productId: item.id
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
        <Header/>
        <TabGrid
            tabs={tabs3}
            heading={'Hi ' + userName + ','}
            subheading={<> Check out today's <HighlightedText>Listings</HighlightedText></>}
        />
    </section>

}
export default HomePage;