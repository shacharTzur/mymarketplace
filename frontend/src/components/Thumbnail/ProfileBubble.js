function ProfileBubble(props) {
    return (
        <div className='bubble'>
            <p>props.name</p>
            {/*<img src={require(props.picture_path)} alt={props.name}/>*/}
            <button className='btn'>Go To Profile</button>
        </div>
    );
}

export default ProfileBubble