import React, {useContext} from "react";
import Header from "../components/headers/light";
import SimpleWithSideImage from "../components/faqs/SimpleWithSideImage";
import GetProfileData from "../components/faqs/ProfileCreator";
import AuthContext from '../store/auth-context';
import GetUserProducts from "../components/faqs/ProductsCreator";
import TabCardGrid from "../components/cards/TabCardGrid";
import WhoWant from "../components/faqs/WhoWant";

function WhoWantPage(item_id) {
    const authCtx = useContext(AuthContext)
    let itemData = GetItemData(item_id);
    let whoWantUsers = GetWhoWantUsers(authCtx.token);

    const GetItemData = (itemData) => {
        const A = itemData.map((item) => {
            return ({
                name: item.name,
                category: item.category,
                description: item.description,
                brand: item.brand,
                imageSrc: "http://localhost:3000/uploads/" + item.image,
                title: item.category,
                content: item.description,
                price: item.price + '$',
                location: item.location
            })
        });
        return A;
    }
    const itemData1 = GetItemData(itemData)

    const GetWhoWantUsers = (data) => {
        const B = data.map((item) => {
            return ({
                imageSrc: "http://localhost:3000/uploads/"+item.image,
                firstName: item.firstName,
                lastName: item.lastName,
                userName: item.userName,
                notification: item.notification,
            })
        });
        return B;
    }
    const whoWantUsers1 = GetWhoWantUsers(whoWantUsers)
    const  whoWantUsers3= {
        Clothings: whoWantUsers1
    }
    return <section>
        <Header/>
        <WhoWant
            item={itemData1}
            users={whoWantUsers3}
        />
    </section>

}

export default WhoWantPage;