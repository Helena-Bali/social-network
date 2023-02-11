import React from 'react'
import './Navbar.module.css'
import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import MyFriends from "./MyFriends/MyFriends";

const Navbar = (props) => {
    return <nav className={classes.nav}>
        <div className={classes.item}>
            <NavLink to='/profile' activeClassName={classes.active}>Profile</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/messages' activeClassName={classes.active}>Messages</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/users' activeClassName={classes.active}>Users</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='news' activeClassName={classes.active}>News</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='music' activeClassName={classes.active}>Music</NavLink>
        </div>
        <MyFriends allFriends={props.state.allFriends}/>
    </nav>
}

export default Navbar
