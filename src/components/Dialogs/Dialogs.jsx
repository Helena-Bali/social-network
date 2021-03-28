import React from 'react'
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return <div className={`${classes.dialog} ${classes.active}`}>
        <NavLink to={`/messages/${props.id}`}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={classes.message}>{props.message}</div>
}

const Dialogs = () => {

    let dialogsData = [
        {
            id: 1,
            name: 'Милана'
        },

        {
            id: 2,
            name: 'Лёва'
        },
        {
            id: 3,
            name: 'Оля'
        },
        {
            id: 4,
            name: 'Вика'
        }
        ]

    let messagesData = [
        {
            id: 1,
            message: 'Пошли гулять!'
        },

        {
            id: 2,
            message: 'Привет!'
        },
        {
            id: 3,
            message: 'Как дела?'
        },
        {
            id: 4,
            message: 'Я люблю Милану'
        }
    ]

    let dialogsElements = dialogsData
        .map(it => <DialogItem name={it.name} id={it.id}/>)

    let messagesElements = messagesData
        .map(it => <Message message={it.message}/>)


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs