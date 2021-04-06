import React from 'react'
import classes from "../MyFriends.module.css";

const Friend = (props) => {
    return <div className={classes.name}>
        <img src='https://bipbap.ru/wp-content/uploads/2020/04/Edinorog-risunki-dlya-srisovki-krasivye-prikolnye-i-interesnye-18.jpg' />
        {props.friend}
    </div>


}

export default Friend