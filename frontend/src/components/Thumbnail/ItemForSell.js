import classes from './ItemForSell.module.css';
import ProfileBubble from "./ProfileBubble";

function ItemForSell(props) {
    function profileButtonHandler(){
        console.log('Clicked')
        fetch('http://localhost:8080/user/all')
          .then(response => response.json())
          .then(data => console.log(data))

    }
    return (
        <div className={classes.item_for_sell}>
            <h3>{props.name}</h3>
            <ProfileBubble name='profile name' />
            <button>className={classes.btn} onClick={profileButtonHandler}</button>
            <button onClick={profileButtonHandler}>Hi</button>
        </div>
            
    );
};

export default ItemForSell;