import React from 'react'
import './Header.module.css'
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={classes.header}>
        <img alt='logo' src='https://static.vecteezy.com/system/resources/previews/001/191/141/non_2x/flower-logo-png.png'/>
        <div className={classes.loginBlock}>
            {props.isAuth
                ? <div> {props.login} - <button onClick={props.logout}>Log out</button></div>
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
}

export default Header
