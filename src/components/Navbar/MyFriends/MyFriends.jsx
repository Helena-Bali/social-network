import React from 'react'
import classes from "./MyFriends.module.css";
import Friend from "./Friend/Friend";

const MyFriends = (props) => {
    return (
        <div>
            <div className={classes.friends}><h1>Friends</h1></div>
            <div>{props.allFriends.map(it => < Friend key={it.id} friend={it.friend}/>)}</div>
        </div>
    )
}

export default MyFriends
