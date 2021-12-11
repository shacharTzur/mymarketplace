import ItemForSell from '../components/Thumbnail/ItemForSell';
import ProfileBubble from "../components/Thumbnail/ProfileBubble";
import BackDrop from "../components/Thumbnail/BackDrop";
const HomePage = () => {
    return (
        <div>
            <ItemForSell name='dress'/>
            <ItemForSell name='shirt'/>
            <ItemForSell name='pants' picture_path='C:\Users\noyki\WebstormProjects\mymarketplace\frontend\src\components\Thumbnail\pics\pants_pic.jpg' />
            <BackDrop />
        </div>
    );


};

export default HomePage;
