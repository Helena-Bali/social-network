import React from 'react'
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/messages-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
    let state = props.store.getState().messagesPage
    const sendMessage = () => {
          props.store.dispatch(sendMessageCreator())
    }
    const onMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
        <Dialogs
        sendMessage={sendMessage}
        updateNewMessageBody={onMessageChange}
        messagesPage={state}/>
    )
}

export default DialogsContainer