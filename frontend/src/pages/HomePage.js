import React, {useContext} from "react";
import tw from "twin.macro";
import TabGrid from "components/cards/TabCardGrid.js";
import Header from "components/headers/light.js";
import AuthContext from "../store/auth-context";
import FetchData from '../components/getters/GetData';

function HomePage() {
    const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`
    const authCtx = useContext(AuthContext);
    let userName = authCtx.token;
    if (authCtx.token === null){
        userName = 'Stranger'
    }
    let data = FetchData('http://localhost:8080/product/allForYou?username=' + userName);
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

    const tabs = prepareTabsData(data[0])
    const tabs3 = {
        Clothings: tabs
    }
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