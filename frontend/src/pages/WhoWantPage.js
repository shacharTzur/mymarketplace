import React, {useContext} from "react";
import Header from "../components/headers/light";
import GetItemData from "../components/faqs/ItemDataCreator";
import GetWhoWantUsers from "../components/faqs/WhoWantCreator";
import AuthContext from '../store/auth-context';
import WhoWant from "../components/faqs/WhoWant";


function WhoWantPage() {
    let param = window.location.href;
    let itemId = param.charAt(param.length-1);
    let data = GetItemData(itemId);
    let whoWantUsers = GetWhoWantUsers(itemId);

    const itemData = (itemData) => {
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
    const data1 = itemData(data)

    const WhoWantUsers = (data) => {
        const B = data.map((item) => {
            return ({
                imageSrc: "http://localhost:3000/uploads/"+item.image,
                firstName: item.firstName,
                lastName: item.lastName,
                userName: item.userName,
                notification: item.notification,
                productId: item.id
            })
        });
        return B;
    }
    const whoWantUsers1 = WhoWantUsers(whoWantUsers)
    const  whoWantUsers3= {
        Clothings: whoWantUsers1
    }
    return <section>
        <Header/>
        <WhoWant
            item={data1}
            users={whoWantUsers3}
        />
    </section>

}

export default WhoWantPage;