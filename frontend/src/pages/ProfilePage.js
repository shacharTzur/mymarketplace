import React, {useContext} from "react";
import Header from "../components/headers/light";
import SimpleWithSideImage from "../components/faqs/SimpleWithSideImage";
import AuthContext from '../store/auth-context';
import TabCardGrid from "../components/cards/TabCardGrid";
import FetchData from '../components/getters/GetData';

function ProfilePage() {
    const authCtx = useContext(AuthContext)
    const thisUserName = authCtx.token;
    const profileDataUrl = 'http://localhost:8080/user/name?userName='
    const userProcutsUrl = 'http://localhost:8080/product/name?owner='
    let data = FetchData(profileDataUrl + thisUserName);
    let userProducts = FetchData(userProcutsUrl + thisUserName);
    const prepareData = (data) => {
        const A = data.map((item) => {
            return ({
                imageSrc: "http://localhost:3000/uploads/"+item.image,
                firstName: item.firstName,
                lastName: item.lastName,
                userName: item.userName,
                notification: item.notification,
                location: item.location
            })
        });
        return A;
    }
    const data1 = prepareData(data)
    const prepareProducts = (data) => {
        const B = data.map((item) => {
            return ({
                imageSrc: "http://localhost:3000/uploads/"+item.image,
                category: item.category,
                description: item.description,
                brand: item.brand,
                price: 'price: ' + item.price + '$',
                notification: item.notification,
                id: item.id
            })
        });
        return B;
    }
    const products1 = prepareProducts(userProducts[0])
    const products3 = {
        Clothings: products1
    }
    return <section>
        <Header/>
        <SimpleWithSideImage
            data={data1}
            products={products3}
        />
    </section>

}

export default ProfilePage;