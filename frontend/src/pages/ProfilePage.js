import React, {useContext} from "react";
import Header from "../components/headers/light";
import SimpleWithSideImage from "../components/faqs/SimpleWithSideImage";
import GetProfileData from "../components/faqs/ProfileCreator";
import AuthContext from '../store/auth-context';
import GetUserProducts from "../components/faqs/ProductsCreator";
import TabCardGrid from "../components/cards/TabCardGrid";

function ProfilePage() {
    const authCtx = useContext(AuthContext)
    // let data = GetProfileData(authCtx.token);
    let data = GetProfileData(authCtx.token);
    let userProducts = GetUserProducts(authCtx.token);

    const prepareData = (data) => {
        const A = data.map((item) => {
            return ({
                imageSrc: "http://localhost:3000/uploads/"+item.image,
                firstName: item.firstName,
                lastName: item.lastName,
                userName: item.userName,
                notification: item.notification
                // location: item.location
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
                url: "#"
            })
        });
        return B;
    }
    const products1 = prepareProducts(userProducts)
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