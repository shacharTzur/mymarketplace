import classes from './ItemForSell.module.css';
import ProfileBubble from "./ProfileBubble";

function ItemForSell(props) {
    function profileButtonHandler(){
        console.log('Clicked')

    }
    return (
        <div className={classes.item_for_sell}>
            <h3>{props.name}</h3>
            <ProfileBubble name='profile name' />
            <button>className={classes.btn} onClick={profileButtonHandler}</button>
        </div>
    );
};

export default ItemForSell;