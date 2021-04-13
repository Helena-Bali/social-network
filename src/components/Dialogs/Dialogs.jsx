import React from 'react'
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/messages-reducer";


const Dialogs = (props) => {

    const dialogsElements = props.state.dialogsData
        .map(it => <DialogItem name={it.name} id={it.id}/>)

    const messagesElements = props.state.messagesData
        .map(it => <Message message={it.message}/>)
    const newMessageElement = React.createRef()
    const newMessageBody = props.state.newMessageBody

    const sendMessage = () => {
          props.dispatch(sendMessageCreator())
    }
    const onMessageChange = (event) => {
        let body = event.target.value
        props.dispatch(updateNewMessageBodyCreator(body))
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
                    <button onClick={sendMessage}>Send message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs