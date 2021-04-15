import React from 'react'
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let state = props.messagesPage

    const dialogsElements = state.dialogsData
        .map(it => <DialogItem name={it.name} id={it.id}/>)

    const messagesElements = state.messagesData
        .map(it => <Message message={it.message}/>)
    const newMessageElement = React.createRef()
    const newMessageBody = state.newMessageBody

    const sendMessage = () => {
        props.sendMessage()
    }

    const onMessageChange = (event) => {
        let body = event.target.value
        props.updateNewMessageBody(body)
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <div>
                    <textarea
                        value={newMessageBody}
                        onChange={onMessageChange}
                        placeholder="Enter your message"
                        ref={newMessageElement}>
                    </textarea>
                </div>
                <div>
                    <button onClick={props.sendMessage}>Send message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs