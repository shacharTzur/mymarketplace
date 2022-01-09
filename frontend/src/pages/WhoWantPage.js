import React, {useContext} from "react";
import Header from "../components/headers/light";
import ProductContext from '../store/product-context';
import WhoWant from "../components/faqs/WhoWant";
import FetchData from '../components/getters/GetData';


function WhoWantPage() {
    const prodCtx = useContext(ProductContext);
    const whoWantUrl = 'http://localhost:8080/Iwant/prod_id?prod_id=';
    const itemDataUrl = 'http://localhost:8080/product/product_id?id=';
    let itemId = prodCtx.id;
    let data = FetchData(itemDataUrl + itemId);
    let whoWantUsers = FetchData(whoWantUrl+itemId)

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
                location: item.location,
                id: item.id
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
            })
        });
        return B;
    }
    const whoWantUsers1 = WhoWantUsers(whoWantUsers[0])
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