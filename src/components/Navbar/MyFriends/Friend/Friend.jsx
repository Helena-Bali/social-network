import React from 'react'
import avatar from "../../../../assets/images/avatar.jpg"
import classes from "../MyFriends.module.css";

const Friend = (props) => {
    return <div className={classes.name}>
        <img src={avatar} />
        {props.friend}
    </div>


}

export default Friend
